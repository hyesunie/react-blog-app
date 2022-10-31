import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Editor from "../components/Editor";
//TODO: 로더에서 useSelector 가 사용 안됨  이유찾기!!

function WritePage() {
  const { isLogin } = useSelector((state) => state.user);

  useEffect(() => {}, [isLogin]);

  return (
    <>
      <Editor />
    </>
  );
}

export default WritePage;
