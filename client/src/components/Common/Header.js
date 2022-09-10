import { useState, useEffect } from 'react'
import { logoutUser } from '../../_actions/user_action'
import { HeaderWrap } from '../Style/HeaderStyle'
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { BsFillPersonFill, BsPencilSquare } from "react-icons/bs";

import logo from '../../assets/logo.png'





function Header() {
	const user = useSelector(state => state.user.isLoggedIn);
	const navigate = useNavigate()
	const dispatch = useDispatch()
	
	const [modal, setModal] = useState(false)

	const LogoutHandler = () => {
		dispatch(logoutUser())
		.then(response => {
			if(response.payload.logoutSuccess) {
				localStorage.removeItem('userId')
				navigate('/')
			}
		})
	}
	
	return (
		<HeaderWrap>
			<div>
				<Link to="/">
					<img src={logo} alt="logo" />
				</Link>
				  <span>WEARE</span>
					
				  {user == false ? (
						<Link to="/">
							<span className="header__nav">로그인</span>
						</Link>
					) : (
						<>
							<span className="header__nav" >
								<Link to="/upload">
									<BsPencilSquare className="icon"/>
								</Link>

								<BsFillPersonFill className="icon" onClick={()=> setModal(!modal)}/>
						 	</span>
							{modal && (
				 				<ul className="subMenu" onClick={()=> setModal(!modal)}>
									<Link to="/mypage">
										<li>마이페이지</li>
									</Link>
									<Link to="/">
										<li onClick={LogoutHandler} className="logout">로그아웃</li>
									</Link>
								</ul>
							)}
						</>
					)}
			</div>	
		</HeaderWrap>
	)
}

export default Header