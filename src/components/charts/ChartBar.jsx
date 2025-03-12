import React from "react";
import "./ChartBar.css";
export const ChartBar = ({ label, currentPrice, maximumPrice }) => {
  const fillHeight = (100 * currentPrice) / maximumPrice;
  return (
    <div className="chart-container">
      <div className="chart-inner">
        <div style={{ height: `${fillHeight}%` }} className="chart-bar"></div>
      </div>
      <p className="chart-label">{label}</p>
    </div>
  );
};
