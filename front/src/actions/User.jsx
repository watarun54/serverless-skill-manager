import axios from "axios";
import { restfulApiConfig } from "../config.js";

export function login(email, password) {
  return dispatch => {
    dispatch(requestLogin());
    const data = {email: email, password: password};
    axios.post(restfulApiConfig.apiURL + "/login", data)
      .then(response => {
        dispatch(receiveLoginSuccess(response.data));
      })
      .catch(e => {
        dispatch(receiveLoginFailed());
      });
  };
}

export function logout() {
  return { type: "LOGOUT" };
}

// 以下はプライベート関数                                                                                                                                                                                          
function requestLogin() {
  return { type: "LOGIN_REQUEST" };
}

function receiveLoginSuccess(data) {
  return {
    type: "LOGIN_RECEIVE_SUCCESS",
    data: data
  };
}

function receiveLoginFailed() {
  return {
    type: "LOGIN_RECEIVE_FAILED"
  };
}
