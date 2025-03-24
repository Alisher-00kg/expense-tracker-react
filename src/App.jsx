import { useState } from "react";
import { Expenses } from "./components/expenses/Expenses";
import { NewExpense } from "./components/new-expense/NewExpense";
import { Login } from "./components/auth/Login";

const DUMMY_EXPENSES = [
  {
    id: "a1",
    title: "Hello from 2025",
    amount: 200,
    date: new Date(2025, 2, 21),
  },
  {
    id: "a2",
    title: "Hello from 2024",
    amount: 250,
    date: new Date(2024, 5, 11),
  },
  {
    id: "a3",
    title: "Hello from 2023",
    amount: 200,
    date: new Date(2023, 8, 18),
  },
  {
    id: "a4",
    title: "Hello from 2022",
    amount: 200,
    date: new Date(2022, 7, 14),
  },
];
function App() {
  const [expenses, setExpenses] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const getNewExpense = (newObject) => {
    setExpenses((prevExpenses) => {
      const updatedExpenses = [...prevExpenses, newObject];
      return updatedExpenses;
    });
  };
  const hanldeLoginUser = (aboutUser) => {
    console.log(aboutUser);
    setIsLoggedIn(!isLoggedIn);
  };
  return (
    <div className="root-div">
      {isLoggedIn ? (
        <>
          <NewExpense onNewExpense={getNewExpense} />
          <Expenses array={expenses} />
        </>
      ) : (
        <Login onLoginUser={hanldeLoginUser} />
      )}
    </div>
  );
}

export default App;
