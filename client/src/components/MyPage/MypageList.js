import styled from 'styled-components';

const MypageBox = styled.li`
  padding: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MypageIcon = styled.i`
  opacity: 0.9;
  margin-right: 20px;
  font-size: 20px;
  color: #725d5d;
`;

const MypageTitle = styled.span`
  color: #000000;
  font-size: 16px;
  font-weight: 300;
  opacity: 0.9;
`;

export default function MypageList(props) {
  return (
    <MypageBox>
      <div>
        <MypageIcon>{props.icon}</MypageIcon>
        <MypageTitle>{props.title}</MypageTitle>
      </div>
    </MypageBox>
  );
}
