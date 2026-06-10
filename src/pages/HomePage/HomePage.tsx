import { Container } from "../../components/Container/Container";
import styles from "./HomePage.module.css"; 


export function HomePage() {
    return (
        
        <Container>
            <section className={styles.hero}>
                <h1 className={styles.title}>Welcome to the Movie App</h1>
                </section>
                   <section className={styles.categories}>
                     <div className={styles.sectionHeader}>
            <h2>Explore our wide variety of categories</h2>

            <p>
              Whether you're looking for a comedy, drama or documentary.
            </p>
          </div>
                   </section>

            
        </Container>
    );

}
