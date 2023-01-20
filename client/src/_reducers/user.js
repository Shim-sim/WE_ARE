import {
  LOGIN_USER,
  REGISTER_USER,
  AUTH_USER,
  LOGOUT_USER,
} from '../_actions/types';

const initialState = {
  isLoggedIn: false,
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loginSuccess: action.payload };
      break;

    case REGISTER_USER:
      return { ...state, success: action.payload };
      break;

    case LOGOUT_USER:
      return { ...state, logoutSuccess: action.payload };
      break;

    case AUTH_USER:
      return {
        ...state,
        isLoggedIn: action.payload.isAuth,
        userData: action.payload,
      };

    default:
      return state;
  }
}
