// actions.js
import axios from 'axios';
import {API_END_POINTS} from "../../../services/index"

// registerUser
export const registerUser = (userData) => async (dispatch) => {
  try {
    const response = await axios.post(API_END_POINTS.USER_REGISTRATION, userData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = response.data;
    dispatch({
      type: "REGISTER_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "REGISTER_FAIL",
      payload: error.response.data,
    });
  }
};

// loginUser
export const loginUser = (loginData) => async (dispatch) => {
  try {
    const response = await axios.post(API_END_POINTS.USER_LOGIN, loginData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = response.data;
    dispatch({
      type: "LOGIN_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "LOGIN_FAIL",
      payload: error.response ? error.response.data.message : "Error logging in",
    });
  }
};



// forgotPassword
export const forgotPassword = (email) => async (dispatch) => {
  try {
    dispatch({ type: "FORGOT_PASSWORD_REQUEST" });
    const response = await axios.post(API_END_POINTS.USER_FORGOT_PASSWORD, { email });

    const data = response.data;
    dispatch({
      type: "FORGOT_PASSWORD_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "FORGOT_PASSWORD_FAILURE",
      payload: error.response ? error.response.data.message : "Error Forgot password user",
    });
  }
};

// resetPassword
export const resetPassword = (id, token, password) => async (dispatch) => {
  try {
    dispatch({ type: "RESET_PASSWORD_REQUEST" });
    const response = await axios.post(`${API_END_POINTS.USER_RESET_PASSWORD}/${id}/${token}`, { password });
    const data = response.data;
    dispatch({
      type: "RESET_PASSWORD_SUCCESS",
      payload: data,
    });

  } catch (error) {
    dispatch({
      type: "RESET_PASSWORD_FAILURE",
      payload: error.response ? error.response.data.message : "Error Google Login",
    });

  }
}


// logoutUser
export const logoutUser = () => (dispatch) => {
  dispatch({
    type: "LOGOUT",
  });
};
