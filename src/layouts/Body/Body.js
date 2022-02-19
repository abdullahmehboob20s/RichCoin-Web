import Buy from "components/Buy/Buy";
import History from "components/History/History";
import Info from "components/Info/Info";
import React from "react";
import { useSelector } from "react-redux";
import styles from "./Body.module.css";

function Body() {
  const state = useSelector((state) => state.userState);

  return (
    <div className={styles.wrapper}>
      <div className="container-wrapper py-50px">
        <div className={styles.body}>
          <div>
            <Info />
          </div>
          <div>
            <History />
          </div>
          <div>
            <Buy />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
