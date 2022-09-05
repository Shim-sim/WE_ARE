import styled from "styled-components"


export const HeaderWrap = styled.div`
	position: fixed;
  top: 0;
  height: 50px;
  line-height: 50px;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #eee;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  z-index: 999;
	
	
	img {
		width: 47px;
		height: 41px;
		vertical-align: middle;
		cursor: pointer;
		margin-left: 13%;
	}
	
	span {
	  color: red;
		font-size: 20px;
		font-weight: bold;
		padding-left: 3px;
	}
	
	.header__login {
		position: absolute;
		font-size: 20px;
		font-weight: bold;
		right: 13%;
		
	}
`

