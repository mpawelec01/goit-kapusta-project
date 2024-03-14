import Icon from "../Icon/Icon";
import css from "./Today.module.css";

function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  return `${date}.${month}.${year}`;
}

const Today = () => {
  return (
    <div className={css.wrapper}>
      <Icon className={css.icon} iconName="calendar" />
      <span className={css.date}>{getDate()}</span>
    </div>
  );
};

export default Today;
