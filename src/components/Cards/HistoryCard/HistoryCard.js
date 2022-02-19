import React from "react";
import styles from "./HistoryCard.module.css";
import richTag from "assets/images/richTag.png";

function HistoryCard({
  title,
  msg = "...",
  weiPaid = "x Wei",
  isRichest = false,
}) {
  return (
    <div className={styles.card}>
      {isRichest ? <img src={richTag} className={styles.richTag} alt="" /> : ""}
      <div>
        <p className="yellow fs-16px weight-4">{title}</p>
        <p className="fs-16px white weight-4">Message:{msg}</p>
        <p className="fs-16px white weight-4">Wei paid: {weiPaid}</p>
      </div>
    </div>
  );
}

export default HistoryCard;
