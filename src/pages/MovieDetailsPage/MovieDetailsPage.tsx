import { useParams } from "react-router-dom";
import { Hero } from "./MovieDetailsPageSections/Hero/Hero";
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchMovieById } from "../../redux/movie/movieThunks";
import { useEffect } from "react";



// Redux useParams, useDispatch, useSelector забираем сюда все данные с редакса и передаем на чилдренов
export function MovieDetailsPage() {

  const {id} = useParams();
  const dispatch = useAppDispatch();
  const {movie, loading, error} = useAppSelector(
    (state) => state.movie,
  )
  useEffect(() => {
    if (id) {
      dispatch(fetchMovieById (Number(id)));
    }
  }, [dispatch, id]);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  if (!movie) {
    return <div>No movie found</div>;
  }
  
  return (
    <div>
      <h1>Movie Details</h1>
      <div>
        <Hero
          title={movie.title}
          overview={movie.overview}
          poster_path={movie.poster_path}
        />
      </div>
    </div>
  );
}
