import styles from './page.module.scss';
import Banner from './components/home/banner/Banner';
import New from './components/home/new/New';
import Top from './components/home/top/Top';

export default async function Home() {
  return (
    <main>
      <Banner />
      <New />
      <Top />
    </main>
  );
}
