import styled from 'styled-components';

const Input = styled.input`
  width: 95%;
  outline: none;
  border: 1px solid #ededed;
  box-sizing: border-box;
  color: #333;
  padding-left: 0.5rem;
  padding-right: 0.5rem;

  background: #fff;

  height: 40px;
  margin-top: 5px;
  margin-left: 8px;
`;

const LoginInput = ({ type, name, placeholder, onChange, value }) => {
  return (
    <Input
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};

export default LoginInput;
