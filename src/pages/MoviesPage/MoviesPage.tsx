import { useEffect, useMemo, useState } from 'react';

import { fetchMovies } from '../../redux/movies/moviesThunks';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { MovieCard } from './MovieCard/MovieCard';
import styles from './MoviesPage.module.css';
import { Container } from '../../components/Container/Container';
import { MoviesControls,  type SortBy } from './MoviesControls/MoviesControls';

export const MoviesPage = () => {
  const dispatch = useAppDispatch();
   const { items: movies, loading, error } = useAppSelector(
    (state) => state.movies,
  );
   const [searchValue, setSearchValue] = useState('');
  const [sortBy, setSortBy] = useState<SortBy>('title');

const [page, setPage] = useState(1);

useEffect(() => {
  dispatch(fetchMovies(page));
}, [dispatch, page]);

  // useEffect(() => {
  //   dispatch(fetchMovies(1));
  // }, [dispatch]);

  const visibleMovies = useMemo(() => {
    return [...movies]
      .filter((movie) =>
        movie.title.toLowerCase().includes(searchValue.toLowerCase()),
      )
      .sort((a, b) => {
        if (sortBy === 'rating') {
          return b.vote_average - a.vote_average;
        }

        if (sortBy === 'year') {
          return (
            Number(b.release_date.slice(0, 4)) -
            Number(a.release_date.slice(0, 4))
          );
        }

        return a.title.localeCompare(b.title);
      });
  }, [movies, searchValue, sortBy]);

   if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
   

  return (
    <Container>
    <div className={styles.container}>
 <MoviesControls
          searchValue={searchValue}
          sortBy={sortBy}
          onSearchChange={setSearchValue}
          onSortChange={setSortBy}
        />      <ul className={styles.list}>
        {visibleMovies.map ((movie) => (
            <MovieCard key={movie.id} 
            id={movie.id}
            title={movie.title}
  posterPath={movie.poster_path}
  releaseDate={movie.release_date}
  voteAverage={movie.vote_average} />
        ))}
      </ul>

      <div className={styles.pagination}>
  <button
    type="button"
    disabled={page === 1}
    onClick={() => setPage((prev) => prev - 1)}
  >
    Prev
  </button>

  <span>Page {page}</span>

  <button
    type="button"
    onClick={() => setPage((prev) => prev + 1)}
  >
    Next
  </button>
</div>
    </div></Container>
  );
};