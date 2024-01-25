import Image from 'next/image';
import Link from 'next/link';
import styles from './top.module.scss';
import { movies } from '@/data/movies';

export default function Top() {
  const topMovies = movies.filter((movie) => movie.isTop);

  return (
    <div className={styles.top}>
      <h2>
        <span>Топ-10</span>просмотров за неделю
      </h2>
      <div className={styles.slider}>
        {topMovies.map((movie) => {
          return (
            <div key={movie.id} className={styles.card}>
              <span>{movie.isTop}</span>
              <Link href={`/movie/${movie.id}`}>
                <Image
                  src={movie.coverSrc}
                  alt='cover'
                  width={398}
                  height={597}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
