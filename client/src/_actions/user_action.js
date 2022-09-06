import axios from 'axios'
import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER,
    LOGOUT_USER,
} from './types';
import { USER_SERVER } from '../components/Config.js'



export function loginUser(data) {
	const request =
		axios.post(`${USER_SERVER}/login`, data)
		.then(response => response.data)
	
	return {
		type: LOGIN_USER,
		payload: request
	}
	
}

