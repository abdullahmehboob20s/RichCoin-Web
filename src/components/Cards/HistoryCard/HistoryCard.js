import React from "react";
import styles from "./HistoryCard.module.css";
import richTag from "assets/images/richTag.png";
import useMediaQuery from "hooks/useMediaQuery";

function HistoryCard({
  title,
  msg = "...",
  weiPaid = "x Wei",
  isRichest = false,
}) {
  const isBellow1000px = useMediaQuery("(max-width : 1000px)");
  const isBellow450px = useMediaQuery("(max-width : 450px)");

  return (
    <div className={styles.card}>
      {isRichest ? <img src={richTag} className={styles.richTag} alt="" /> : ""}
      <div>
        <p
          className={`yellow ${
            isBellow1000px ? (isBellow450px ? "fs-10px" : "fs-12px") : "fs-16px"
          } ${isBellow450px ? "mb-5px" : ""} weight-4`}
        >
          {title}
        </p>
        <p
          className={`${
            isBellow1000px ? (isBellow450px ? "fs-10px" : "fs-14px") : "fs-16px"
          } ${isBellow450px ? "mb-5px" : ""}z white weight-4`}
        >
          Message:{msg}
        </p>
        <p
          className={`${
            isBellow1000px ? (isBellow450px ? "fs-10px" : "fs-14px") : "fs-16px"
          } ${isBellow450px ? "mb-5px" : ""}z white weight-4`}
        >
          Wei paid: {weiPaid}
        </p>
      </div>
    </div>
  );
}

export default HistoryCard;
