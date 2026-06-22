import styles from './Card.module.css';


interface DeviceCardProps {
  icon: string;
  title: string;
  description: string;
}

export function Card({  icon,
  title,
  description, }: DeviceCardProps) {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.iconTextWrapper}>
        <svg className={styles.icon}>
          <use href={`/symbol.svg#${icon}`} />
        </svg>
        <span className={styles.title}>{title}</span>
      </div>
      <p>{description}</p>
    </div>
  );
}
