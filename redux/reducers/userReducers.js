import {
  LOGGED_USER_DATA_ERROR,
  LOGGED_USER_DATA_LOADING,
  LOGGED_USER_DATA_SUCCESS,
  GET_USER_DETAILS_ERROR,
  GET_USER_DETAILS_LOADING,
  GET_USER_DETAILS_SUCCESS,
} from '../constants/userConstants';

export const setUserDetailsReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case LOGGED_USER_DATA_LOADING:
      return { loading: true };
    case LOGGED_USER_DATA_SUCCESS:
      return { loading: false, user: action.payload };
    case LOGGED_USER_DATA_ERROR:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getUserDetailsReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case GET_USER_DETAILS_LOADING:
      return { loading: true };
    case GET_USER_DETAILS_SUCCESS:
      return { loading: false, user: action.payload };
    case GET_USER_DETAILS_ERROR:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
