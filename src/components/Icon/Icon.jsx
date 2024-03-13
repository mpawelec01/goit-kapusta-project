import sprite from "../../img/icons.svg";

// Example how to use icons:
//  <use xlinkHref={`${sprite}#icon-NAME_FROM_SPRITE`}></use>

const Icon = () => {
  return (
    <div>
      <svg width="90" height="31">
        <use xlinkHref={`${sprite}#icon-logo`}></use>
      </svg>
    </div>
  );
};

export default Icon;
