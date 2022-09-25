

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { auth } from '../_actions/user_action'
import { useNavigate } from "react-router-dom"

//eslint-disable-next-line import/no-anonymous-default-export
export default function(SpecificComponent, option) {

	function AuthCheck(props) {
		const dispatch = useDispatch();
    const navigate = useNavigate();
		
		useEffect(()=> {
			dispatch(auth()).then(response => {
				if(!response.payload.isAuth) {
					if(option) {
						navigate('/')
					}
				} else {
					if(option === false) {
						navigate('/board')
					}
				}
			})
			
		}, [dispatch, navigate]) 
		
		
		return <SpecificComponent/>
		
	}
	
	return AuthCheck

}

