import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER,
    LOGOUT_USER,
} from '../_actions/types';



export default function user(state = {}, action) {
	switch(action.type) {
		case LOGIN_USER:
			return {...state, loginSuccess: action.payload}
			break;
			
		case REGISTER_USER:
			return {...state, success: action.payload}
			break;
		
		case LOGOUT_USER:
			return {...state, logoutSuccess: action.payload}
			break;
			
		case AUTH_USER:
			return {...state, userData: action.payload}

		default: 
			return state
	}
}