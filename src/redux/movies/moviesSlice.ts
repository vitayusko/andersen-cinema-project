import { createSlice } from "@reduxjs/toolkit";
import type { Movie } from '../../types/movie';
import { fetchMovies } from './moviesThunks'

interface MoviesState {
    items: Movie [],
    loading: boolean,
    error: string | null,
}

const initialState: MoviesState = {
    items: [],
    loading: false,
    error: null,
}

const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })

      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? 'Failed to fetch movies';
      })
   
      
    }
})

export default moviesSlice.reducer;