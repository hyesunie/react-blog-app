import styled from "styled-components";
const StyledLoginForm = styled.form`
  width: 100%;
  height: 60%;
  background-color: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledInput = styled.input`
  margin: 1em 0 1em 0;
  padding: 1em;
  width: 80%;
  border-bottom: solid 0.2em #e0e0e0;
  border-radius: 10px;
  font-size: 1.1em;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const StyledButton = styled.button`
  width: 70%;
  margin: 1em 0 1em 0;
  font-size: 1.1em;
  padding: 1em 0 1em 0;
  font-weight: 600;
  border-radius: 30px;
  border: none;
  background-color: #fffd7c;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

function LoginForm() {
  return (
    <StyledLoginForm>
      <StyledInput type="text" placeholder="ID" />
      <StyledInput type="password" placeholder="PASSWORD" />
      <StyledButton type="submit">로그인</StyledButton>
    </StyledLoginForm>
  );
}

export default LoginForm;
