import styled from 'styled-components'

export const ListDiv = styled.div`
  width: 65%;
  margin: 0 auto;
  margin-top: 82px;
	@media (max-width: 1200px) {
    width: 80%;
  }
	
	.list__Option {
		margin-top: 32px;
    margin-bottom: 24px;
    display: flex;
    justify-content: space-between;
		
		form {
			width: 30%;
			display: grid;
			grid-template-columns: 4fr 1fr;
      grid-template-rows: 40px;
      @media (max-width: 1280px) {
        width: 40%;
      }
      @media (max-width: 800px) {
        width: 55%;
        grid-template-columns: 3fr 1fr;
      }
      @media (max-width: 600px) {
        width: 60%;
      }
      @media (max-width: 500px) {
        grid-template-columns: 140px 60px;
      }
			
			input {
        padding-left: 10px;
        border-radius: 5px 0px 0px 5px;
        border: 1px solid #eee;
				
        &:active,
        &:focus {
          outline: none;
          border: 1px solid #725d5d;
        }
      }
			button {
        height: 100%;
        border-radius: 0px 5px 5px 0px;
        border: 1px solid rgba(0, 0, 0, 0.4);
        font-weight: bold;
        color: #fff;
        background: #ff1a00;
        transition: all 0.5s;
				
        &:hover,
        &:active {
          border: 1px solid #10ad62;
          background: #10ad62;
        }
      }
		}
	}
`