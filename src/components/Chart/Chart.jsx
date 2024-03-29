import css from "./Chart.module.css";
import React from "react";
import { BarChart, Bar, XAxis, Tooltip } from "recharts";

const renderBarLabel = ({ payload, x, y, width, height, value }) => {
  return (
    <text
      x={x + width / 2}
      y={y}
      fill="#666"
      textAnchor="middle"
      dy={-6}
      fontSize={14}
    >
      {`${value} UAH`}
    </text>
  );
};

export const Graph = ({ incomeByCategory, iconName }) => {
  const filterTransactionsByCategory = (iconName) => {
    const filteredTransactions = incomeByCategory
      .flat()
      .filter((obj) => obj.category === iconName);
    return filteredTransactions.map((obj) => ({
      name: obj.description,
      pv: obj.amount,
    }));
  };
  const data = filterTransactionsByCategory(iconName);

  return (
    <div className={css.graphContainer}>
      <BarChart
        className={css.graph}
        width={500}
        height={300}
        data={data}
        margin={{
          top: 50,
          bottom: 5,
        }}
      >
        <Tooltip />
        <XAxis className={css.barsNames} dataKey="name" />
        <Bar
          className={css.bar}
          dataKey="pv"
          fill="#ffdac0"
          label={renderBarLabel}
        />
      </BarChart>
    </div>
  );
};
