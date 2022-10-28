import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../modules/user";
import Auth from "./templates/AuthTemplate";
import GlobalStyle from "./templates/GlobalTemplate";

function LoginForm() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const getUserList = useCallback(async () => {
    //TODO: 원래는 서버에서 해당 유저 정보에 대해서 확인 후 응답만 받으면 됨!!!
    const response = await fetch(
      "https://my-json-server.typicode.com/hyesunie/demo/users"
    );
    if (response.ok) {
      return await response.json();
    }
  }, []);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      //TODO: 서버가 존재할때는 변경되어야 할 코드
      const userList = await getUserList();
      const user = userList.find((user) => user.id === id);

      if (!user) {
        setError("ID, PASSWORD를 확인하세요.");
        return;
      }

      if (user.password === password) {
        setError("");
        //todo: 로그인 됐다는 상태를 DISPATCH 해야 함
        dispatch(login({ id }));
        return navigate("/");
      }
      setError("ID, PASSWORD를 확인하세요.");
    },
    [id, password]
  );

  const onChange = useCallback(
    (e) => {
      const { id: targetId, value: targetValue } = e.target;
      if (targetId === "id") {
        setId(targetValue);
        return;
      }

      if (targetId === "password") {
        setPassword(targetValue);
        return;
      }
    },
    [id, password]
  );

  return (
    <>
      <GlobalStyle />
      <Auth.Section>
        <p style={{ fontWeight: "600", fontSize: "2em", paddingTop: "2em" }}>
          Login
        </p>
        <Auth.Form onSubmit={onSubmit}>
          <Auth.Input
            id="id"
            type="text"
            placeholder="ID"
            onChange={onChange}
          />
          <Auth.Input
            id="password"
            type="password"
            placeholder="PASSWORD"
            onChange={onChange}
          />
          <Auth.Button type="submit">로그인</Auth.Button>
        </Auth.Form>
        <div
          style={{
            fontWeight: "600",
            fontSize: "1em",
            marginBottom: "0.5em",
            color: "red",
          }}
        >
          {error !== "" ? error : ""}
        </div>
        <Link to="/register">회원가입</Link>
      </Auth.Section>
    </>
  );
}

export default LoginForm;
