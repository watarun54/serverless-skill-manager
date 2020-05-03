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

export function signup(name, email, password) {
  return dispatch => {
    dispatch(requestUser());
    const data = {name: name, email: email, password: password};
    axios.post(restfulApiConfig.apiURL + "/signup", data)
      .then(response => {
        dispatch(receiveUserSuccess(response.data.data));
      })
      .catch(e => {
        dispatch(receiveUserFailed(e.response.data.message));
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

function requestUser() {
  return { type: "USER_REQUEST" };
}

function receiveUserSuccess(data) {
  return {
    type: "USER_RECEIVE_SUCCESS",
    data: data
  };
}

function receiveUserFailed(errMsg) {
  return {
    type: "USER_RECEIVE_FAILED",
    data: errMsg
  };
}
