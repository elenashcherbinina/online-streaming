import Link from 'next/link';
import Image from 'next/image';
import logo from '../../assets/icons/Logo.svg';
import search from '../../assets/icons/search.svg';
import home from '../../assets/icons/home.svg';
import movie from '../../assets/icons/movie.svg';
import tv from '../../assets/icons/tv.svg';
import favorite from '../../assets/icons/favorite.svg';
import login from '../../assets/icons/login.svg';
import arrow from '../../assets/icons/up.svg';
import styles from '../sidebar/sidebar.module.scss';

export default function Sidebar() {
  return (
    <nav className={styles.sidebar}>
      <Link className={styles.link} href='/'>
        <Image src={logo} alt='logo' width={144} height={50} />
      </Link>
      <div className={styles.links}>
        <Link className={styles.link} href='/'>
          <Image src={search} alt='search-icon' width={44} height={44} />
        </Link>
        <Link className={styles.link} href='/'>
          <Image src={home} alt='home-icon' width={44} height={44} />
        </Link>
        <Link className={styles.link} href='/'>
          <Image src={movie} alt='movie-icon' width={44} height={44} />
        </Link>
        <Link className={styles.link} href='/'>
          <Image src={tv} alt='tv-icon' width={44} height={44} />
        </Link>
        <Link className={styles.link} href='/'>
          <Image src={favorite} alt='favorite-icon' width={44} height={44} />
        </Link>
        <Link className={styles.link} href='/'>
          <Image src={login} alt='login-icon' width={44} height={44} />
        </Link>
      </div>
      <Link className={styles.link} href='/'>
        <Image src={arrow} alt='arrow up' width={44} height={44} />
      </Link>
    </nav>
  );
}
