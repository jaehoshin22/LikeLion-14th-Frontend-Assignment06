import { useState } from 'react';
import { searchMovies } from '../api/tmdb';

export default function Search({ addMovie, watchlist }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    const data = await searchMovies(query);
    setResults(data);
  };

  return (
    <div>
      <h1 className='px-8 py-6 font-bold text-2xl'>🔍영화 검색</h1>
      <input
      className='px-3 py-2 mx-5 my-5 rounded-md border border-gray-800'
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="영화 제목 입력"
      />
      <button className='mb-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2.5 rounded-md' onClick={handleSearch}>검색</button>
      <div className='grid grid-cols-4 gap-4 p-4'>
        {results.map((movie) => (
          <div key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
            <p>{movie.title}</p>
            <button className='bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md' onClick={() => addMovie(movie)}>찜</button>
          </div>
        ))}
      </div>
    </div>
  );
}