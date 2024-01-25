import styles from './iconButton.module.scss';

export default function IconButton({ children }) {
  return <button className={styles.btn}>{children}</button>;
}
