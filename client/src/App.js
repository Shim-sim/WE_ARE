import { Routes, Route } from "react-router-dom"
import Login from './pages/Login'
import Register from './pages/Register'
import MyPage from './pages/MyPage'
import Board from './pages/Board'

function App() {
	
	
  return (
		<Routes>
     	<Route path="/" element={<Login />} />
			<Route path="register" element={<Register />} />
			<Route path="mypage" element={<MyPage />} />
			<Route path="board" element={<Board />} />
    </Routes>
  );
}

export default App;
