import axios from 'axios';
import { useEffect, useState  } from 'react'
import styled from 'styled-components'
import { USER_SERVER, LOCAL_SERVER } from '../Config.js'
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


function CommentButton({boardId}) {
	const [count, setCount] = useState(0)
	
	useEffect(()=> {
		axios.post(`${LOCAL_SERVER}/comment/getComment`, {'boardFrom': boardId})
			.then((response) => {
				if(response.data.success) {
					setCount(response.data.commentCounts)
				} else {
					alert('댓글을 보여줄 수 없습니다.')
				}
			})
	}, [count, boardId])
	
	
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