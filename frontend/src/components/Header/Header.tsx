import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.scss';

const navLinks: { to: string; label: string }[] = [
  { to: '/recent-events', label: 'Recent Events' },
  { to: '/pioneer-ladder-2026', label: 'Pioneer Ladder 2026' },
  { to: '/spring-league-2026', label: 'Spring League 2026' },
  { to: '/players', label: 'Players List' },
  { to: '/archive', label: 'Archive' },
];

export default function Header() {
  const location = useLocation();
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <nav className={styles.header__nav}>
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={
                `${location.pathname}/`.startsWith(`${link.to}/`)
                  ? `${styles.header__link} ${styles.active}`
                  : styles.header__link
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
