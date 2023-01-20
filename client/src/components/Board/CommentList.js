import profile from '../../assets/profile.png';
import styled from 'styled-components';
import UpdateTime from '../Common/UpdateTime';
import DeleteComment from './DeleteComment';

const CommentBox = styled.div`
  background-color: #fff;
  color: #353535;
  font-size: 13px;
  padding: 14px 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin: 15px -1px -1px -1px;
  width: 75%;
`;
const CommentUser = styled.div`
  display: flex;
  height: 20px;
  margin-bottom: 8px;
  justify-content: space-between;
`;

const CommentUserImg = styled.img`
  width: 22px;
  height: 22px;
  border-radius: 3px;
  margin-right: 4px;
`;

const CommentUserId = styled.p`
  color: #757575;
  font-size: 11px;
  font-weight: bold;
  line-height: 22px;
`;

const CommentContent = styled.div`
  font-weight: normal;
  margin-bottom: 6px;
  white-space: pre-wrap;
  overflow-wrap: break-word;
`;

const CommentTime = styled.div`
  color: #aaa;
  font-size: 11px;
  line-height: 22px;
  text-align: left;
`;

function CommentList(props) {
  const currentUser = localStorage.getItem('userId');

  return (
    <CommentBox key={props.id}>
      <CommentUser>
        <span style={{ display: 'flex' }}>
          <CommentUserImg src={profile} alt="profile" />
          <CommentUserId>{props.writer}</CommentUserId>
        </span>

        {props.user === currentUser ? (
          <DeleteComment id={props.id} user={props.user} />
        ) : null}
      </CommentUser>

      <CommentContent>{props.content}</CommentContent>
      <CommentTime>
        <UpdateTime time={props.time} />
      </CommentTime>
    </CommentBox>
  );
}

export default CommentList;
