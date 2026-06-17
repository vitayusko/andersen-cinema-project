import styles from './Card.module.css';
import type { Category } from '../../../../../constants/DeviceSection/categories';


type DeviceCardProps = {
    category: Category
}

export function Card({ category }: DeviceCardProps) {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.iconTextWrapper}>
        <svg className={styles.icon}>
          <use href={`/symbol.svg#${category.icon}`} />
        </svg>
        <span className={styles.title}>{category.title}</span>
      </div>
      <p>{category.description}</p>
    </div>
  );
}
