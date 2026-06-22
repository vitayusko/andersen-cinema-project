import { createSlice } from "@reduxjs/toolkit";
import { fetchMovieById } from './movieThunks' 
import type { Movie } from '../../types/movie';

interface MovieState  {
  movie: Movie | null;
  loading: boolean;
  error: string | null;
}

const initialState: MovieState = {
  movie: null,
  loading: false,
error: null,
}

const movieSlice = createSlice (
  {
    name: 'movie',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
      .addCase(fetchMovieById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase (fetchMovieById.fulfilled, (state, action) => {
        state.loading = false;
        state.movie = action.payload;
      })
      .addCase ( fetchMovieById.rejected, (state, action) => {
        state.loading = false;
        state.error =
        action.payload ?? 'Failed to fetch movie';
      })
    }
  }
)

export default movieSlice.reducer;