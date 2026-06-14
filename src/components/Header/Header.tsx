import { Container } from '../Container/Container'
import styles from './Header.module.css'
import { NavLink } from 'react-router-dom'

export function Header() {
    return (
        <header>
            <Container>
                <div>
                    <NavLink to="/">
                <img src="./logo.png" alt="Logo" />
                </NavLink>
                </div>
                <nav className={styles.nav}>
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/movies">Movies</NavLink>
                </nav>
                <button><img src="" alt="search" /></button>
            </Container>
        </header>
    )
}


