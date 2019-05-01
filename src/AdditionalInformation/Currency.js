import React from "react";

export const Budget = props => {
  const toCurrency = () => {
    if (props.budget !== 0) {
      return `$${props.budget.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}`;
    } else {
      return "—";
    }
  };
  return <p style={{ textAlign: "center" }}>{toCurrency()}</p>;
};

export const Revenue = props => {
  const toCurrency = () => {
    if (props.revenue !== 0) {
      return `$${props.revenue.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}`;
    } else {
      return "—";
    }
  };
  return <p style={{ textAlign: "center" }}>{toCurrency()}</p>;
};
