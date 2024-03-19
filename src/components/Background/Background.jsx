import React from 'react';
import css from './Background.module.css'; // Import CSS file for styling

const Background = () => {
  return (
    <div className={css.background}>
      {/* <img src="../../img/background/Rectangle.png" alt='background' className={css.background_image} /> */}
      <img src="../../img/background/cabbage-single.png" alt='background' className={css.background_image2} />
      <img src='../../img/background/cabbage-single.png' alt='background' className={css.background_image} />
      {/* Add more image elements as needed */}
    </div>
  );
};

export default Background;