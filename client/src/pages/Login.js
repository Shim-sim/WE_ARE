import { useEffect } from 'react'
import axios from 'axios'

function Login() {
	
	useEffect(()=> {
		axios.get('https://weare-server.run.goorm.io/hello')
		.then(response => {
			console.log(response)
		})
		
	}, [])
	
	return (
		<div>
			로그인 페이지
		</div>
	)
}

export default Login