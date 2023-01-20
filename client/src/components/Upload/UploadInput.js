import styled from 'styled-components';

const Input = styled.input`
  width: 65%;
  height: 50px;
  padding: 0 15px;
  border: 1px solid #ddd;
  border-radius: 13px;
  font-size: 15px;
  margin-bottom: 15px;
  color: #382a2a;

  &:active,
  &:focus {
    outline: none;
    border: 1px solid #ffbaba;
  }
`;

const UploadInput = ({ name, placeholder, value, onChange }) => {
  return (
    <Input
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};

export default UploadInput;
