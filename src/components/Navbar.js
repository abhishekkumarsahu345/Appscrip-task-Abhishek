import styles from '../styles/Home.module.css';

export default function Navbar() {
  return (
    <header>
      {/* Black announcement bar */}
      <div className={styles.announcement}>
        <span>⊞ Lorem ipsum dolor</span>
        <span>⊞ Lorem ipsum dolor</span>
        <span>⊞ Lorem ipsum dolor</span>
      </div>

      {/* Main navbar */}
      <nav className={styles.navbar}>
        <div className={styles.navLeft}>
          <span className={styles.logoIcon}>⊞</span>
        </div>
        <div className={styles.navCenter}>
          <h2 className={styles.logo}>LOGO</h2>
        </div>
        <div className={styles.navRight}>
          <span className={styles.navIcon}>🔍</span>
          <span className={styles.navIcon}>♡</span>
          <span className={styles.navIcon}>🛍</span>
          <span className={styles.navIcon}>👤</span>
          <span className={styles.navIcon}>ENG ▾</span>
        </div>
      </nav>

      {/* Navigation menu */}
      <nav className={styles.navMenu}>
        <span>SHOP</span>
        <span>SKILLS</span>
        <span>STORIES</span>
        <span>ABOUT</span>
        <span>CONTACT US</span>
      </nav>
    </header>
  );
}