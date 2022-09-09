


import Auth from '../hoc/auth'




function MyPage() {
	return (
		<div style={{top: '50%', position:'absolute'}}>
			MyPage 페이지이고 로그인한 유저만 출입 가능함
		</div>
	)
}

export default Auth(MyPage, true)