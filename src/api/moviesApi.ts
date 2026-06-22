import { api } from './api';

export const getMovies = async (page = 1) => {
const response = await api.get ('/discover/movie', {
    params: {
        api_key: import.meta.env.VITE_TMDB_API_KEY,
        page,
    }
})
return response.data.results;
}

export const getMovie = async (movieId: number) => {
  const response = await api.get(`/movie/${movieId}`, {
    params: {
      api_key: import.meta.env.VITE_TMDB_API_KEY,
    },
  });

  return response.data;
};