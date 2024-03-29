import React from 'react';
import css from './BackgroundTwo.module.css'; 

const BackgroundTwo = () => {
  return (
    <div className={css.bg}>
      <div className={css.background1}>
        <a src="../../img/background/cabbage-single.png" alt='background' className={css.backgroundMulticabbage}></a> 
      </div>
      <div className={css.background2}>
        {/* <img src='../../img/background/cabbage-single.png' alt='background 2' /> */}
      </div>
    </div>
  );
};

export default BackgroundTwo;