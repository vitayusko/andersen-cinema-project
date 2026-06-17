import type { Category } from '../../../../../constants/CategoriesSection/categories';

import styles from './CategoryCard.module.css';

type CategoryCardProps = {
  category: Category;
};

export const CategoryCard = ({
  category,
}: CategoryCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.imagesWrapper}>
        {category.images.map((images) => (
          <img
            key={images}
            src={images}
            alt={category.title}
            className={styles.image}
          />
        ))}
      </div>

      <div className={styles.footer}>
        <span className={styles.title}> 
          {category.title}
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
