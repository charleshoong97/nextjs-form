import { addUser, removeUser } from "../types";

export const login = (data) => (dispatch) => {
  return dispatch({
    type: addUser,
    payload: data,
  });
};

export const logout = () => (dispatch, getState) => {
  const state = getState();

  console.log("Loging Out : " + state.userReducer.name);

  return dispatch({
    type: removeUser,
  });
};
