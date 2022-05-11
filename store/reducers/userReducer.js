import { addUser, removeUser } from "../types";

const initialState = {
  name: "",
  email: "",
  phone: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case addUser:
      return action.payload;
    case removeUser:
      return initialState;
    default:
      return state;
  }
};

export default userReducer;
