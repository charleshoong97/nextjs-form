import { setError } from "../types";

const initialState = {
  name: null,
  email: null,
  phone: null,
};

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case setError:
      return action.payload;
    default:
      return state;
  }
};

export default errorReducer;
