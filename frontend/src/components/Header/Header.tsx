import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.scss';

const navLinks: { to: string; label: string }[] = [
  { to: '/recent-events', label: 'Recent Events' },
  { to: '/pioneer-ladder-2026', label: 'Pioneer Ladder' },
  { to: '/leagues', label: 'Leagues' },
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
                (link.to === '/leagues' && location.pathname.startsWith('/leagues')) || location.pathname === link.to
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
