import { Container } from "../../../../components/Container/Container";
import styles from "./Hero.module.css";

interface HeroMovieDetailsProps {
  title: string;
  overview: string;
  poster_path: string;
  
};

export function Hero ({
  title, 
  overview, 
  poster_path
}: HeroMovieDetailsProps) {
  const imageUrl =
  `${import.meta.env.VITE_TMDB_IMAGE_URL}${poster_path}`;
return (
  <Container>
    <div className={styles.heroWrapper}>
  <img
    src={imageUrl}
    alt={title}
    className={styles.img}
  />

  <div className={styles.overlay}>
    <h1 className={styles.h1}>
      {title}
    </h1>

    <p className={styles.p}>
      {overview}
    </p>

    <div className={styles.actions}>
      <button className={styles.playButton}>
        <svg className={styles.playIcon}>
    <use href="/symbol.svg#icon-play" />
  </svg> Play Now
      </button>

      <button  className={styles.actionsBtn}>
        <svg className={styles.actionIcon}>
    <use href="/symbol-hero-movie.svg#icon-untitled" />
  </svg></button>
      <button className={styles.actionsBtn}><svg className={styles.actionIcon}>
    <use href="/symbol-hero-movie.svg#icon-woice" />
  </svg></button>
      {/* <button className={styles.actionsBtn}><button className={styles.actionsBtn}><svg className={styles.actionIcon}>
    <use href="/symbol-hero-movie.svg#icon-ok" />
  </svg></button></button> */}
    </div>
  </div>
</div>
  </Container>
);
}