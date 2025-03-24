import styled from "styled-components";
import Button from "../UI/Button";

export const Header = ({ onShow, active }) => {
  return (
    <StyledHeader>
      <StyledButton onClick={onShow}>
        {active ? "Back" : "Get Users"}
      </StyledButton>
    </StyledHeader>
  );
};
const StyledHeader = styled.header`
  width: 100%;
  height: 70px;
  background-color: #8d71eb;
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 0px 20px;
`;
const StyledButton = styled(Button)`
  padding: 8px 18px;
  width: fit-content;
  height: 40px;
`;
