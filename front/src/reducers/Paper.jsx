const initialState = {
  paperList: [],
  tokenExpired: 0,
  error: false,
}

export default function paperReducer(state = initialState, action) {
  switch (action.type) {

    case 'START_REQUEST':
      return {
        paperList: [],
        error: false
      };

    case 'RECEIVE_DATA':
      return action.payload.error
        ? { ...state, error: true }
        : {
            ...state,
            paperList: action.payload.response,
          };

    case 'RESET_DATA_PAPERS':
      return {
        paperList: [],
        tokenExpired: 0,
        error: false
      };

    case 'RECEIVE_TOKEN_EXPIRED':
      return {
        paperList: [],
        tokenExpired: 1
      };

    default:
      return state;
  }
};