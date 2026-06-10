import { Outlet } from "react-router-dom";
import styles from "./MainLayout.module.css";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";   
export function MainLayout() {
    return (
        <div className={styles.layout}>
            <Header/>
            <main className={styles.main}>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}