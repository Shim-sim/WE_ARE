import styled from 'styled-components';

const StyledLabel = styled.label`
  font-size: 12px;
  color: #777;
  padding-left: 5px;
`;

const StyledSelect = styled.select`
  width: 100%;
  outline: none;
  border: 1px solid #ededed;
  border-radius: 12px;
  box-sizing: border-box;
  color: #333;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  background: #f9f9f9;
  &:focus {
    background: #fff;
  }
  height: 40px;
  margin-top: 4px;
  margin-bottom: 8px;
`;

function RegisterSelect({ labelName, onEntranceYear, value, dataArr }) {
  return (
    <StyledLabel>
      {labelName}
      <StyledSelect onChange={onEntranceYear} value={value}>
        {dataArr.map((data, index) => {
          return (
            <option value={data} key={index}>
              {data}
            </option>
          );
        })}
      </StyledSelect>
    </StyledLabel>
  );
}

export default RegisterSelect;
