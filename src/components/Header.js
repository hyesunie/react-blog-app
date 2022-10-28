import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import HeaderTemplate from "./templates/HeaderTemplate";

function Header() {
  const { id, isLogin } = useSelector((state) => state.user);

  return (
    <HeaderTemplate.Header>
      <HeaderTemplate.Title>Posting App</HeaderTemplate.Title>
      <HeaderTemplate.UserContainer>
        <HeaderTemplate.UserName>
          {isLogin ? id : "로그인을 하세요"}
        </HeaderTemplate.UserName>
        {isLogin ? (
          <HeaderTemplate.IsLogginButton isLogin={isLogin}>
            로그아웃
          </HeaderTemplate.IsLogginButton>
        ) : (
          <Link to="/login">
            <HeaderTemplate.IsLogginButton isLogin={isLogin}>
              로그인
            </HeaderTemplate.IsLogginButton>
          </Link>
        )}
      </HeaderTemplate.UserContainer>
    </HeaderTemplate.Header>
  );
}

export default Header;
