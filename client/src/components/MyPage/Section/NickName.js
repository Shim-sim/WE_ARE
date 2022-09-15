import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Auth from '../../../hoc/auth'
import styled from 'styled-components' 
import StyledHeader from './StyledHeader'
import { USER_SERVER } from '../../Config'
import { MdPersonPin } from "react-icons/md";


const PersonBox = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	margin-top: 30%;
`

const PersonIcon = styled.i`
	opacity: 0.9;
	font-size: 130px;
	color: #725d5d;
`

const StyledBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`

const StyledInput = styled.input`
	width: 95%;
	margin-left: 10px;
	height: 50px;
	padding: 0 10px;
	border: 1px solid #a7a7a7;
	border-radius: 15px;
`

const Button = styled.button`
  background-color: #c62917;
	color: #fff;
	width: 50%;
	height: 40px;
	font-size: 17px;
	text-align: center;
	border-radius: 14px;
	margin-top: 17px;
`


function NickName() {
	const navigate = useNavigate()
	
	const userFrom = localStorage.getItem('userId')
	const [CurrentNickname, setCurrentNickname] = useState('')
	
	const onChangeNickname = (e) => {
		e.preventDefault();
		let body = {
			_id: userFrom,
			nickname: CurrentNickname
		}
		
		axios.post(`${USER_SERVER}/user/update/nickname`, body)
			.then(response => {
				if(response.status === 200) {
					alert('닉네임이 변경되었습니다.')
					navigate('/mypage')
				} else {
					alert('닉네임 변경에 실패했습니다.')
				}
		})
		
	}
	
	
	useEffect(()=> {
		axios.get(`${USER_SERVER}/USER`, {_id: userFrom})
			.then(response => {
				setCurrentNickname(response.data.nickname)
			})
	}, [userFrom])
	

	
	
	return (
		<>
			<StyledHeader title="닉네임 변경"/>
			<PersonBox>
				<PersonIcon>
					<MdPersonPin />
				</PersonIcon>
			</PersonBox>
			<StyledBox>
				<StyledInput
					value={CurrentNickname}
					onChange={(e)=>{setCurrentNickname(e.target.value)}}
					/>
				<Button onClick={onChangeNickname}>닉네임 변경</Button>
			</StyledBox>
		</>
	)
}

export default Auth(NickName, true)