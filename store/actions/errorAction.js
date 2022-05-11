import { setError } from "../types";

export const setFormError = (data) => (dispatch) => {
  dispatch({
    type: setError,
    payload: data,
  });

  return data.name != null || data.email != null || data.phone != null;
};
