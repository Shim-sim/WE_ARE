import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { auth } from '../_actions/user_action'
import { useNavigate } from "react-router-dom"

export default function(SpecificComponent, option) {
	 // null => 아무나 출입이 가능한 페이지
	//  true => 로그인한 유저만 출입이 가능한 페이지
	// false => 로그인한 유저는 출입 불가능한 페이지
	//여기서 props는 빼도될듯 나중테 테스트해보기
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
			
		}, [])
		
		
		return <SpecificComponent/>
		
	}
	
	return AuthCheck

}


// useEffect(()=> {
// 			dispatch(auth()).then((response) => {
// 				if(!response.payload.isAuth) {
// 					if(option) {
// 						navigate('/')
// 					} else {
// 						if(option === false) {
// 							console.log('로그인된 유저임 테스트중')
// 							navigate('/')
// 						}
// 					}
// 				}
// 			})
// 		}, [dispatch])

// auth