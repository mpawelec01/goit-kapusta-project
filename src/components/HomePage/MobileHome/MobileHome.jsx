import css from "./MobileHome.module.css";
import Icon from "../../Icon/Icon";

const MobileHome = () => {
  return (
    <div className={css.wrapper}>
      <Icon className={css.icon} iconName="arrow_left" />
      <a className={css.text} href="/">
        TO TRANSACTION
      </a>
    </div>
  );
};

export default MobileHome;
