import Checkbox from "components/Checkbox/Checkbox";
import React from "react";
import { useSelector } from "react-redux";
import styles from "./Buy.module.css";

function Buy() {
  const state = useSelector((state) => state.userState);

  return (
    <div className={styles.wrapper}>
      <h1 className="text-center fs-40px font-pt-serif-caption weight-4 mb-70px">
        Buy
      </h1>
      {state.isAuthenticated ? (
        <div className={styles.content}>
          <button
            className={`${styles.btn} fs-24px text-center weight-4 pointer mb-35px exclusion-hover-effect`}
          >
            Approve DEX
          </button>

          <div className="mb-20px">
            <p className="fs-16px white weight-4 mb-10px">Message:</p>
            <textarea
              className={`${styles.textarea} black fs-16px `}
            ></textarea>
          </div>

          <div className={`${styles.checking} mb-50px`}>
            <label htmlFor="hash" className="fs-16px white weight-4 pointer">
              Hash the text with SHA256:
            </label>
            <Checkbox label="hash" />
          </div>

          <button
            className={`${styles.buyButton} mb-10px pointer exclusion-hover-effect fs-24px white weight-4`}
          >
            Buy the RichCoin
          </button>
          {state.isAuthenticated ? (
            <p className="fs-16px white wieght-4">Price: x Wei</p>
          ) : (
            ""
          )}
        </div>
      ) : (
        <div className={styles.beforeAuthenticated}>
          <p className={`fs-18px text-center font-roboto weight-4`}>
            Connect MetaMask to buy
          </p>
        </div>
      )}
    </div>
  );
}

export default Buy;
