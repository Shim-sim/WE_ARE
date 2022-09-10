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
	  color: #ff1a00;
		font-size: 20px;
		font-weight: bold;
		padding-left: 3px;
	}
	
	.icon {
		font-size: 30px;
		transition: all 0.3s;
		color: #725d5d;
		vertical-align: middle;
		margin-left: 12px;
		
		&:hover {
			color: #ff1a00;
		}
	}
	
	.header__nav {
		position: absolute;
		font-size: 20px;
		font-weight: bold;
		right: 13%;
	}
	
	.subMenu {
		position: absolute;
		width: 140px;
		right: 9%;
		top: 60px;
		background: #fff;
		border: 1px solid #eee;
		box-shadow: 0px 0px 15px rgb(0 0 0 / 15%);
		border-radius: 5px;
		
		li {
			height: 50px;
			line-height: 50px;
			text-align: center;
			cursor: pointer;
		}
		
		.logout {
			color: #ff0000;
		}
	}
	
	.icon__position {
		position: absolute;
		right: 25%;
		margin: 12px;
	}
	
	
	
	
	}
`

