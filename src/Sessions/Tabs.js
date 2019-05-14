import React, { Component } from "react";
import Tab from "./Tab";

class Tabs extends Component {
  state = {
    activeTab: this.props.children[0].props.label
  };

  onTabClick = tab => {
    this.setState({
      activeTab: tab
    });
  };
  render() {
    const {
      onTabClick,
      props: { children },
      state: { activeTab }
    } = this;
    return (
      <div className="tabs">
        <ul className="tab-list">
          {children.map(child => {
            const { label } = child.props;

            return (
              <Tab
                activeTab={activeTab}
                key={label}
                label={label}
                onClick={onTabClick}
              />
            );
          })}
        </ul>
        <div className="tab-content">
          {children.map(child => {
            if (child.props.label !== activeTab) return undefined;
            return child.props.children;
          })}
        </div>
      </div>
    );
  }
}

export default Tabs;
