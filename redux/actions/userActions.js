import axios from 'axios';
import { SUCCESS } from '../../constants/globalConstants';
import {
  LOGGED_USER_DATA_ERROR,
  LOGGED_USER_DATA_LOADING,
  LOGGED_USER_DATA_SUCCESS,
  GET_USER_DETAILS_ERROR,
  GET_USER_DETAILS_LOADING,
  GET_USER_DETAILS_SUCCESS,
} from '../constants/userConstants';

export const setLoginStatus = (userData) => (dispatch) => {
  try {
    dispatch({ type: LOGGED_USER_DATA_LOADING });

    dispatch({ type: LOGGED_USER_DATA_SUCCESS, payload: userData });
  } catch (error) {
    dispatch({
      type: LOGGED_USER_DATA_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getUserDetails = () => async (dispatch) => {
  try {
    dispatch({ type: GET_USER_DETAILS_LOADING });

    const { data } = await axios.get('/api/my-data');

    dispatch({
      type: GET_USER_DETAILS_SUCCESS,
      payload: { success: data.success, ...data.user[0] },
    });
  } catch (error) {
    dispatch({
      type: GET_USER_DETAILS_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
