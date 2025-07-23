import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.scss';

const navLinks = [
  { to: '/recent-events', label: 'Recent Events' },
  { to: '/pioneer-ladder', label: 'Pioneer Ladder' },
  { to: '/standard-ladder', label: 'Standard Ladder [TBD]' },
  { to: '/summer-league-2025', label: 'Summer League 2025 [TBD???]' },
  { to: '/players', label: 'Players [WIP]' },
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
                location.pathname === link.to ? `${styles.header__link} ${styles.active}` : styles.header__link
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
