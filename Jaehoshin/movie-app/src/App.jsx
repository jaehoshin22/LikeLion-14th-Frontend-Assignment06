import { Routes, Route, NavLink, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Search from './pages/Search'
import Watchlist from './pages/Watchlist'
import NotFound from './pages/NotFound'
import useWatchlist from './hooks/useWatchlist'
import AgeCalc from './pages/AgeCalc'
export default function App() {
  const { watchlist, addMovie, removeMovie } = useWatchlist()

 return (
  <div>
    <div className="flex justify-between items-center px-8 py-4 border-b-2 border-gray-400 ">
      <span className="font-extrabold text-4xl">CINEMATE</span>
      <nav className="flex gap-6 pr-20">
        <NavLink to="/home">홈</NavLink>
        <NavLink to="/search">검색</NavLink>
        <NavLink to="/watchlist">찜 목록</NavLink>
        <NavLink to="/age">나이계산기</NavLink>
      </nav>
    </div>
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home addMovie={addMovie} watchlist={watchlist} />} />
      <Route path="/search" element={<Search addMovie={addMovie} watchlist={watchlist} />} />
      <Route path="/watchlist" element={<Watchlist watchlist={watchlist} removeMovie={removeMovie} />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/age" element={<AgeCalc />} />
    </Routes>
  </div>
)
}