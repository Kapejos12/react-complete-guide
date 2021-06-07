import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");

  const getFilterData = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredData = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onGetFilter={getFilterData} />
      <ExpensesChart expenses={filteredData} />
      <ExpensesList items={filteredData} />
    </Card>
  );
};

export default Expenses;
