import { Container } from '../Container/Container'
import styles from './Header.module.css'
import { NavLink } from 'react-router-dom'

export function Header() {
    return (
        <header>
            <Container>
                <div className={styles.headerwrapper}>
                <div className={styles.logo}>
                    <NavLink to="/">
                <img src="/src/assets/images/logos/logo.svg" alt="Logo" className={styles.logoImage} />
                </NavLink>
                </div>
                <nav className={styles.nav}>
  <NavLink
    to="/"
    className={({ isActive }) =>
      isActive
        ? `${styles.link} ${styles.active}`
        : styles.link
    }
  >
    Home
  </NavLink>

  <NavLink
    to="/movies"
    className={({ isActive }) =>
      isActive
        ? `${styles.link} ${styles.active}`
        : styles.link
    }
  >
    Movies
  </NavLink>
</nav>
                <button type="button" className={styles.searchButton}>
  <svg className={styles.searchIcon}>
    <use href="/symbol.svg#icon-search" />
  </svg>
</button>
                </div>
                
            </Container>
        </header>
    )
}


