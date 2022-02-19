import React from "react";
import styles from "./Footer.module.css";
import socialIcon1 from "assets/images/socialIcon1.png";
import socialIcon2 from "assets/images/socialIcon2.png";
import socialIcon3 from "assets/images/socialIcon3.png";

function Footer() {
  return (
    <div className={styles.wrapper}>
      <div className="container-wrapper">
        <div className={styles.footer}>
          <h5 className="fs-18px white font-roboto weight-4">
            ©2022 RichCoin - All Rights Reserved
          </h5>

          <div className={styles.socialIcon}>
            <a href="/">
              <img src={socialIcon1} alt="" />
            </a>
            <a href="/">
              <img src={socialIcon2} alt="" />
            </a>
            <a href="/">
              <img src={socialIcon3} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
