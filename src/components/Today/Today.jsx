import Icon from "../Icon/Icon";
import css from "./Today.module.css";
import { getDate } from "../../getDate";

const Today = () => {
  return (
    <div className={css.wrapper}>
      <Icon className={css.icon} iconName="calendar" />
      <span className={css.date}>{getDate()}</span>
    </div>
  );
};

export default Today;
