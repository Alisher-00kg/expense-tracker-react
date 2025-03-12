import React from "react";
import "./Charts.css";
import { ChartBar } from "./ChartBar";
export const Charts = ({ expenses }) => {
  const maximumPrice = 5000;
  const month = [
    {
      label: "январь",
      currentPrice: 0,
    },
    {
      label: "февраль",
      currentPrice: 0,
    },
    {
      label: "март",
      currentPrice: 0,
    },
    {
      label: "апрель",
      currentPrice: 0,
    },
    {
      label: "май",
      currentPrice: 0,
    },
    {
      label: "июнь",
      currentPrice: 0,
    },
    {
      label: "июль",
      currentPrice: 0,
    },
    {
      label: "август",
      currentPrice: 0,
    },
    {
      label: "сентябрь",
      currentPrice: 0,
    },
    {
      label: "октябрь",
      currentPrice: 0,
    },
    {
      label: "ноябрь",
      currentPrice: 0,
    },
    {
      label: "декабрь",
      currentPrice: 0,
    },
  ];
  expenses.forEach((item) => {
    const filteredPrice = item.date.getMonth();
    month[filteredPrice].currentPrice += item.amount;
  });
  return (
    <div className="chart">
      {month.map((item) => (
        <ChartBar key={item.label} {...item} maximumPrice={maximumPrice} />
      ))}
    </div>
  );
};
