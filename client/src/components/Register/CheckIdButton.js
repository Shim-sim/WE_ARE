
import styled from "styled-components";

const StyledButton = styled.button`

  /* 공통 스타일 */
  width: 18%;
  outline: none;
  border-radius: 11px;
  color: #fff;
  cursor: pointer;
	
  /* 색상 */
  background: #bbb;
	
  /* 크기 */
  height: 25px;
  margin: 1px 0 5px 5px;
  font-size: 13px;
	
`;


const CheckIdButton = function ({ onClick, children }) {
  return (
    <div>
      <StyledButton onClick={onClick}>{children}</StyledButton>
    </div>
  );
};

export default CheckIdButton;