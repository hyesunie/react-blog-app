import { useSelector } from "react-redux";

function PostItem({ info }) {
  const { id, title, value, tags } = info;

  return (
    <li>
      <h2>{title}</h2>
      <p>{value}</p>
      <div>{tags}</div>
    </li>
  );
}

function PostList() {
  const postList = useSelector((state) => state.posts);

  return (
    <ul>
      {postList.map((post) => (
        <PostItem key={post.id} info={post} />
      ))}
    </ul>
  );
}

export default PostList;
