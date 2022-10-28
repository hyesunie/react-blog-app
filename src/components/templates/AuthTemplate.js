import styled from "styled-components";

const StyledSection = styled.section`
  width: 700px;
  height: 700px;
  background-color: ghostwhite;
  text-align: center;
  border-radius: 15px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;

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
  cursor: pointer;
`;

const Auth = {
  Section: StyledSection,
  Form: StyledLoginForm,
  Input: StyledInput,
  Button: StyledButton,
};

export default Auth;
