import styles from './info.module.scss';

export default function Info({ info }) {
  return (
    <div className={styles.info}>
      <h2>Информация</h2>
      <div className={styles.row}>
        <div className={styles.col}>
          <h3>Премьера в мире</h3>
          <p>{info.premiere}</p>
          <h3>Оригинальное название</h3>
          <p>{info.originalTitle}</p>
        </div>

        <div className={styles.col}>
          <h3>Страна</h3>
          <p>{info.country}</p>
          <h3>Жанры</h3>
          <p>{info.genres}</p>
        </div>

        <div className={styles.col}>
          <h3>Язык аудиодорожки</h3>
          <p>{info.languages}</p>
          <h3>Качество</h3>
          <p>{info.quality}</p>
        </div>
      </div>
    </div>
  );
}
