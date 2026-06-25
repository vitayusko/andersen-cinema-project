import type { RootState } from '../store';

export const selectFilteredMovies = ( state: RootState) => {
    const {items} = state.movies;
    const {searchValue, sortBy} = state.filters;

    return [...items]
    .filter ((movie) => 
    movie.title.toLowerCase().includes(searchValue.toLowerCase()),
)
.sort ((a, b) => {
     if (sortBy === 'rating') {
        return b.vote_average - a.vote_average;
      }

      if (sortBy === 'year') {
        return Number(b.release_date.slice(0, 4)) - Number(a.release_date.slice(0, 4));
      }

      return a.title.localeCompare(b.title);
})
}