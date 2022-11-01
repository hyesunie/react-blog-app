import { Link } from "react-router-dom";
import Header from "../components/Header";

function HomePage() {
  return (
    <>
      <Header />
      <Link to="/write">새로운 포스팅</Link>;
    </>
  );
}

export default HomePage;
