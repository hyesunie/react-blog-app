import { Link } from "react-router-dom";
import styled from "styled-components";
import LoginForm from "../components/LoginForm";

const StyledLoginSection = styled.section`
  width: 700px;
  height: 700px;
  background-color: ghostwhite;
  text-align: center;
  border-radius: 15px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;
function LoginPage() {
  return (
    <StyledLoginSection>
      <p style={{ fontWeight: "600", fontSize: "2em", paddingTop: "2em" }}>
        Login
      </p>
      <LoginForm />
      {/* TODO: 회원가입 페이지로 변경 */}
      <Link to="/">회원가입</Link>
    </StyledLoginSection>
  );
}

export default LoginPage;
