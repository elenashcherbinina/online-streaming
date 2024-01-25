import blueBeetleCover from '../app/assets/img/blue-beetle.png';
import homeGameCover from '../app/assets/img/home-game.png';
import salutCover from '../app/assets/img/salut-7.png';
import catchMeCover from '../app/assets/img/catch-me.png';
import myBeautifulMisfortuneCover from '../app/assets/img/my-beautiful-misfortune.png';
import redNoticeCover from '../app/assets/img/red-notice.png';
import witcherCover from '../app/assets/img/witcher.png';
import enkangoCover from '../app/assets/img/enkango.png';
import fiveNightsCover from '../app/assets/img/five-nights.png';
import friendsOushenCover from '../app/assets/img/friendsOushen.png';
import kingstounCover from '../app/assets/img/kingstoun.png';
import wednesdayCover from '../app/assets/img/Wednesday.png';
import wednesdayS1E1 from '../app/assets/img/Wednesday-1-1.png';
import wednesdayS1E2 from '../app/assets/img/Wednesday-1-2.png';
import wednesdayS1E3 from '../app/assets/img/Wednesday-1-3.png';

export const movies = [
  {
    id: '1',
    title: 'Синий жук',
    coverSrc: blueBeetleCover,
    info: {},
    raiting: '10',
    isTop: false,
    isNew: true,
    hasSeasons: false,
    similarMovies: [],
  },
  {
    id: '2',
    title: 'Домашняя игра',
    coverSrc: homeGameCover,
    info: {},
    raiting: '6.9',
    isTop: false,
    isNew: true,
    hasSeasons: false,
    similarMovies: [],
  },
  {
    id: '3',
    title: 'Салют 7',
    coverSrc: salutCover,
    info: {},
    raiting: '5.8',
    isTop: false,
    isNew: true,
    hasSeasons: false,
    similarMovies: [],
  },
  {
    id: '4',
    title: 'Поймай меня, если сможешь',
    coverSrc: catchMeCover,
    info: {},
    raiting: '7',
    isTop: false,
    isNew: true,
    hasSeasons: false,
    similarMovies: [],
  },
  {
    id: '5',
    title: 'Мое прекрасное несчастье',
    coverSrc: myBeautifulMisfortuneCover,
    info: {},
    raiting: '7',
    isTop: '1',
    isNew: false,
    hasSeasons: false,
    similarMovies: [],
  },
  {
    id: '6',
    title: 'Красное уведомление',
    coverSrc: redNoticeCover,
    info: {},
    raiting: '7',
    isTop: '2',
    isNew: false,
    hasSeasons: false,
    similarMovies: [],
  },
  {
    id: '7',
    title: 'Ведьмак',
    coverSrc: witcherCover,
    info: {},
    raiting: '7',
    isTop: '3',
    isNew: false,
    hasSeasons: false,
    similarMovies: [],
  },
  {
    id: '8',
    title: 'Уэнздей',
    coverSrc: wednesdayCover,
    info: {
      subTitle:
        'Уэнсдэй предстоит освоить экстрасенсорные cпособности, чтобы остановить местного серийного убийцу и раскрыть тайну родителей.',
      description:
        'Детективная история, наполненная сверхъестественными силами. Главная героиня сериала — Уэнздей Аддамс, одна из членов семейки Аддамс и единственная дочь Гомеса и Мортиши Аддамсов, которая становится студенткой академии «Невермор». Она пытается овладеть своими проявившимися экстрасенсорными способностями, помешать чудовищным убийствам монстра, что терроризирует местный городок Джерико, а также разгадать тайну, в которую были втянуты её родители 32 года назад, — и всё это на фоне её новых и очень запутанных отношений в академии.',
      premiere: '31 откября 2022',
      originalTitle: 'Wednesday',
      country: 'США',
      genres: 'Фэнтези, Комедия, Криминал, Детектив',
      languages: 'Rus, Eng',
      quality: 'Full HD',
    },
    raiting: '10',
    isTop: true,
    isNew: false,
    hasSeasons: {
      season1: [
        {
          episode: '1',
          id: '1.1',
          cover: wednesdayS1E1,
          duration: '43 минуты',
        },
        {
          episode: '2',
          id: '1.2',
          cover: wednesdayS1E2,
          duration: '41 минуту',
        },

        {
          episode: '3',
          id: '1.3',
          cover: wednesdayS1E3,
          duration: '38 минут',
        },
      ],
    },
    similarMoviesIds: ['9', '10', '6', '1', '11', '12'],
  },
  {
    id: '9',
    title: '8 подруг Оушена',
    coverSrc: friendsOushenCover,
    info: {},
    raiting: '9.1',
    isTop: false,
    isNew: false,
    hasSeasons: false,
    similarMovies: [],
  },
  {
    id: '10',
    title: 'Энканго',
    coverSrc: enkangoCover,
    info: {},
    raiting: '9.1',
    isTop: false,
    isNew: false,
    hasSeasons: false,
    similarMovies: [],
  },
  {
    id: '11',
    title: 'Мэр Кингстауна',
    coverSrc: kingstounCover,
    info: {},
    raiting: '9.1',
    isTop: false,
    isNew: false,
    hasSeasons: false,
    similarMovies: [],
  },
  {
    id: '12',
    title: 'Пять ночей с Фредди',
    coverSrc: fiveNightsCover,
    info: {},
    raiting: '9.1',
    isTop: false,
    isNew: false,
    hasSeasons: false,
    similarMovies: [],
  },
];
