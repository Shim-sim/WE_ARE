
import StyledContainer from '../components/Style/styledContainer'
import styled from "styled-components";
import logo from '../assets/logo.png'
import RegisterInput from '../components/Register/RegisterInput'
import RegisterButton from '../components/Register/RegisterButton'

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





function Register() {
	return (
		<StyledContainer minHeight="95vh">
			<div>
			<Header>
				<Logo src={logo} alt="logo" />	
				<HeaderTitle>WE ARE에 오신것을 환영합니다.</HeaderTitle>
				<HeaderText>WE ARE은 1포병여단 익명 게시판 플래폼입니다.</HeaderText>
			</Header>
			<form style={{ display: 'flex', flexDirection: 'column' }}>
				<RegisterInput placeholder="아이디" labelName="아이디"/>
				<RegisterInput placeholder="비밀번호" labelName="비밀번호"/>
				<RegisterInput placeholder="이메일" labelName="이메일"/>
				<RegisterInput placeholder="홍길동" labelName="실명"/>
				<RegisterInput placeholder="닉네임" labelName="닉네임"/>
				
				<RegisterButton type="submit">회원가입</RegisterButton>
			</form>
			
				
		  </div>
		</StyledContainer>	
	)
}

export default Register