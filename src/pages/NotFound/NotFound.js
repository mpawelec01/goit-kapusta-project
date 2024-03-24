import css from './NotFound.module.css';
import BackgroundTwo from '../../components/Background/BackgroundTwo';
// import cabbage from '../../img/background/cabbage-single@2x.png';

export default function NotFound() {
  return (
    <>
    <div>
      <BackgroundTwo/>
      <div className={css.container}>
        <p>PAGE NOT FOUND</p>
        {/* <picture className={css.cabbage}>
          <source
            srcSet={`${cabbage} 1x`}
            media="(min-width: 1280px)"
            width="377"
            height="auto"
          />
          <source
            srcSet={`${cabbage} 1x`}
            media="(min-width: 768px)"
            width="306"
            height="auto"
          />
          <source
            srcSet={`${cabbage} 1x`}
            media="(max-width: 767px)"
            width="183"
            height="auto"
          />

          <img src={cabbage} alt="2" />
        </picture> */}
      </div>
    </div>
    </>
  )
};