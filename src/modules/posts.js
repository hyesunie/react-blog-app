import { act } from "react-dom/test-utils";

//TODO: 서버가 있다면 없어도 될 상태
const POSTS_INIT = "posts/INIT";
const POSTS_ADD = "posts/ADD";
const POSTS_REMOVE = "posts/REMOVE";

const initPosts = (payload) => ({ type: POSTS_INIT, payload });
const addPosts = (payload) => ({ type: POSTS_ADD, payload });

const post = (state = [], action) => {
  switch (action.type) {
    case POSTS_INIT:
      return [...state, ...action.payload];
    case POSTS_ADD:
      return [...state, action.payload];
    default:
      return state;
  }
};

export { initPosts, addPosts, post as default };
