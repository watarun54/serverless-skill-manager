import { setStorage, getStorage, removeStorage } from "../infra/localStorage";

const initialState = {
  token: getStorage("token"),
  status: 0 //0:処理前 1:ログイン成功 -1:ログイン失敗                                                                                                                                                            
};

export default function userReducer(state = initialState, action) {
  const _state = Object.assign({}, state);
  switch (action.type) {
    case "LOGIN_REQUEST":
      _state.status = 0;
      return _state;

    case "LOGIN_RECEIVE_SUCCESS":
      _state.status = 1;
      _state.token = action.data.token;
      setStorage("token", _state.token);
      return _state;

    case "LOGIN_RECEIVE_FAILED":
      _state.status = -1;
      return _state;

    case "LOGOUT":
      _state.token = null;
      removeStorage("token");
      return _state;

    default:
      return state;
  }
}
