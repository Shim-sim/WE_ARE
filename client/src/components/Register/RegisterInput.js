import styled from "styled-components";

const StyledLabel = styled.label`
  font-size: 12px;
  color: #777;
  padding-left: 5px;
	margin-top: 15px;
`;

const StyledInput = styled.input`
  /* 공통 스타일 */
  width: 100%;
  outline: none;
  border: 1px solid #ededed;
  border-radius: 12px;
  box-sizing: border-box;
  color: #333;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
	
  /* 색상 */
  background: #fff;
  &:focus {
    border: 1px solid rgba(0, 0, 0, 0.8);
  }
	
  /* 크기 */
  height: 35px;
  margin: 4px 0;
`;

const RegisterInput = ({
	labelName,
	name,
	placeholder,
	onChange,
	value
}) => {
	return (
		
		<StyledLabel>
		{labelName}	
		<StyledInput
			name={name}
			placeholder={placeholder}
			onChange={onChange}
			value={value}
		/>
		</StyledLabel>	
	)
}

export default RegisterInput