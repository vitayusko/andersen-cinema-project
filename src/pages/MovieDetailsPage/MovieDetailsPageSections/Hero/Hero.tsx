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
      <h1 className={styles.h1}>{title}</h1>
      <p className={styles.p}>{overview}</p>
      <img
        src={imageUrl}
        alt={title}
        className={styles.img}
      />
    </div>
  </Container>
);
}