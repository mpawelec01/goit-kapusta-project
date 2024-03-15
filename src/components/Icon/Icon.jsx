import sprite from "../../img/icons.svg";

// Example how to use icons:
//  <use xlinkHref={`${sprite}#icon-NAME_FROM_SPRITE`}></use>

const Icon = ({ iconName, className }) => {
  return (
    <svg className={className}>
      <use xlinkHref={`${sprite}#icon-${iconName}`}></use>
    </svg>
  );
};

export default Icon;
