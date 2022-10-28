const USER_LOGIN = "user/login";
const USER_LOGOUT = "user/logout";

const login = (payload) => ({ type: USER_LOGIN, payload });
const logout = (payload) => ({ type: USER_LOGOUT, payload });

const user = (state = { id: "", isLoggin: false }, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return { ...state, id: action.payload.id, isLoggin: true };
    case USER_LOGOUT:
      return { ...state, id: "", isLoggin: false };
    default:
      return state;
  }
};

export { login, logout };
export default user;
