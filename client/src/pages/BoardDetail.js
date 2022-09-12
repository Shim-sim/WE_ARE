import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import { USER_SERVER } from '../components/Config.js'
import axios from 'axios'
import styled from 'styled-components'
import StyledContainer from '../components/Style/styledContainer'
import BoardList from '../components/Board/BoardList'
import Auth from '../hoc/auth'




function BoardDetail() {
	
	const {BoardId} = useParams()
	const userFrom = localStorage.getItem('userId');
  const writerFrom = localStorage.getItem('userNickname')
	const [BoardDetail, setBoardDetail] = useState([])
  let variables = {
    userFrom: userFrom,
    boardFrom: BoardId
  }
	
	useEffect(()=> {
		axios.post(`${USER_SERVER}/board/boardId`, { boardId: BoardId})
			.then((response) =>{
				if(response.data.success) {
					setBoardDetail([response.data.board])
				} else {
					alert('게시글 가져오기에 실패했습니다.')
				}
		})
	}, [])
	
	
	return (
		<StyledContainer minHeight="60vh">
		 {BoardDetail && BoardDetail.map((board, index) => {
				return (
					<React.Fragment key={index}>
						<BoardList 
							id={board._id}
							user={board.userFrom}
							time={board.createdAt}
							title={board.boardTitle}
							content={board.boardContent}
							writer={board.boardWriter}
						/>	
					</React.Fragment>	
				)
			})}
		</StyledContainer>
	
	)
}

export default Auth(BoardDetail, true)