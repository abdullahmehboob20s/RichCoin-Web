import Buy from "components/Buy/Buy";
import History from "components/History/History";
import Info from "components/Info/Info";
import useMediaQuery from "hooks/useMediaQuery";
import React from "react";
import { useSelector } from "react-redux";
import styles from "./Body.module.css";

function Body() {
  const isBellow600px = useMediaQuery("(max-width : 600px)");
  const state = useSelector((state) => state.userState);

  return (
    <div className={`${styles.wrapper} `}>
      <div
        className={`container-wrapper ${
          isBellow600px ? "py-30px " : "py-50px"
        }  `}
      >
        <div className={styles.body}>
          <div>
            <Info />
          </div>
          <div>
            <History />
          </div>
          <div
            style={{
              height: isBellow600px && !state.isAuthenticated ? "200px" : "",
            }}
          >
            <Buy />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
