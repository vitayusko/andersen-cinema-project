
import styles from './CategoryCard.module.css';

interface CategoryCardProps {
  title: string;
  images: string[];
}

export const CategoryCard = ({
   title,
  images,
}: CategoryCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.imagesWrapper}>
        {images.map((image) => (
          <img
            key={image}
            src={image}
            alt={title}
            className={styles.image}
          />
        ))}
      </div>

      <div className={styles.footer}>
        <span className={styles.title}> 
          {title}
        </span>

        <button
          type="button"
          className={styles.button}
        >
          <svg className={styles.icon}>
            <use href="/symbol.svg#icon-arrow" />
          </svg>
        </button>
      </div>
    </div>
  );
};
