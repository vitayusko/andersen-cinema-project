import { useEffect } from 'react';

import { fetchMovies } from '../../redux/movies/moviesThunks';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { MovieCard } from '../../components/MovieCard/MovieCard';
import styles from './MoviesPage.module.css';
import { Container } from '../../components/Container/Container';

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
    <Container>
    <div className={styles.container}>
      <h1>Movies Page</h1>
      <ul className={styles.list}>
        {movies.map ((movie) => (
            <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </div></Container>
  );
};