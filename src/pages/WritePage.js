import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Editor from "../components/Editor";
import TagBox from "../components/TagBox";
//TODO: 로더에서 useSelector 가 사용 안됨  이유찾기!!

function WritePage() {
  const { isLogin } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogin) {
      alert("로그인 한 사용자만 이용할 수 있습니다.");
      navigate("/");
    }
  }, [isLogin]);

  return (
    <article
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Editor />
      <TagBox />
    </article>
  );
}

export default WritePage;
