import React from "react";

const Runtime = props => {
  const minToHour = () => {
    const hours = Math.floor(props.runtime / 60);
    const hoursWithoutMin = hours * 60;
    const minutes = props.runtime - hoursWithoutMin;
    const totalTime = `${hours}h ${minutes}min`;
    return totalTime;
  };

  return <p>{minToHour()}</p>;
};

export default Runtime;
