import { Routes, Route } from "react-router-dom"
import Login from './pages/Login'
import Register from './pages/Register'
import MyPage from './pages/MyPage'
import BoardView from './pages/BoardView'
import BoardDetail from './pages/BoardDetail'
import Upload from './pages/Upload'


import Header from './components/Common/Header'

function App() {
	
	
  return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/mypage" element={<MyPage />} />
				<Route path="/upload" element={<Upload />} />
				<Route path="/board" element={<BoardView />} />
				<Route path="/board/:BoardId" element={<BoardDetail />} />
			</Routes>
		</>
  );
}


export default App;



