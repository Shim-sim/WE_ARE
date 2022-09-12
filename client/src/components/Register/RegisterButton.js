import styled from "styled-components";


const Button = styled.button`

	/* 공통 스타일 */
		width: 100%;
		color: white;
		cursor: pointer;
		text-align: center;
		border-radius: 12px;
		
		/* 크기 */
		height: 40px;
		font-size: 16px;
		font-weight: 200;
		margin-top: 20px;
		margin-bottom: 8px;
		
		
		/* 색상 */
		background: #c62917;
		
`

const RegisterButton = ({ type, children}) => {
	return (
		<Button type={type}>{children}</Button>
	)
}

export default RegisterButton