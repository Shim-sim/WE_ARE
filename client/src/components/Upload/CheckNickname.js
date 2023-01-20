import styled from 'styled-components';
import writeIcon from '../../assets/write.png';
import uncheckWriter from '../../assets/writer.png';
import checkWriter from '../../assets/writeractive.png';

const CheckButton = styled.span`
  width: 38px;
  height: 38px;
`;
const SubmitButton = styled.span`
  background-color: #c62917;
  width: 75px;
  height: 45px;
  border-radius: 14px;
  cursor: pointer;
`;
const InputIcon = styled.img`
  width: 60px;
  height: 45px;
`;

function CheckNickname({ icon, left, click, submit }) {
  return (
    <>
      <CheckButton left={left} onClick={click}>
        {icon && <InputIcon src={checkWriter} />}
        {!icon && <InputIcon src={uncheckWriter} />}
      </CheckButton>
      <SubmitButton onClick={submit}>
        <InputIcon src={writeIcon} />
      </SubmitButton>
    </>
  );
}

export default CheckNickname;
