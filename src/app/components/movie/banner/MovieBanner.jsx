import Image from 'next/image';
import PrimaryButton from '../../buttons/primaryButton/PrimaryButton';
import SecondaryButton from '../../buttons/secondaryButton/SecondaryButton';
import IconButton from '../../buttons/iconButton/IconButton';
import saveIcon from '../../../assets/icons/save.svg';
import favoriteIcon from '../../../assets/icons/favoriteFBtn.svg';
import styles from './movieBanner.module.scss';

export default function MovieBanner({ movie }) {
  return (
    <div>
      <Image className={styles.banner} src={movie.coverSrc} alt='film-cover' />
      <div className={styles.content}>
        <h2>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='210'
            height='129'
            viewBox='0 0 210 129'
            fill='none'
          >
            <path
              d='M0 0.773102H21.2219C19.7208 2.03964 19.4922 3.84107 19.5656 4.58346L30.4596 70.5081H34.5311L44.2146 4.58346C44.2146 2.44537 42.6743 1.24553 41.9038 0.773102H64.242C62.9861 1.85522 47.1966 34.3457 45.6558 58.6945C45.5035 61.1023 46.2221 63.4604 47.5158 65.497L43.1142 71.2876C37.4801 77.1674 35.7048 90.8126 35.5214 96.9003C32.8687 114.113 26.159 123.791 22.0883 127.501C21.2079 128.304 20.0299 128.638 18.8388 128.638H11.0924V105.029C12.8442 108.073 13.9011 109.854 14.5483 110.896C15.2125 111.965 16.3887 112.379 17.6472 112.379C19.5518 112.379 21.3746 111.513 22.4376 109.933C27.0878 103.02 28.1373 97.0789 28.0387 94.7844V88.437C27.4224 78.281 20.2258 69.6544 16.7045 66.6105C18.4174 64.3716 19.3455 61.631 19.3455 58.8119V54.0353C19.3455 52.33 19.1159 50.6325 18.6629 48.9884L7.90126 9.92871C5.17226 4.76164 1.49667 1.67202 0 0.773102Z'
              fill='white'
            />
            <path
              d='M62.4338 93.4552V112.379H81.6286C90.8782 109.406 98.2377 101.197 100.011 81.2248C100.601 69.0687 102.719 66.0481 104.683 64.8833C103.365 63.5755 102.082 60.2681 101.151 57.2674C100.297 54.5161 100.011 51.6317 100.011 48.751V39.5452C100.011 37.4859 99.8754 35.4179 99.4197 33.4097C95.8478 17.6695 86.5958 14.2931 82.1757 14.6516H62.8906L61.2254 35.9618C63.8213 26.7476 69.0284 21.2893 71.9966 19.1886C72.5608 18.7893 73.2457 18.6201 73.937 18.6201H77.6793C78.1659 18.6201 78.6556 18.7045 79.0999 18.9032C92.0556 24.6953 90.3945 49.375 91.4154 61.1317C80.9834 61.56 73.9707 58.7843 71.7683 57.343V68.8738C76.3893 65.0943 86.7918 64.79 91.4154 65.1103C91.4154 87.3086 88.7657 99.1987 80.1217 106.669C79.4467 107.252 78.5727 107.543 77.6808 107.543H73.1986C72.9881 107.543 72.7775 107.57 72.5671 107.562C70.5615 107.491 68.5299 103.616 62.4338 93.4552Z'
              fill='white'
            />
            <path
              d='M109.846 16.4627H130.712C125.837 19.5052 125.794 21.8304 125.837 23.4356V61.1317H148.263V23.4356C148.263 19.5832 146.154 18.2456 144.038 16.4627H163.669C159.665 19.0413 157.97 22.1857 157.624 23.4356V59.221C158.456 61.9576 160.484 63.6504 161.394 64.1547C158.378 65.3124 157.624 68.8033 157.624 70.404V103.756C158.037 107.364 158.831 107.868 164.982 111.772L165.099 111.847H142.803C147.171 109.163 148.523 105.334 148.653 103.756L148.263 64.8833H125.837V103.427C125.837 107.637 129.733 110.684 131.687 111.847H109.391C114.8 108.403 116.498 104.799 116.672 103.427V70.404C115.632 66.4571 113.292 64.5932 112.251 64.1547C115.788 62.6812 116.672 60.2516 116.672 59.221V23.4356C115.476 20.4359 111.623 17.5371 109.846 16.4627Z'
              fill='white'
            />
            <path
              d='M170.773 34.6541L172.638 15.924C184.853 11.8302 203.076 9.91243 205.973 34.6541C205.973 36.4029 207.315 37.9 207.986 38.43C206.376 38.6684 205.973 39.9536 205.973 40.5663C201.81 53.7221 193.307 59.7582 189.576 61.1317C205.089 68.5495 206.169 79.9146 206.66 87.4662C207.446 89.0958 209.099 89.3759 209.772 89.6563C209.64 89.7498 206.979 92.4442 206.66 93.4281C202.615 105.908 195.091 110.907 191.834 111.847H170.773V93.1797C172.607 101.124 176.367 105.232 178.917 106.886C179.841 107.485 180.957 107.637 182.059 107.637H186.683C188.418 107.637 190.18 107.249 191.484 106.106C195.883 102.25 196.733 96.2616 196.547 93.4281V79.4303C196.547 78.7612 196.493 78.0898 196.303 77.4483C193.985 69.6269 183.489 63.7509 178.333 61.7309V59.7933C185.751 59.1377 190.963 53.9983 193.544 50.2011C194.482 48.8203 194.829 47.1509 194.829 45.4813V29.1557C194.829 27.8309 194.607 26.5069 194.074 25.294C186.36 7.74311 176.381 27.3915 170.773 34.6541Z'
              fill='white'
            />
          </svg>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='159'
            height='132'
            viewBox='0 0 159 132'
            fill='none'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M7.8267 19.7912C12.199 22.8731 13.2277 27.0678 13.1952 28.7799V62.1659C12.4138 65.4848 8.86706 66.763 7.8267 67.0059C11.4182 68.1912 12.9021 71.5166 13.1952 73.0312V89.1316C12.2576 100.748 9.22554 108.92 7.8267 111.554H0.798584V132C5.83715 124.125 9.45256 115.669 11.73 115.307H44.7207C51.6718 116.591 52.5718 129.396 54.1884 132V111.554H46.868V73.0312C47.9612 69.0012 50.3818 67.3352 51.4555 67.0059C47.7855 64.9514 46.868 61.7379 46.868 60.388V28.7799C46.868 24.0387 49.7235 21.932 53.31 19.7912H44.7207C41.6754 19.2382 39.2222 15.8733 38.3763 14.2599C35.9557 18.6849 33.3984 19.7912 32.4224 19.7912H7.8267ZM39.5476 22.8538H20.6121V83.0079C20.6121 89.2636 19.5189 103.731 15.1462 111.554H39.5476V22.8538Z'
              fill='white'
            />
            <path
              d='M60.0141 19.7912C64.2555 23.4579 65.402 29.8125 65.4451 32.5315V60.388C64.2727 64.868 61.2784 66.6666 59.9279 67.0059C63.583 68.9832 65.129 71.8466 65.4451 73.0312V107.601C64.3556 111.404 61.313 114.323 59.9279 115.307H68.8097C72.1345 116.31 74.2695 118.21 74.9214 119.034C77.2031 116.052 79.4577 115.307 80.2998 115.307H97.3312V99.9019C93.4197 106.829 81.4135 110.556 75.8993 111.554V67.9873H79.0774C84.6188 68.3831 88.3401 70.5712 89.5082 71.6158V60.388C86.2486 63.5646 81.1962 64.3587 79.0774 64.3587H75.8993V23.6323H77.8551H79.8108C86.33 26.5351 90.0786 29.5303 91.138 31.9493L93.3382 19.002H79.0774C76.8609 19.002 75.6548 16.418 75.3289 15.1261C73.6339 18.2268 70.7111 19.5281 69.4616 19.7912H60.0141Z'
              fill='white'
            />
            <path
              d='M102.734 19.002C106.162 21.347 108.122 27.0552 108.673 29.6162V62.0828C107.791 65.6021 105.611 66.8312 104.632 67.0059C107.081 68.619 108.346 73.1116 108.673 75.1562V122.617L144.061 53.1607V113.261C142.788 115.888 139.857 118.204 138.551 119.034H159C154.837 116.398 153.306 114.087 153.061 113.261V78.9977C153.698 74.5366 155.939 72.2176 156.98 71.6158C154.188 70.1358 153.204 64.9743 153.061 62.5785V10.9665L117.979 87.0526V25.4652C117.979 22.2929 120.469 19.8346 121.714 19.002H102.734Z'
              fill='white'
            />
            <path
              d='M116.142 0H125.265V7.31092C125.265 13.7374 134.939 13.0286 134.755 7.55876V0H144.061V2.53378C144.061 4.17283 143.744 5.81593 143.003 7.27767C135.396 22.2733 123.324 21.1553 116.983 7.05458C116.388 5.73067 116.142 4.27456 116.142 2.82294V0Z'
              fill='white'
            />
          </svg>
        </h2>
        <div className={styles.badges}>
          <span className={styles.raiting}>{movie.raiting}</span>
          <span>2022 - ...</span>
          <span>1 сезон</span>
          <span>США</span>
          <span>Ужасы</span>
          <span>0+</span>
        </div>
        <p className={styles.subtitle}>{movie.info.subTitle}</p>
        <div className={styles.buttons}>
          <PrimaryButton name='Смотреть' />
          <SecondaryButton name='Трейлер' />
          <IconButton>
            <Image src={saveIcon} alt='save icon' />
          </IconButton>
          <IconButton>
            <Image src={favoriteIcon} alt='favorite icon' />
          </IconButton>
        </div>
      </div>
    </div>
  );
}
