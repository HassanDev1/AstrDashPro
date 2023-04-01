import React, { useState } from "react";


import TempChart from "./tempChart";
import Charts from "./LineChart"
const VisualizationToggle = ({data}) => {
  const [activeVisualization, setActiveVisualization] = useState("bar");

  const handleToggle = (e) => {
    setActiveVisualization(e.target.value);
  };

  return (
    <div>
      <div>
        <input
          type="radio"
          id="bar"
          name="visualization"
          value="bar"
          checked={activeVisualization === "bar"}
          onChange={handleToggle}
        />
        <label htmlFor="bar">Moon Phases</label>
      </div>
      <div>
        <input
          type="radio"
          id="line"
          name="visualization"
          value="line"
          checked={activeVisualization === "line"}
          onChange={handleToggle}
        />
        <label htmlFor="line">Temperature</label>
      </div>
      {activeVisualization === "bar" && <Charts data={data} />}
      {activeVisualization === "line" && <TempChart data = {data} />}
    </div>
  );
};

export default VisualizationToggle;