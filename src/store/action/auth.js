import axios from "axios";
import * as actionType from "./actionType";

export const authStart = () => {
  return {
    type: actionType.AUTH_START,
  };
};

export const authSucess = (authData) => {
  localStorage.setItem("token", authData.token);
  localStorage.setItem("userData", JSON.stringify(authData.personalDetails));
  return {
    type: actionType.AUTH_SUCCESS,
    token: authData.token,
    userData: authData.personalDetails,
  };
};

export const authFail = (error) => {
  return {
    type: actionType.AUTH_FAIL,
    error: error,
  };
};

export const auth = (email, password) => {
  return (dispatch) => {
    dispatch(authStart());
    //The data I'll send to the API, if it was real auth...
    const userData = {
      email: email,
      password: password,
      returnSecureToken: true,
    };
    axios
      .post(
        "https://private-052d6-testapi4528.apiary-mock.com/authenticate",
        userData
      )
      .then((response) => {
        dispatch(authSucess(response.data[0]));
      })
      .catch((error) => {
        console.log(error);
        dispatch(authFail(error));
      });
  };
};

export const authCheck = () => {
  try {
    return (dispatch) => {
      const token = localStorage.getItem("token");
      console.log(token);
      const userData = JSON.parse(localStorage.getItem("userData"));
      if (token) {
        dispatch(authSucess({ personalDetails: userData, token }));
      }
    };
  } catch (error) {
    console.log(error);
  }
};
