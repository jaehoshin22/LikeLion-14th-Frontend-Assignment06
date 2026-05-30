export default function Watchlist({ watchlist, removeMovie }) {
  return (
    <div>
      <h1 className='px-8 py-6 font-bold text-2xl'>❤️찜 목록</h1>
      <div>
        {watchlist.map((movie) => (
          <div key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
            <p>{movie.title}</p>
            <button className='mb-2 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md' onClick={() => removeMovie(movie.id)}>삭제</button>
          </div>
        ))}
      </div>
    </div>
  );
}