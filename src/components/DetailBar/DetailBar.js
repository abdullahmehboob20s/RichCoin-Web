import React from "react";
import styles from "./DetailBar.module.css";

const DetailBar = ({ title, text }) => {
  return (
    <div className={styles.detailBar}>
      <p className="fs-16px white mb-5px">{title}</p>
      <div className={`${styles.detailBox} fs-14px black weight-4`}>{text}</div>
    </div>
  );
};

export default DetailBar;
