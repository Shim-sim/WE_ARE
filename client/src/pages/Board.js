import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { logoutUser } from '../_actions/user_action'
import { useNavigate } from 'react-router-dom'
import { ListDiv } from '../components/Board/BoardStyle'
import { DropdownButton, Dropdown } from "react-bootstrap";


import StyledContainer from '../components/Style/styledContainer'
import Auth from '../hoc/auth'

function Board() {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	
	const [sort, setSort] = useState('최신순')
	

	
	return (
		<>
			<ListDiv>
				<div className="list__Option">
				<form>
				<input 
					type="text"
					placeholder="제목, 내용 검색"
				/>
					<button>검색</button>
				</form>
				<DropdownButton align="end" variant="outline-secondary" title={sort} >
          <Dropdown.Item onClick={()=> setSort('최신순')}>
            최신순
          </Dropdown.Item>
          <Dropdown.Item onClick={()=> setSort('인기순')}>
            인기순
          </Dropdown.Item>
        </DropdownButton>
				</div>
			</ListDiv>
			<StyledContainer >

			</StyledContainer>
			</>
		
	)
}

export default Auth(Board, true)