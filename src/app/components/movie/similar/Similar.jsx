import styles from './similar.module.scss';
import Link from 'next/link';
import Image from 'next/image';

export default function Similar({ movies, similarMoviesIds }) {
  const similarMovies = movies.filter((movie) =>
    similarMoviesIds.includes(movie.id),
  );

  return (
    <div className={styles.similar}>
      <h2>Похожее</h2>
      <div>
        {similarMovies.length > 0 &&
          similarMovies.map((movie) => {
            return (
              <Link key={movie.id} href={`/movie/${movie.id}`}>
                <Image
                  className={styles.card}
                  src={movie.coverSrc}
                  alt='cover'
                  width={255}
                  height={382}
                />
              </Link>
            );
          })}
      </div>
    </div>
  );
}
