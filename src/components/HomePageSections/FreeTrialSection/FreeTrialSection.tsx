import { Container } from '../../Container/Container';
import styles from './FreeTrialSection.module.css';

export function FreeTrialSection() {
  return (
    <Container>
      <section className={styles.freeTrialSection}>
        <div className={styles.freeTrialContent}>
            <div className={styles.freeTrialContentText}>
          <h2 className={styles.freeTrialHeading}>Start Your Free Trial</h2>
          <p className={styles.freeTrialDescription}>This is a clear and concise call to action that encourages users to sign up for a free trial of StreamVibe.</p>
         </div> <button className={styles.freeTrialButton}>Start Free Trial</button>
        </div>
      </section>
    </Container>
  );
}
