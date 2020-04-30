import { setStorage, getStorage, removeStorage } from "../infra/localStorage";

var initialState = {
  session: getStorage("token"),
  status: 0 //0:処理前 1:ログイン成功 -1:ログイン失敗                                                                                                                                                            
};

export default function login(state = initialState, action) {

  var _state = Object.assign({}, state);
  switch (action.type) {
    case "LOGIN_REQUEST":
      _state.status = 0;
      return _state;

    case "LOGIN_RECEIVE_SUCCESS":
      _state.status = 1;
      _state.session = action.data.token;
      setStorage("token", _state.session);
      return _state;

    case "LOGIN_RECEIVE_FAILED":
      _state.status = -1;
      return _state;

    case "LOGOUT":
      _state.session = null;
      removeStorage("token");
      return _state;

    default:
      return state;
  }
}
