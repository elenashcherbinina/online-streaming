import Image from 'next/image';
import Link from 'next/link';
import styles from './new.module.scss';
import { movies } from '@/data/movies';

export default function New() {
  const newMovies = movies.filter((movie) => movie.isNew);

  return (
    <div className={styles.new}>
      <h2>Новинки</h2>
      <div className={styles.slider}>
        {newMovies.map((movie) => {
          return (
            <div key={movie.id}>
              <Link href={`/movie/${movie.id}`}>
                <Image
                  className={styles.card}
                  src={movie.coverSrc}
                  alt='cover'
                  width={398}
                  height={597}
                />
                <p className={styles.title}>{movie.title}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
