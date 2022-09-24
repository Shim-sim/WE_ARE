import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import UploadInput from '../components/Upload/UploadInput'
import UploadTextarea from '../components/Upload/UploadTextarea'
import StyledContainer from '../components/Style/styledContainer'
import CheckNickname from '../components/Upload/CheckNickname'
import styled from 'styled-components'
import Auth from '../hoc/auth'
import { USER_SERVER, LOCAL_SERVER } from '../components/Config.js'


const UploadForm = styled.form`
	position: relative;
  height: 165px;
  margin: 0px -1px;
  box-sizing: border-box;
	text-align: center;
`
//build test

function Upload() {
	const navigate = useNavigate()
	const userFrom = localStorage.getItem('userId')
	const writerFrom = localStorage.getItem('userNickname')
	
	const [writerIcon, setWriterIcon] = useState(true)
	const [BoardWriter, setBoardWriter] = useState('익명')
	const [inputs, setInput] = useState({
		boardTitle: "",
		boardContent: ""
	})
		
	const { boardTitle, boardContent } = inputs;
	
	
	const onIconClick = () => {
		if(writerIcon) {
			setWriterIcon(false)
			setBoardWriter(writerFrom)
		} else {
			setWriterIcon(true)
			setBoardWriter('익명')
		}
	}
	
	const onChange = (e) => {
		const { value, name } = e.target
		setInput({
			...inputs,
			[name]: value
		})
	}
	
	const onSubmit = (e) => {
		e.preventDefault()
		if(!boardTitle) {
			alert('제목을 작성해주세요')
			return;
		} else if (!boardContent) {
			alert('내용을 작성해주세요')
			return;
		}
		
		let variables = {
			userFrom: userFrom,
			boardTitle: boardTitle,
			boardContent: boardContent,
			boardWriter: BoardWriter
		}
		
		axios.post(`${LOCAL_SERVER}/board/upload`,variables).then((response) => {
			if(response.status === 200) {
				setInput({
          boardTitle: "",
          boardContent: "",
        })
				navigate('/board')
			} else {
				alert('게시글 업로드에 실패하였습니다.')
			}
		})
	}
	
	return(
	
	<StyledContainer  minHeight="45vh">
		<UploadForm onSubmit={onSubmit}>
			<UploadInput
				name="boardTitle"
				placeholder="제목을 작성해주세요."
				onChange={onChange}
				value={boardTitle}
			/>
			<UploadTextarea
				name="boardContent"
				placeholder="여기를 눌러서 글을 작성할 수 있습니다."
				onChange={onChange}
				value={boardContent}
			/>
			<div style={{display: 'flex', justifyContent: 'space-around'}}>
				<CheckNickname
					icon={writerIcon}
					click={onIconClick}
					submit={onSubmit}
				/>
			</div>	
		</UploadForm>
			
	</StyledContainer>
		

		
	)
}

export default Auth(Upload, true)