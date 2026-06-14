import { createAsyncThunk } from "@reduxjs/toolkit";

import { getMovies } from "../../api/moviesApi";
import type { Movie } from "../../types/movie";

export const fetchMovies = createAsyncThunk <
  Movie[],
  number | undefined,
  { rejectValue: string }
>(
    'movies/fetchMovies',
    async ( page: number = 1, {rejectWithValue} ) => {
        try {
            const data = await getMovies (page);
             console.log('TMDB response:', data);
            return data;
        } catch { return rejectWithValue('Failed to fetch movies'); }

 } );

    