import { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../_actions/user_action";
import axios from 'axios'
import StyledContainer from '../components/Style/styledContainer'
import styled from "styled-components";
import logo from '../assets/logo.png'
import RegisterInput from '../components/Register/RegisterInput'
import RegisterButton from '../components/Register/RegisterButton'
import RegisterSelect from '../components/Register/RegisterSelect'
import LimitOnLength from '../components/Register/LimitOnLength'
import CheckIdButton from '../components/Register/CheckIdButton'


const Header = styled.div`
	display: inline;
	justify-content: center;
	text-align: center;
  margin: 50px 0 12px 0;
`

const Logo = styled.img`
    display: flex;
		justify-content: center;
    width: 60px;
    height: 95px;
		margin: 10px auto 0 auto;
`;

const HeaderTitle = styled.h2`
  color: black;
  font-size: 24px;
  font-weight: bold;
  letter-spacing: -0.045rem;
`;

const HeaderText = styled.p`
  color: #c62917;
	font-size: 13px;
	margin-top: 8px;
`

const entranceYearArray = [];
for (let i = 2000; i < 2023; i++) {
  entranceYearArray.push(i);
}


function Register() {
	
	const dispatch = useDispatch()
	const navigate = useNavigate()
	
	const [inputs, setInput] = useState({
		userId: "",
		userPw: "",
		userEmail: "",
		userNickname: "",
		usableId: false
	})
	
  const { userId, userPw, userEmail, userNickname, usableId } = inputs
	const [entranceYear, setEntanceYear] = useState("2022")
	const [nameInfo, setNameInfo] = useState('')
  const [overIdLength, setOverIdLength] = useState(false)
	const [overPwLength, setOverPwLength] = useState(false)
	
	const onChange = (e) => {
		const { value, name } = e.target
		setInput({
			...inputs,
			[name]: value,
			usableId: usableId
		})
	}
	
	const onEntranceYear = (e) => {
    setEntanceYear(e.target.value);
  };
	
	const checkId = (e) => {
		e.preventDefault()
		if(!userId) {
			return alert('아이디를 입력해주세요')
		}
		
		if(overIdLength) {
			return
		}
		axios.post('https://weare-server.run.goorm.io/register/checkId', {id: userId})
			.then((response) => {
				if(response.status === 200) {
					setInput({
            ...inputs,
            usableId: true,
          })
					setNameInfo("※ 사용가능한 아이디입니다.")
				} else {
					setNameInfo("※ 사용 불가능한 아디이입니다.")
				}
		})
	}
	
	const onRegister = (e) => {
		e.preventDefault()
		
		if (overIdLength || overPwLength) {
			return;
		} else if (!userId || !userPw || !userEmail || !userNickname) {
			alert('필수 항목을 작성해주세요')
			return;
		} else if(usableId === false) {
			alert('아이디 중복확인을 해주세요')
			return;
		}
		
		let body = {
			id: userId,
			password: userPw,
			email: userEmail,
			nickname: userNickname,
			entranceYear: entranceYear
		}
		dispatch(registerUser(body))
			.then((response) => {
				if(response.payload.success) {
					alert('회원가입을 완료했습니다.')
					navigate('/')
				} else {
					alert('회원가입에 실패했습니다.')
				}
		})
	}
	
	useEffect(() => {
		if(inputs.userId.length > 12) {
			setOverIdLength(true)
		} else {
			setOverIdLength(false)
		}
		
		if(inputs.userPw.length > 12) {
			setOverPwLength(true)
		} else {
			setOverPwLength(false)
		}
		
	}, [inputs.userId, inputs.userPw])
	
	
	return (
		<StyledContainer minHeight="95vh">
			<div>
			<Header>
				<Link to="/">
					<Logo src={logo} alt="logo" />	
				</Link>	
				<HeaderTitle>WE ARE에 오신것을 환영합니다.</HeaderTitle>
				<HeaderText>WE ARE은 1포병여단 익명 게시판 플래폼입니다.</HeaderText>
			</Header>
			<form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={onRegister}>
				<RegisterInput
					placeholder="아이디" 
					labelName="아이디"
					name="userId"
					type="text"
					children={nameInfo} 
					onChange={onChange}
					value={userId}
				/>
				{overIdLength && (
					<LimitOnLength>아이디를 12자 이내로 입력해주세요</LimitOnLength>
				)}
				<CheckIdButton onClick={checkId}>중복체크</CheckIdButton>
				<RegisterInput
					placeholder="비밀번호" 
					labelName="비밀번호"
					name="userPw"
					type="password"
					onChange={onChange}
					value={userPw}
				/>
				{overPwLength && (
					<LimitOnLength>비밀번호를 12자 이내로 입력해주세요</LimitOnLength>
				)}
				<RegisterInput
					placeholder="이메일" 
					labelName="이메일"
					name="userEmail"
					type="email"
					onChange={onChange}
					value={userEmail}
				/>
				<RegisterInput
					placeholder="닉네임" 
					labelName="닉네임"
					name="userNickname"
					type="text"
					onChange={onChange}
					value={userNickname}
				/>
				<RegisterSelect
					labelName="입대년도"
					onEntranceYear={onEntranceYear}
					value={entranceYear}
					dataArr={entranceYearArray}
				/>
			
				
				<RegisterButton type='submit'>회원가입</RegisterButton>
			</form>
			
				
		  </div>
		</StyledContainer>	
	)
}

export default Register