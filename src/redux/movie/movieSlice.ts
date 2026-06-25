import { createSlice } from "@reduxjs/toolkit";
import { fetchMovieById } from './movieThunks' 
import type { Movie } from '../../types/movie';
import { fetchMovieCast } from "./movieThunks";
import type  {CastMember} from "../../types/cast"

interface MovieState  {
  movie: Movie | null;
  cast: CastMember[];
  loading: boolean;
  error: string | null;
}

const initialState: MovieState = {
  movie: null,  
  cast: [],
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
      .addCase(fetchMovieCast.fulfilled, (state, action) => {
  state.cast = action.payload;
})
    }
  }
)

export default movieSlice.reducer;