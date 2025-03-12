import React, { useState } from "react";
import { ExpensesList } from "./ExpensesList";
import { Card } from "../UI/Card";
import { ExpenseFilter } from "../expense-filter/ExpenseFilter";
import { Charts } from "../charts/Charts";

export const Expenses = ({ array }) => {
  const [selectValue, setSelectValue] = useState("2025");
  const filteredExpenses = array.filter(
    (item) => item.date.getFullYear().toString() === selectValue
  );

  return (
    <Card>
      <ExpenseFilter
        value={selectValue}
        onChange={(event) => setSelectValue(event.target.value)}
      />
      <Charts expenses={array} />
      <ExpensesList products={filteredExpenses} />
    </Card>
  );
};
