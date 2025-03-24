import { useState } from "react";
import { Expenses } from "./components/expenses/Expenses";
import { NewExpense } from "./components/new-expense/NewExpense";
import { Login } from "./components/auth/Login";
import { Header } from "./components/layout/Header";
import styled from "styled-components";
import { UsersData } from "./pages/UsersData";

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
  const [isUserPage, setIsUserPage] = useState(false);

  const getNewExpense = (newObject) => {
    setExpenses((prevExpenses) => {
      const updatedExpenses = [...prevExpenses, newObject];
      return updatedExpenses;
    });
  };
  const hanldeLoginUser = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  const handleToggleUserPage = () => {
    setIsUserPage(!isUserPage);
  };
  return (
    <StyledInnerLayout>
      {isLoggedIn ? (
        <>
          <Header onShow={handleToggleUserPage} active={isUserPage} />
          <WrapperDiv>
            {isUserPage ? (
              <UsersData />
            ) : (
              <>
                <NewExpense onNewExpense={getNewExpense} />
                <Expenses array={expenses} />
              </>
            )}
          </WrapperDiv>
        </>
      ) : (
        <Login onLoginUser={hanldeLoginUser} />
      )}
    </StyledInnerLayout>
  );
}

export default App;

const StyledInnerLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const WrapperDiv = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
  padding-top: 60px;
`;
