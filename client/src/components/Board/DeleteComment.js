import axios from 'axios';
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { USER_SERVER } from '../Config.js'


const Button = styled.button`
	color: #c62912;
  font-size: 12px;
  line-height: 22px;
`

export default function DeleteComment(props) {
	const navigate = useNavigate()
	
	const onDelete = () => {
		let variables = {
			id: props.id,
			userFrom: props.user
		}
		
		let comfirmDelete = window.confirm('삭제하시겠습니까?')
		comfirmDelete && axios.post(`${USER_SERVER}/comment/deleteComment`, variables)
		.then(response => {
			if(response.data.success) {
				alert('댓글 삭제에 성공했습니다.')
				window.location.reload()
			} else {
				alert('댓글 삭제에 실패했습니다.')
			}
		})
	}
	
	return (
		<Button onClick={onDelete}>
			삭제
		</Button>
	)
}