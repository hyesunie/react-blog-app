import { Link } from "react-router-dom";
import Auth from "./templates/AuthTemplate";

function LoginForm() {
  return (
    <Auth.Section>
      <p style={{ fontWeight: "600", fontSize: "2em", paddingTop: "2em" }}>
        Login
      </p>
      <Auth.Form>
        <Auth.Input type="text" placeholder="ID" />
        <Auth.Input type="password" placeholder="PASSWORD" />
        <Auth.Button type="submit">로그인</Auth.Button>
      </Auth.Form>
      <Link to="/">회원가입</Link>
    </Auth.Section>
  );
}

export default LoginForm;
