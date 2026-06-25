import { createAsyncThunk } from '@reduxjs/toolkit';

import { getMovie } from '../../api/moviesApi';
import type { Movie } from '../../types/movie';
import { getMovieCast } from '../../api/moviesApi';

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


export const fetchMovieCast = createAsyncThunk (
    'movie/fetchMovieCast',
    async (movieId: number) => {
        return await getMovieCast(movieId)
    }
)