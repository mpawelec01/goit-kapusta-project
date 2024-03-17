import Icon from "../../Icon/Icon";
import css from "./ReportsLink.module.css";

const ReportsLink = () => {
  return (
    <div className={css.wrapper}>
      <p className={css.text}>Reports</p>
      <Icon className={css.icon} iconName="chart" />
    </div>
  );
};

export default ReportsLink;
