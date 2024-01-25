import styles from './description.module.scss';
import importantIcon from '../../../assets/icons/important.svg';
import Image from 'next/image';

export default function Descripion({ description }) {
  return (
    <div className={styles.description}>
      <h2>Описание</h2>
      <p className={styles.text}>{description}</p>
      <div className={styles.important}>
        <Image
          src={importantIcon}
          alt='important icon'
          width={47}
          height={48}
        />
        <p>
          Контент может содержать сцены курения и употребления спиртных
          напитков. Курение и чрезмерное употребление алкоголя вредит вашему
          здоровью.
        </p>
      </div>
    </div>
  );
}
