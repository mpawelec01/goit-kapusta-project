import sprite from "../../img/icons.svg";

// Example how to use icons:
//  <use xlinkHref={`${sprite}#icon-NAME_FROM_SPRITE`}></use>

const Icon = ({ id, iconName, className }) => {
  return (
    <svg id={id} className={className}>
      <use id={id} xlinkHref={`${sprite}#icon-${iconName}`}></use>
    </svg>
  );
};

export default Icon;
