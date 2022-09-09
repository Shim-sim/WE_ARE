import { useDispatch } from 'react-redux'
import { logoutUser } from '../_actions/user_action'
import { useNavigate } from 'react-router-dom'
import Auth from '../hoc/auth'

function Board() {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	
	const onClick = () => {
		dispatch(logoutUser())
		.then(response => {
			if(response.payload.logoutSuccess) {
				navigate('/')
			}
		})
	}
	
	return (
		<div style={{top: '50%', position:'absolute'}}>
			Board 페이지 로그인 된 회원들만 지금 들어옴
			<br />
			<button onClick={onClick}>로그아웃 버튼</button>
		</div>
		
	)
}

export default Auth(Board, true)