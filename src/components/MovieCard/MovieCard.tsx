import type { Movie } from '../../types/movie';
import styles from './MovieCard.module.css';

type MovieCardProps = {
  movie: Movie
};

export function MovieCard({movie}: MovieCardProps) {

    const imageUrl = `${import.meta.env.VITE_TMDB_IMAGE_URL}${movie.poster_path}`;
  return (
     <div className={styles.card}>
      <img
        src={imageUrl}
        alt={movie.title}
        className={styles.poster}
      />

      <div className={styles.footer}>
        <h3 className={styles.title}>
          {movie.title}
        </h3>

        <div className={styles.info}>
          <span className={styles.rating}>
            ⭐ {movie.vote_average.toFixed(1)}
          </span>

          <span className={styles.year}>
            {movie.release_date.slice(0, 4)}
          </span>
        </div>
      </div>
    </div>
  );
}
