import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { USER_SERVER } from '../components/Config.js';
import axios from 'axios';
import styled from 'styled-components';
import StyledBox from '../components/Style/StyledBox';
import BoardList from '../components/Board/BoardList';
import CommentList from '../components/Board/CommentList';
import CommentInput from '../components/Board/CommentInput';
import CheckWriter from '../components/Board/CheckWriter';
import Auth from '../hoc/auth';

const CommentForm = styled.form`
  position: relative;
  background-color: #fafafa;
  margin: 0px -1px;
  box-sizing: border-box;
  width: 80%;
`;

const BackButton = styled.span`
  color: #c62917;
  font-size: 14px;
  line-height: 45px;
  font-weight: bold;
`;

function BoardDetail(props) {
  const naviagate = useNavigate();
  const { BoardId } = useParams();
  const userFrom = localStorage.getItem('userId');
  const writerFrom = localStorage.getItem('userNickname');
  const [WriterIcon, setWriterIcon] = useState(true);
  const [BoardWriter, setBoardWriter] = useState('익명');
  const [BoardDetail, setBoardDetail] = useState([]);
  const [Comments, setComments] = useState([]);
  const [Value, setValue] = useState('');

  let variables = {
    userFrom: userFrom,
    boardFrom: BoardId,
    commentContent: Value,
    commentWriter: BoardWriter,
  };

  const onIconClick = () => {
    if (WriterIcon) {
      setWriterIcon(false);
      setBoardWriter(writerFrom);
    } else {
      setWriterIcon(true);
      setBoardWriter('익명');
    }
  };

  const FetchComment = () => {
    axios
      .post(`${USER_SERVER}/comment/getComment`, { boardFrom: BoardId })
      .then((response) => {
        if (response.data.success) {
          setComments(response.data.comments);
        } else {
          alert('댓글 가져오기에 실패했습니다.');
        }
      });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!Value) {
      alert('댓글 내용을 작성해 주세요.');
    } else {
      axios
        .post(`${USER_SERVER}/comment/upload`, variables)
        .then((response) => {
          if (response.status === 200) {
            alert('댓글이 등록 되었습니다.');
            setValue('');
            FetchComment();
          }
        });
    }
  };

  const onRemoveBoard = (id) => {
    setBoardDetail(BoardDetail.filter((board) => board._id !== id));
    naviagate('/');
  };

  const onRemoveComment = (id) => {
    setComments(Comments.filter((comment) => comment._id !== id));
    FetchComment();
  };

  useEffect(() => {
    axios
      .post(`${USER_SERVER}/board/boardId`, { boardId: BoardId })
      .then((response) => {
        if (response.data.success) {
          setBoardDetail([response.data.board]);
        } else {
          alert('게시글 가져오기에 실패했습니다.');
        }
      });
    FetchComment();
  }, []);

  return (
    <StyledBox>
      {BoardDetail &&
        BoardDetail.map((board, index) => {
          return (
            <React.Fragment key={index}>
              <BoardList
                id={board._id}
                user={board.userFrom}
                time={board.createdAt}
                title={board.boardTitle}
                content={board.boardContent}
                writer={board.boardWriter}
                onRemove={onRemoveBoard}
              />
            </React.Fragment>
          );
        })}
      <CommentForm onSubmit={onSubmit}>
        <CommentInput
          name="Comment"
          placeholder="댓글을 작성해주세요."
          value={Value}
          onChange={(e) => setValue(e.target.value)}
        />
        <CheckWriter
          left="70%"
          icon={WriterIcon}
          click={onIconClick}
          submit={onSubmit}
        />
      </CommentForm>
      {Comments &&
        Comments.map((comment, index) => {
          return (
            <React.Fragment key={index}>
              <CommentList
                id={comment._id}
                user={comment.userFrom}
                writer={comment.commentWriter}
                time={comment.createdAt}
                content={comment.commentContent}
              />
            </React.Fragment>
          );
        })}

      <Link to="/board">
        <BackButton>글 목록</BackButton>
      </Link>
    </StyledBox>
  );
}

export default Auth(BoardDetail, true);
