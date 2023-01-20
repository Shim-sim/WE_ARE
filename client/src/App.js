import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import MyPage from './pages/MyPage';
import BoardView from './pages/BoardView';
import BoardDetail from './pages/BoardDetail';
import Upload from './pages/Upload';
import MyBoard from './components/MyPage/Section/MyBoard';
import NickName from './components/MyPage/Section/NickName';
import WithDrawal from './components/MyPage/Section/WithDrawal';
import Header from './components/Common/Header';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/board" element={<BoardView />} />
        <Route path="/board/:BoardId" element={<BoardDetail />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/mypage/myboard" element={<MyBoard />} />
        <Route path="/mypage/nickname" element={<NickName />} />
        <Route path="/mypage/withdrawl" element={<WithDrawal />} />
      </Routes>
    </>
  );
}

export default App;
