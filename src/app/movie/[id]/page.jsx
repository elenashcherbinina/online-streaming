import MovieBanner from '@/app/components/movie/banner/MovieBanner';
import Seasons from '@/app/components/movie/seasons/Seasons';
import Descripion from '@/app/components/movie/description/Description';
import Similar from '@/app/components/movie/similar/Similar';
import Info from '@/app/components/movie/info/Info';
import styles from './MoviePage.module.scss';
import { movies } from '@/data/movies';

export default function MoviePage() {
  const movie = movies.find((movie) => movie.id === '8');

  return (
    <main className={styles.moviePage}>
      <MovieBanner movie={movie} />
      <Seasons seasons={movie.hasSeasons} />
      <Descripion description={movie.info.description} />
      <Similar movies={movies} similarMoviesIds={movie.similarMoviesIds} />
      <Info info={movie.info} />
    </main>
  );
}
