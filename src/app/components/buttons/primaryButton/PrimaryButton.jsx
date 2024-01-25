import styles from './primaryButton.module.scss';

export default function PrimaryButton({ name }) {
  return <button className={styles.btn}>{name}</button>;
}
