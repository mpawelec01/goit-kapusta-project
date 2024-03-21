import React from "react";
import styles from "./Report.module.css";
import { ReportPage } from "../../components/Report/Report";
import { ToggledReport } from "../../components/Report/ToggledReport";
export const Report = () => {
  return (
    <div className={styles.container}>
      <div className={styles.bg} />
      <ReportPage />
      <ToggledReport className={styles.switchedBackground} />
    </div>
  );
};
