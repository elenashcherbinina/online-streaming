import styles from './seasons.module.scss';
import Image from 'next/image';

export default function Seasons({ seasons }) {
  const episodes = seasons.season1;
  console.log(episodes);

  return (
    <div className={styles.seasons}>
      <div className={styles.title}>
        <p>Сезоны</p>
        <div className={styles.pages}>
          <p className={styles.active}>1</p>
          <p>2</p>
          <p>3</p>
        </div>
      </div>
      <div className={styles.episodes}>
        {episodes.map((episode) => {
          return (
            <div key={episode.id} className={styles.card}>
              <Image src={episode.cover} alt='cover' />
              <p className={styles.episode}>{episode.episode} серия</p>
              <p className={styles.duration}>{episode.duration}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
