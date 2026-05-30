const BASE_URL = 'https://api.themoviedb.org/3';
const TOKEN = import.meta.env.VITE_TMDB_TOKEN;

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${TOKEN}`
  }
};

export const getPopularMovies = async () => {
  const res = await fetch(`${BASE_URL}/movie/popular?language=ko-KR`, options);
  const data = await res.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const res = await fetch(`${BASE_URL}/search/movie?query=${query}&language=ko-KR`, options);
  const data = await res.json();
  return data.results;
};