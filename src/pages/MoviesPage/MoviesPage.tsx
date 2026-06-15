import { useEffect } from 'react';

import { fetchMovies } from '../../redux/movies/moviesThunks';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

export const MoviesPage = () => {
  const dispatch = useAppDispatch();
  const movies = useAppSelector ((state) => state.movies.items);
    const { items, loading, error } = useAppSelector(
    (state) => state.movies
  );
  const moviesState = useAppSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovies(1));
  }, [dispatch]);
   if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
   
console.log('movies state:', moviesState);

  return (
    <div>
      <h1>Movies Page</h1>
      <ul>
        {movies.map ((movie) => (
            <li key={movie.id}>{movie.title}</li>
        ))}
       
      </ul>
    </div>
  );
};