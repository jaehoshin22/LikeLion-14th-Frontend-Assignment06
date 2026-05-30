// 찜 목록 상태 관리
import { useState } from 'react';

export default function useWatchlist() {
  const [watchlist, setWatchlist] = useState([]);

  const addMovie = (movie) => {
    setWatchlist([...watchlist, movie]);
  };

  const removeMovie = (id) => {
    setWatchlist(watchlist.filter((m) => m.id !== id));
  };

  return { watchlist, addMovie, removeMovie };
}
