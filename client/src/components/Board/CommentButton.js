import axios from 'axios';
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { USER_SERVER } from '../Config.js'
import { FaRegCommentDots } from "react-icons/fa"

const ButtonImage = styled.span`
  width: 12px;
  height: 12px;
  margin-left: 10px;
`
const CommentCounted = styled.p`
  display: inline-block;
  color: #0ca5af;
  font-size: 13px;
  padding-left: 4px;
`

// 밑에 userFrom을 빼도될듯
function CommentButton({boardId}) {
	const userFrom = localStorage.getItem('userId')
	const [count, setCount] = useState(0)
	
	let body = {
		userFrom: userFrom,
		boardFrom: boardId
	}
	
	useEffect(()=> {
		axios.post(`${USER_SERVER}/comment/getComment`, body)
			.then((response) => {
				if(response.data.success) {
					setCount(response.data.commentCounts)
				} else {
					alert('댓글을 보여줄 수 없습니다.')
				}
			})
	}, [])
	
	
	return (
		<button>
			<ButtonImage>
				<FaRegCommentDots />
			</ButtonImage>
			<CommentCounted>{count}</CommentCounted>
		</button>
	
	)
	
	
}

export default CommentButton