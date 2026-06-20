import { Outlet } from "react-router-dom";
import styles from "./MainLayout.module.css";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Container } from "../Container/Container";


export function MainLayout() {
    return (
        <div className={styles.layout}>
           <Container>
        <Header />
      </Container>
            <main className={styles.main}>
                <Outlet/>
            </main>
              <Container>
        <Footer />
      </Container>
        </div>
    )
}