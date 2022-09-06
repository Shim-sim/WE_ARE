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

		default: 
			return state
	}
}