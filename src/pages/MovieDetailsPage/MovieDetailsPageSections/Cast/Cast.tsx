import { Container } from "../../../../components/Container/Container"
import styles from "./Cast.module.css"
import { useRef } from 'react';


interface CastMember {
  id: number;
  name: string;
  profile_path: string | null;
}

interface CastProps {
  cast: CastMember[];
}

export function Cast({ cast }: CastProps) {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({
      left: -400,
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({
      left: 400,
      behavior: 'smooth',
    });
  };

  return (
    <Container>
      <div className={styles.castWrapper}>
        <div className={styles.castHeaderWrapper}>
          <p className={styles.p}>Cast</p>

          <div className={styles.arowsWrapper}>
            <button
              onClick={scrollLeft}
              className={styles.arrowLeft}
            >
              <svg className={styles.playIconLeft}>
    <use href="/symbol.svg#icon-play" />
  </svg>
            </button>

            <button
              onClick={scrollRight}
              className={styles.arrowRight}
            >
              <svg className={styles.playIconRight}>
    <use href="/symbol.svg#icon-play" />
  </svg>
            </button>
          </div>
        </div>

        <div
          ref={sliderRef}
          className={styles.castList}
        >
          {cast.map((actor) => (
            <div
              key={actor.id}
              className={styles.actor}
            >
              <img
                src={
                  actor.profile_path
                    ? `${import.meta.env.VITE_TMDB_IMAGE_URL}${actor.profile_path}`
                    : ''
                }
                alt={actor.name}
                className={styles.imgCast}
              />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}