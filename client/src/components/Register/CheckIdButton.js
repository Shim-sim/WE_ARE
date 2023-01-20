import styled from 'styled-components';

const StyledButton = styled.button`
  width: 18%;
  outline: none;
  border-radius: 11px;
  color: #fff;
  cursor: pointer;
  background: #bbb;
  height: 25px;
  margin: 1px 0 5px 5px;
  font-size: 13px;
`;

const CheckIdButton = function ({ onClick, children, type }) {
  return (
    <div>
      <StyledButton type={type} onClick={onClick}>
        {children}
      </StyledButton>
    </div>
  );
};

export default CheckIdButton;
