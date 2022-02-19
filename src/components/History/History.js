import HistoryCard from "components/Cards/HistoryCard/HistoryCard";
import useMediaQuery from "hooks/useMediaQuery";
import React from "react";
import { useSelector } from "react-redux";
import styles from "./History.module.css";

function History() {
  const state = useSelector((state) => state.userState);
  const isBellow1440px = useMediaQuery("(max-width : 1440px)");

  return (
    <div className={styles.wrapper}>
      <h1
        className={`text-center fs-48px font-pt-serif-caption weight-4  ${
          isBellow1440px ? "mb-25px" : "mb-50px"
        }`}
      >
        04:22:30:21
      </h1>

      <div
        className={`${styles.cards} ${state.isAuthenticated ? "mb-20px" : ""}`}
      >
        <HistoryCard
          title="0x00000000000...00000000000 is now the Richest!"
          isRichest={true}
        />
        <HistoryCard title="2nd: 0x00000000000...00000000000" />
        <HistoryCard title="3rd: 0x00000000000...00000000000" />
        <HistoryCard title="4th: 0x00000000000...00000000000" />
      </div>

      {state.isAuthenticated ? (
        <p className="fs-16px white weight-4 text-center">x RichCoin owner</p>
      ) : (
        ""
      )}
    </div>
  );
}

export default History;
