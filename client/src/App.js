import { Routes, Route } from "react-router-dom"
import Login from './pages/Login'
import Register from './pages/Register'
import MyPage from './pages/MyPage'
import Board from './pages/Board'

import Header from './components/Common/Header'

function App() {
	
	
  return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="register" element={<Register />} />
				<Route path="mypage" element={<MyPage />} />
				<Route path="board" element={<Board />} />
			</Routes>
		</>
  );
}

export default App;
