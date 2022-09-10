import { ListDiv } from './BoardStyle'






const BoardHeader = ({ value, onChange, placeholder, onClick, content }) => {
	return (
		<ListDiv>
			<div className="list__Option">
				<form>
					<input 
						placeholder={placeholder}
						onChange={onChange}
						value={value}
					/>
					<button onClick={onClick}>{content}</button>
				</form>
				<div>
					{children}
				</div>
			</div>
		</ListDiv>
	)
}

export default BoardHeader
