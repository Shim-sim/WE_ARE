import { useState  } from 'react'
import { useDispatch } from "react-redux";
import { loginUser } from "../_actions/user_action";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from '../assets/logo.png'
import StyledContainer from '../components/Style/styledContainer'
import LoginInput from '../components/Login/LoginInput'


const FlexBox = styled.div`
	display: flex;
	justify-content: center;
	 margin: 50px 0 12px 0;
`

const Logo = styled.img`
    display: inline-block;
    width: 48px;
    height: 52px;
		margin-top: 10px;
`;

const LogoTitle = styled.h2`
  color: black;
  font-size: 16px;
  font-weight: normal;
  padding: 28px 8px 0px 0px;
  letter-spacing: -0.045rem;
`;

const StyledDiv = styled.div`
  color: #c62917;
  text-align: center;
  margin-top: 20px;
  font-weight: 500;
  font-size: 16px;
`;

const StyledSpan = styled.span`
  color: #909090;
  font-weight: 300;
  margin-right: 10px;
  letter-spacing: -0.05rem;
`;

const Button = styled.button`
	/* 공통 스타일 */
  width: 95%;
  color: white;
  cursor: pointer;
  text-align: center;

  /* 크기 */
  height: 40px;
  font-size: 16px;
  font-weight: 200;

	/* 색상 */
  background: #db1e08;


  margin-top: 6px;
	margin-left: 8px;
`


function Login() {
	
	const dispatch = useDispatch()
	const navigate = useNavigate()
	
	const [inputs, setInput] = useState({
		userId: "",
		userPw: ""
	})
	
	const { userId, userPw } = inputs
	
	const onChange = (e) => {
		const { value, name } = e.target
		setInput({
			...inputs,
			[name]: value
		})
	}
	
	const onSubmit = (e) => {
		e.preventDefault();
		
		let body = {
			id: userId,
			password: userPw
		}
		
		if(!userId || !userPw) {
			alert('필수 항목을 작성해주세요!')
		} else {
			dispatch(loginUser(body))
				.then((response) => {
					if(response.payload.loginSuccess) {
						localStorage.setItem('userId', response.payload.userId)
						navigate('/register')
					} else {
						console.log(response.payload)
					}
			})
		}
		
		
		
	}
	
	return (
		<StyledContainer>
			<div>
			 <FlexBox>
					<Logo src={logo} alt="logo" />
					<LogoTitle>지금 
						<strong> WE ARE</strong>
						을 시작하세요!
					</LogoTitle>
				</FlexBox>
				<form onSubmit={onSubmit}>
					<LoginInput
						placeholder="아이디"
						name="userId"
						value={userId}
						onChange={onChange}
					/>
					<LoginInput 
						placeholder="비밀번호"
						name="userPw"
						value={userPw}
						onChange={onChange}
					/>
					<Button type="submit">로그인</Button>
				</form>	
				 <StyledDiv>
         		<Link to="/register">
            	<StyledSpan>We Are에 처음이신가요?</StyledSpan>회원가입
         		</Link>
        </StyledDiv>
			</div>
		</StyledContainer>	
		
	)
}

export default Login