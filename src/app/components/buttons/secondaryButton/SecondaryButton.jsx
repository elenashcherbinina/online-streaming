import styles from './secondaryButton.module.scss';

export default function SecondaryButton({ name }) {
  return <button className={styles.btn}>{name}</button>;
}
