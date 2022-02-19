import DetailBar from "components/DetailBar/DetailBar";
import React from "react";
import styles from "./Info.module.css";

function Info() {
  return (
    <>
      <h1 className="text-center fs-40px font-pt-serif-caption weight-4 mb-50px">
        Info
      </h1>
      <div className={`${styles.details} mb-25px`}>
        <DetailBar
          title="Address:"
          text="0x0000000000000000000000000000000000000000"
        />
        <DetailBar title="Rank:" text="0" />
        <DetailBar title="Order:" text="0" />
        <DetailBar title="Message:" text="..." />
        <DetailBar title="Wei paid:" text="x Wei" />
      </div>
      <button className={`${styles.btn} fs-24px weight-4 white text-center`}>
        Add RichCoin to Wallet
      </button>
    </>
  );
}

export default Info;
