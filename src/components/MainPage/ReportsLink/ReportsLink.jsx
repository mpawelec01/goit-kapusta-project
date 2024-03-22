import Icon from "../../Icon/Icon";
import css from "./ReportsLink.module.css";

import { useNavigate } from "react-router-dom";
const ReportsLink = () => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate("/report")} className={css.wrapper}>
      <p className={css.text}>Reports</p>
      <Icon className={css.icon} iconName="chart" />
    </div>
  );
};

export default ReportsLink;
