import MypageList from '../components/MyPage/MypageList';
import styled from 'styled-components';
import Auth from '../hoc/auth';
import { Link } from 'react-router-dom';
import { MdMessage, MdChangeCircle, MdPersonOff } from 'react-icons/md';

const MyPageBox = styled.div`
  position: absolute;
  width: 95%;
  top: 10%;
`;

function MyPage() {
  return (
    <MyPageBox>
      <Link to="/mypage/myboard">
        <MypageList title="내가 쓴 글" icon={<MdMessage />} />
      </Link>
      <Link to="/mypage/nickname">
        <MypageList title="닉네임 변경" icon={<MdChangeCircle />} />
      </Link>
      <Link to="/mypage/withdrawl">
        <MypageList title="회원탈퇴" icon={<MdPersonOff />} />
      </Link>
    </MyPageBox>
  );
}

export default Auth(MyPage, true);
