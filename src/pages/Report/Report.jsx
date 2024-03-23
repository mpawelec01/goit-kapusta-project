import React from "react";
import styles from "./Report.module.css";
import { ReportPage } from "../../components/Report/Report";
import { ToggledReport } from "../../components/Report/ToggledReport";
export const Report = () => {
  return (
    <div className={styles.container}>
      <div className={styles.bg} />
      <ReportPage />
      <ToggledReport />
      <div className={styles.position_cabbages}>
        <div className={styles.cabbages} />
        <div className={styles.moreCabbages}/>
      </div>
    </div>
  );
};