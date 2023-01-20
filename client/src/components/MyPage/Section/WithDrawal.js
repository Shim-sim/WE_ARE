import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import StyledHeader from './StyledHeader';
import styled from 'styled-components';
import Auth from '../../../hoc/auth';
import { USER_SERVER } from '../../Config';

const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50%;
`;

const StyledInput = styled.input`
  width: 95%;
  margin-left: 10px;
  height: 40px;
  padding: 0 10px;
  border: 1px solid #a7a7a7;
  border-radius: 15px;
`;

const Button = styled.button`
  background-color: #c62917;
  color: #fff;
  width: 50%;
  height: 40px;
  font-size: 17px;
  text-align: center;
  border-radius: 14px;
  margin-top: 17px;
`;

const Alert = styled.p`
  color: #757575;
  font-size: 12px;
  font-weight: normal;
  line-height: 18px;
  margin-top: 16px;
`;

function WithDrawal() {
  const navigate = useNavigate();
  const [currentPassword, setCurrentPassword] = useState('');
  const userFrom = localStorage.getItem('userId');

  const onWithDrawal = (e) => {
    e.preventDefault();
    let body = {
      _id: userFrom,
      password: currentPassword,
    };
    let confirmUser = window.confirm('정말 회원을  탈퇴하겠습니까?');

    confirmUser &&
      axios.post(`${USER_SERVER}/user/withdrawal`, body).then((response) => {
        if (!response.data.success) {
          alert(response.data.message);
        } else {
          if (response.data.success) {
            alert('회원탈퇴가 완료 되었습니다.');
            localStorage.removeItem('userId');
            localStorage.removeItem('userNickname');
            navigate('/');
          } else {
            alert('회원탈퇴에 실패했습니다.');
          }
        }
      });
  };

  return (
    <>
      <StyledHeader title="회원 탈퇴" />
      <StyledBox>
        <StyledInput
          type="password"
          placeholder="계정 비밀번호"
          value={currentPassword}
          onChange={(e) => {
            setCurrentPassword(e.target.value);
          }}
        />
        <Button onClick={onWithDrawal}>회원 탈퇴</Button>
        <Alert>
          ※ 개인정보, 글 목록 등의 데이터가 삭제되며, 복구할 수 없습니다.
        </Alert>
      </StyledBox>
    </>
  );
}

export default Auth(WithDrawal);
