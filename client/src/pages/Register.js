import { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../_actions/user_action";
import { USER_SERVER } from '../components/Config.js';
import Auth from '../hoc/auth';
import axios from 'axios';
import StyledContainer from '../components/Style/styledContainer';
import styled from "styled-components";
import logo from '../assets/logo.png';
import RegisterInput from '../components/Register/RegisterInput';
import RegisterButton from '../components/Register/RegisterButton';
import RegisterSelect from '../components/Register/RegisterSelect';
import LimitOnLength from '../components/Register/LimitOnLength';
import CheckIdButton from '../components/Register/CheckIdButton';


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
	
	const dispatch = useDispatch();
	const navigate = useNavigate();
	
	const [inputs, setInput] = useState({
		userId: "",
		userPw: "",
		userEmail: "",
		userNickname: "",
		usableId: false
	})
	
  const { userId, userPw, userEmail, userNickname, usableId } = inputs;
	const [entranceYear, setEntanceYear] = useState("2022");
  const [overIdLength, setOverIdLength] = useState(false);
	const [overPwLength, setOverPwLength] = useState(false);
	
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
		e.preventDefault();
		let body = {
			id: userId
		}
		if(!userId) {
			return alert('???????????? ??????????????????.')
		} else if(overIdLength) {
			return
		}
		
		axios.post(`${USER_SERVER}/register/checkId/${userId}`,body)
			.then((response) => {
				if(response.status === 200) {
					setInput({
            ...inputs,
            usableId: true
          });
					alert('?????? ????????? ????????? ?????????')
				}
			})
			.catch(err => {
				console.log(err);
				alert('?????? ???????????? ??????????????????.')
		});
	};
	
	const onRegister = (e) => {
		e.preventDefault()
		
		if (overIdLength || overPwLength) {
			return;
		} else if (!userId || !userPw || !userEmail || !userNickname) {
			alert('?????? ????????? ??????????????????')
			return;
		} else if(usableId === false) {
			alert('????????? ??????????????? ????????????')
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
					alert('??????????????? ??????????????????.')
					navigate('/')
				} else {
					alert('??????????????? ??????????????????.')
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
				<HeaderTitle>WE ARE??? ???????????? ???????????????.</HeaderTitle>
				<HeaderText>WE ARE??? 1???????????? ?????? ????????? ??????????????????.</HeaderText>
			</Header>
			<form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={checkId}>
				<RegisterInput
					placeholder="?????????" 
					labelName="?????????"
					name="userId"
					type="text"
					onChange={onChange}
					value={userId}
				/>
				{overIdLength && 
					<LimitOnLength>???????????? 12??? ????????? ??????????????????</LimitOnLength>
				}
				<CheckIdButton type="submit" onClick={checkId}>????????????</CheckIdButton>
				</form>
				<form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={onRegister}>
				<RegisterInput
					placeholder="????????????" 
					labelName="????????????"
					name="userPw"
					type="password"
					onChange={onChange}
					value={userPw}
				/>
				{overPwLength && (
					<LimitOnLength>??????????????? 12??? ????????? ??????????????????</LimitOnLength>
				)}
				<RegisterInput
					placeholder="?????????" 
					labelName="?????????"
					name="userEmail"
					type="email"
					onChange={onChange}
					value={userEmail}
				/>
				<RegisterInput
					placeholder="?????????" 
					labelName="?????????"
					name="userNickname"
					type="text"
					onChange={onChange}
					value={userNickname}
				/>
				<RegisterSelect
					labelName="????????????"
					onEntranceYear={onEntranceYear}
					value={entranceYear}
					dataArr={entranceYearArray}
				/>

				<RegisterButton type='submit'>????????????</RegisterButton>
			</form>

		  </div>
		</StyledContainer>	
	)
}

export default Auth(Register, false)