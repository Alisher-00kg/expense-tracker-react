import { useState } from "react";
import { FormInput } from "../UI/FormInput";
import Button from "../UI/Button";
import styled from "styled-components";

export const Login = ({ onLoginUser }) => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [isEmailValid, setIsEmailValid] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = {};
    if (emailValue.includes("@gmail.com")) {
      userData.email = emailValue;
    } else {
      return setIsEmailValid("Почта не корректна!");
    }
    if (passwordValue.length > 6 && passwordValue.length < 10) {
      userData.password = passwordValue;
    } else {
      return setIsPasswordValid("Пароль не корректен!");
    }

    onLoginUser({ ...userData });
  };
  return (
    <StyledContainer>
      <WrapperStyled>
        <h3>Login</h3>
        <StyledLoginForm onSubmit={handleSubmit}>
          <StyledFormInput
            labelText="Email"
            id="email"
            inputType="email"
            placeholder="Enter your email ..."
            value={emailValue}
            onChange={(event) => setEmailValue(event.target.value)}
          />
          <StyledErrorMessage>{isEmailValid}</StyledErrorMessage>
          <FormInput
            labelText="Password"
            id="password"
            inputType="password"
            placeholder="Enter your password ..."
            value={passwordValue}
            onChange={(event) => setPasswordValue(event.target.value)}
          />
          <StyledErrorMessage>{isPasswordValid}</StyledErrorMessage>
          <StyledButton type="submit">Login</StyledButton>
        </StyledLoginForm>
      </WrapperStyled>
    </StyledContainer>
  );
};
const StyledContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const WrapperStyled = styled.div`
  width: 500px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 50px;
`;
const StyledLoginForm = styled.form`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 15px;
  input {
    border: 1.5px solid #c9c9c9;
    padding: 10px;
    border-radius: 5px;
  }
`;
const StyledFormInput = styled(FormInput)`
  width: 100%;
`;
const StyledErrorMessage = styled.p`
  color: red;
`;
const StyledButton = styled(Button)`
  width: 340px;
  height: 36px;
`;
