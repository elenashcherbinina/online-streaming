import Image from 'next/image';
import bannerImg from '../../../assets/img/indiana-jones-banner.png';
import bannerTitle from '../../../assets/img/indiana-jones-title.png';
import PrimaryButton from '../../buttons/primaryButton/PrimaryButton';
import SecondaryButton from '../../buttons/secondaryButton/SecondaryButton';
import styles from './banner.module.scss';

export default function Banner() {
  return (
    <div className={styles.banner}>
      <Image
        className={styles.img}
        src={bannerImg}
        alt='indiana-jones-banner'
      />
      <div className={styles.content}>
        <Image
          className={styles.title}
          src={bannerTitle}
          alt='indiana-jones-title'
        />
        <p className={styles.text}>
          Неувядающий авантюрист и пытливый археолог-исследователь по‑прежнему в
          седле.
        </p>
        <div className={styles.buttons}>
          <PrimaryButton name='Смотреть' />
          <SecondaryButton name='О фильме' />
        </div>
      </div>
    </div>
  );
}
