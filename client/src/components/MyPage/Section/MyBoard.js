import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Auth from '../../../hoc/auth'
import styled from 'styled-components' 
import StyledHeader from './StyledHeader'
import BoardList from '../../Board/BoardList'
import StyledBox from '../../Style/StyledBox'
import AlertBox from './AlertBox'
import { USER_SERVER } from '../../Config'


function MyBoard(props) {
	const [myBoard, setMyboard] = useState([])
	
	useEffect(()=> {
		const userFrom = localStorage.getItem('userId')
		axios.post(`${USER_SERVER}/user/myBoard`, {'userFrom': userFrom} )
			.then(response => {
				console.log(response)
				if(response.data.success) {
					setMyboard(response.data.boards)
				} else {
					alert('게시글 정보를 가져오는데 실패했습니다.')
				}
		})
	}, [])
	
	
	return (
		<>
			<StyledHeader title="내가 쓴 글"/>
				{(myBoard.length === 0) && 
					<AlertBox>
						게시글 목록이 없습니다.
					</AlertBox>
				}
				<StyledBox marginTop="40%">
					{myBoard && myBoard.map((board, index) => {
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
						})
					}
				</StyledBox>
		</>
	)
}

export default Auth(MyBoard)
