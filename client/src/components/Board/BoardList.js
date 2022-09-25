import { Link } from 'react-router-dom';
import profile from '../../assets/profile.png'
import styled from 'styled-components'
import UpdateTime from '../Common/UpdateTime'
import DeleteBoard from './DeleteBoard';
import CommentButton from './CommentButton';

const BoardBox = styled.div`
	width: 80%;
  background-color: #fff;
  color: #353535;
  font-size: 13px;
  padding: 14px 12px;
  border: 1px solid #ddd;
  margin-bottom: 15px;
	border-radius: 15px;
`
const BoardUser = styled.div`
  display: flex;
  height: 22px;
  margin-top: 2px;
  margin-bottom: 12px;
  justify-content: space-between;
`
const BoardUserImg = styled.img`
  width: 22px;
  height: 22px;
  border-radius: 3px;
  margin-right: 6px;
`
const BoardUserId = styled.p`
  color: #757575;
  font-size: 12px;
  font-weight: bold;
  line-height: 22px;
`
const BoardTime = styled.div`
  color: #aaa;
  font-size: 12px;
  line-height: 22px;
  padding-left: 8px;
  text-align: left;
`
const BoardTitle = styled.div`
  font-weight: bold;
  margin-bottom: 4px;
`
const BoardContent = styled.div`
  font-weight: normal;
  margin-bottom: 8px;
  white-space: pre-wrap;
  overflow-wrap: break-word;
`


export default function BoardList(props) {
	const currentUser = localStorage.getItem('userId')
	
	return (
		<BoardBox>
			<BoardUser>
				<span style={{display: 'flex'}}>
					<BoardUserImg src={profile} alt="profile" />
					<BoardUserId>{props.writer}</BoardUserId>
					<BoardTime>
						<UpdateTime time={props.time} />
					</BoardTime>
				</span>
				{ props.user === currentUser	
					? <DeleteBoard
							board={props.id}
							user={props.user}
						/>	
					: null }
			</BoardUser>
			<Link to={`/board/${props.id}`}>
				<BoardTitle>{props.title}</BoardTitle>
				<BoardContent>{props.content}</BoardContent>
			</Link>
			
			
			<div style={{textAlign: "right", position: "relative", height: "20px"}}>
				<CommentButton boardId={props.id} />
			</div>
		</BoardBox>
	)
}

