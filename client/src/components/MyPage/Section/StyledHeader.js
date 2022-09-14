import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { BsFillBackspaceReverseFill } from "react-icons/bs";


const Header = styled.header`
	display: flex;
	color: #353535;
	position: absolute;
	background-color: #fff;
	width: 95%;
	top: 10%;
	height: 56px;
	padding: 0px 8px;
	margin-bottom: 8px;
	align-items: center;
	justify-content: space-around;
`

const HeaderTitle = styled.span`
	color: #454545;
	font-size: 22px;
	font-weight: bold;
	text-align: left;
	line-height: 56px;
	padding-left: 8px;
`

const BackButton = styled.div`
	margin-right: 4px;
`

const BackIcon = styled.i`
	color: #bf2a19;
	font-size: 22px;
`





export default  function StyledHeader(props) {
	return (
		<Header>
			
			<HeaderTitle>{props.title}</HeaderTitle>
			
			<Link to="/mypage">
				<BackButton>
					<BackIcon><BsFillBackspaceReverseFill /></BackIcon>
				</BackButton>
			</Link>	
			
		</Header>
	)
}

