import styles from './MovieCard.module.css';

interface MovieCardProps {
  title: string;
  posterPath: string;
  releaseDate: string;
  voteAverage: number;
}

export function MovieCard({title, posterPath, releaseDate, voteAverage}: MovieCardProps) {

    const imageUrl = `${import.meta.env.VITE_TMDB_IMAGE_URL}${posterPath}`;
  return (
     <div className={styles.card}>
      <img
        src={imageUrl}
        alt={title}
        className={styles.poster}
      />

      <div className={styles.footer}>
        <h3 className={styles.title}>
          {title}
        </h3>

        <div className={styles.info}>
          <span className={styles.rating}>
            ⭐ {voteAverage.toFixed(1)}
          </span>

          <span className={styles.year}>
            {releaseDate.slice(0, 4)}
          </span>
        </div>
      </div>
    </div>
  );
}
