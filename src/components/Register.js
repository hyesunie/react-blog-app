import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Auth from "./templates/AuthTemplate";
import GlobalStyle from "./templates/GlobalTemplate";

function Register() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState({ 1: "", 2: "" });
  const [error, setError] = useState("");
  const getIdList = useCallback(async () => {
    const response = await fetch(
      "https://my-json-server.typicode.com/hyesunie/demo/users"
    );
    if (response.ok) {
      return await response.json();
    }
  }, []);

  const onChnage = useCallback((e) => {
    const value = e.target.value;

    if (e.target.id === "id") {
      //TODO: 이미 존재하는 id인지 체크

      setId(value);
    } else if (e.target.id === "password1") {
      setPassword((prev) => ({ ...prev, 1: value }));
    } else if (e.target.id === "password2") {
      setPassword((prev) => ({ ...prev, 2: value }));
    } else {
      return;
    }
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (error !== "") return;
      const id = e.target[0];
      const password = e.target[1];

      //TODO: 유저 정보 생성 요청
    },
    [error]
  );

  useEffect(() => {
    (async function () {
      if (id === "") {
        setError("아이디를 입력해주세요.");
        return;
      }

      const userList = await getIdList();

      const isExistId = userList.some((user) => user.id === id);

      if (isExistId) {
        setError("이미 존재하는 id 입니다.");
        return;
      }
      if (password[1] === "") {
        setError("비밀번호를 입력해주세요.");
        return;
      }
      if (password[2] === "") {
        setError("비밀번호 확인을 입력해주세요.");
        return;
      }

      if (password[1] !== password[2]) {
        setError("비밀번호가 같지 않습니다.");
        return;
      }

      setError("");
    })();
  }, [id, password]);

  return (
    <>
      <GlobalStyle />
      <Auth.Section>
        <p style={{ fontWeight: "600", fontSize: "2em", paddingTop: "2em" }}>
          Register
        </p>
        <Auth.Form onSubmit={onSubmit}>
          <Auth.Input
            onChange={onChnage}
            id="id"
            type="text"
            placeholder="ID"
          />
          <Auth.Input
            onChange={onChnage}
            id="password1"
            type="password"
            placeholder="PASSWORD"
          />
          <Auth.Input
            onChange={onChnage}
            id="password2"
            type="password"
            placeholder="CHECK PASSWORD"
          />
          <Auth.Button type="submit">회원가입</Auth.Button>
        </Auth.Form>{" "}
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
        <Link to="/login">로그인</Link>
      </Auth.Section>
    </>
  );
}

export default Register;
