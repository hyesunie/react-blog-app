import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { initPosts } from "../modules/posts";

async function loader() {
  if (!localStorage.getItem("posts")) {
    const response = await fetch(
      "https://my-json-server.typicode.com/hyesunie/demo/posts"
    );
    if (response.ok) {
      const data = await response.json();
      localStorage.setItem("posts", JSON.stringify(data));
    }
  }

  return;
}

function HomePage() {
  const posts = JSON.parse(localStorage.getItem("posts"));
  const dispatch = useDispatch();
  dispatch(initPosts(posts));

  return (
    <>
      <Header />
      <Link to="/write">새로운 포스팅</Link>
    </>
  );
}

export { loader };
export default HomePage;
