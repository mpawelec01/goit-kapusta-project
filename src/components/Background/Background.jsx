import React from 'react';
import css from './Background.module.css'; 

const Background = () => {
  return (
    <div className={css.background}>
      <div className={css.background_image1}>
        <img src="../../img/background/cabbage-single.png" alt='background' className={css.background_multicabbage} />
      </div>
      <div className={css.background_image2}>
        {/* <img src='../../img/background/cabbage-single.png' alt='background 2' /> */}
      </div>
    </div>
  );
};

export default Background;