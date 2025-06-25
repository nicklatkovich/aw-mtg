import styles from './NotFound.module.scss';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>404 - Page Not Found</h1>
      <p className={styles.text}>The page you are looking for does not exist.</p>
    </div>
  );
}
