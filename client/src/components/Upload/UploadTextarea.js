import styled from 'styled-components'

const Textarea = styled.textarea`
	 width: 65%;
	 min-height: 360px;
	 resize: none;
	 padding: 10px;
	 border-radius: 10px;
	 border: 1px solid #ddd;
	 text-align: start;
	 white-space: pre-wrap;
	 word-break: break-word;
	 margin-bottom: 12px;
	 color: #382a2a;
	 
	 &:active,
    &:focus {
      outline: none;
      border: 1px solid #ffbaba;
    }
`

const UploadTextarea = ({ name, placeholder, value, onChange }) => {
	return (
		<Textarea
			name={name}
			placeholder={placeholder}
			value={value}
			onChange={onChange}
		/>
	)
}

export default UploadTextarea