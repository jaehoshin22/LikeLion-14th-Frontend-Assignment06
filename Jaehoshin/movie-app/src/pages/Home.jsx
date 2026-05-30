import useMovies from '../hooks/useMovies';

export default function Home({ addMovie, watchlist }) {
  const movies = useMovies();

  return (
    <div>
      <h1 className='px-8 py-6 font-bold text-2xl'>🎬인기 영화</h1>
      <div className='grid grid-cols-4 gap-4 p-4'>
        {movies.map((movie) => (
          <div key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
            <p>{movie.title}</p>
            <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md" onClick={() => addMovie(movie)}>찜</button>
          </div>
        ))}
      </div>
    </div>
  );
}