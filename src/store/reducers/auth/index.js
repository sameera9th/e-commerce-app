import {
  LOGIN_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
  LOGOUT_USER,
  RESET_ERRORS,
} from './actionType';

const initialState = {
  user: {},
  loading: false,
  loggedInStatus: false,
  error: false,
  errorMsg: '',
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case RESET_ERRORS:
      return {
        ...state,
        loading: false,
        loggedInStatus: false,
        error: false,
        errorMsg: '',
      };
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        loggedInStatus: false,
        error: false,
        errorMsg: '',
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.data,
        error: false,
        loggedInStatus: true,
        errorMsg: '',
      };
    case LOGIN_USER_FAILED:
      return {
        ...state,
        loading: false,
        user: {},
        error: true,
        loggedInStatus: false,
        errorMsg: action.data,
      };
    case LOGOUT_USER:
      return {
        ...state,
        loading: true,
        loggedInStatus: false,
        error: false,
        errorMsg: '',
      };
    default:
      return state;
  }
};

export default auth;
