import { categories } from '../../../../../../constants/CategoriesSection/categories';
import { CategoryCard } from '../Card/CategoryCard';

import styles from '../List/CategoriesList.module.css';

export function CategoriesList() {
  return (
    <ul className={styles.categoryList}>
      {categories.map((category) => (
        <li
          key={category.id}
          className={styles.categoryItem}
        >
          <CategoryCard title={category.title}
  images={category.images} />
        </li>
      ))}
    </ul>
  );
}