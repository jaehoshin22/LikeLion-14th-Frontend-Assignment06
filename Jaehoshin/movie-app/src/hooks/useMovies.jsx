// TMDB API에서 인기 영화 데이터를 가져옴
import { useState, useEffect } from 'react';
import { getPopularMovies } from '../api/tmdb';

export default function useMovies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
  const fetchMovies = async () => {
    const data = await getPopularMovies();
    setMovies(data);
  };
  fetchMovies();
}, []);

  return movies;
}