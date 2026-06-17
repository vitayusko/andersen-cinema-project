import { Container } from '../../Container/Container';
import styles from './Categories.module.css';
import { CategoriesList } from './CategoriesComponents/List/CategoriesList';

export function Categories() {
  return (
    <Container>
    <section className={styles.categories}>
      <div className={styles.titleWrapper}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>Explore our wide variety of categories</h2>
      <p>Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new</p>
      </div>
      {/* <div className={styles.scrollWrapper}>
        <button><svg className={styles.playIconLeft}>
    <use href="/symbol.svg#icon-arrow" />
  </svg></button>
        <button><svg className={styles.playIconRight}>
    <use href="/symbol.svg#icon-arrow" />
  </svg></button>
        </div> */}
        </div>
        <div className={styles.categoriesList}>
          <CategoriesList />
        </div>
    </section>
  </Container>
);}
