import {
  LOGIN_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
  LOGOUT_USER,
  RESET_ERRORS,
} from './actionType';
//import apiService from '../../../services/authService';

function loginUserRequest() {
  return {
    type: LOGIN_REQUEST,
  };
}

function loginUserSuccess(data) {
  return {
    type: LOGIN_USER_SUCCESS,
    data,
  };
}

function loginUserFailed(data) {
  return {
    type: LOGIN_USER_FAILED,
    data,
  };
}

export function loginUser(data) {
  return async (dispatch, getState) => {
    try {
      let success = false;
      dispatch(loginUserRequest());
      // const res = await apiService.login(data);
      const { email, password } = data;
      if (email === 'itcr@grr.la' && password === '123') {
        success = true;
      }
      if (success) {
        dispatch(loginUserSuccess({ name: 'lakshan' }));
      } else {
        dispatch(loginUserFailed('Invalid email or password'));
      }

      // const res = await apiService.login(data);
      // if (res.success) {
      //   dispatch(loginUserSuccess(res.data));
      // } else {
      //   dispatch(loginUserFailed(res.message));
      // }
    } catch (error) {
      dispatch(loginUserFailed('Error occured while trying to login'));
    }
  };
}

function logoutUserRequest() {
  return {
    type: LOGOUT_USER,
  };
}

export function logoutUser() {
  return dispatch => {
    dispatch(logoutUserRequest());
  };
}

function resetErrorRequest() {
  return {
    type: RESET_ERRORS,
  };
}

export function resetErrors() {
  return dispatch => {
    dispatch(resetErrorRequest());
  };
}
