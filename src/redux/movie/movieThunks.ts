import { createAsyncThunk } from '@reduxjs/toolkit';

import { getMovie } from '../../api/moviesApi';
import type { Movie } from '../../types/movie';

export const fetchMovieById = createAsyncThunk<
Movie,
number,
{rejectValue: string}
>(
    'movie/fetchMovie',
    async ( movieId, {rejectWithValue}) => {
        try {
            return await getMovie (movieId);
        } catch  {
           return rejectWithValue('Failed to fetch movie');
        }
    }
) 