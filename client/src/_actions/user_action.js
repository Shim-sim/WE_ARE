import axios from 'axios'
import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER,
    LOGOUT_USER,
} from './types';
import { USER_SERVER, LOCAL_SERVER } from '../components/Config.js'

axios.defaults.withCredentials = true;

export function loginUser(data) {
	const request =
		axios.post(`${LOCAL_SERVER}/login`, data)
		.then(response => response.data)
	
	return {
		type: LOGIN_USER,
		payload: request
	}
	
}

export function registerUser(data) {
	const request =
		axios.post(`${LOCAL_SERVER}/register`, data)
		.then(response => response.data)
	
	return {
		type: REGISTER_USER,
		payload: request
	}
	
}

export function logoutUser() {
	const request =
		axios.get(`${LOCAL_SERVER}/logout`)
		.then(response => response.data)
	
	return {
		type: LOGOUT_USER,
		payload: request
	}
	
}

export function auth() {
	const request =
		axios.get(`${LOCAL_SERVER}/auth`)
		.then(response => response.data)
	
	return {
		type: AUTH_USER,
		payload: request
	}
	
}


