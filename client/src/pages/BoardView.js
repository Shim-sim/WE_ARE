import React, { useState, useEffect } from 'react'
import { USER_SERVER } from '../components/Config.js'
import axios from 'axios'
import styled from 'styled-components'
import StyledContainer from '../components/Style/styledContainer'
import BoardList from '../components/Board/BoardList'
import Auth from '../hoc/auth'

 const Button = styled.button`
 		background-color: #c62917;
    width: 75px;
    height: 45px;
    border-radius: 14px;
    color: white;
 `

function BoardView() {

	const [Content, setContent] = useState([])
	const [skip, setSkip] = useState(5)
  const [loadMore, setLoadMore] = useState(true);

	
	const loadMoreHandler = () => {
		axios.post(`${USER_SERVER}/board/getBoard`, { skip: skip })
			.then((response) => {
					setContent([...Content, ...response.data.boards])
					setSkip(skip + response.data.boards.length)
					if(response.data.boards.length < 5) {
						setLoadMore(false)
					}
			})
	}

	
	const FetchBoard = () => {
		axios.post(`${USER_SERVER}/board/getBoard`)
			.then((response) => {
				if(response.data.success) {
					setContent(response.data.boards)
				} else {
					alert('게시글을 보여줄 수 없습니다.')
				}
		})
	}
	
	
	useEffect(()=> {
		const userId = localStorage.getItem('userId')
		axios.get(`${USER_SERVER}/user/profile`,userId)
			.then((response) => {
				localStorage.setItem('userNickname', response.data.nickname)
			})
		FetchBoard()
	}, [])
	
	const onRemove = (id) => {
		setContent(Content.filter(content => content._id !== id))
		FetchBoard()
	}
	

	return (
		<>
			<StyledContainer marginTop="15%">
				{Content && 
					Content.map((board, index) => {
						return(
							<React.Fragment key={index}>
								<BoardList
									id={board._id}
									user={board.userFrom._id}
									time={board.createdAt}
									title={board.boardTitle}
									content={board.boardContent}
									writer={board.boardWriter}
									onRemove={onRemove}
								/>
							</React.Fragment>
						)
					})
				}
		</StyledContainer>
		
		{
			Content && loadMore && 
				<div style={{display: 'flex', justifyContent: 'center'}}>
					<Button onClick={loadMoreHandler}>더 보기</Button>
				</div>
		}
			</>
		
	)
}

export default Auth(BoardView, true)