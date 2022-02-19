import React, { useState } from "react";
import styles from "./Navbar.module.css";
import logo from "assets/images/logo.png";
import metamaskIcon from "assets/images/metamaskIcon.png";
import { useSelector, useDispatch } from "react-redux";
import { authenticate, logout } from "reduxFolder/userState";
import useMediaQuery from "hooks/useMediaQuery";
import hamburger from "assets/images/hamburger.png";

function Navbar() {
  const state = useSelector((state) => state.userState);
  const dispatch = useDispatch();
  const isBellow1000px = useMediaQuery("(max-width : 1000px)");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div className={styles.navbar}>
        <img src={logo} className={styles.logo} alt="" />

        <div className={styles.right}>
          <div className={`${styles.links} ${isOpen ? styles.open : ""}`}>
            <a href="/" className={`${styles.link} fs-36px weight-4 white`}>
              HowTo
            </a>
            <a href="/" className={`${styles.link} fs-36px weight-4 white`}>
              FAQ
            </a>
          </div>

          {state.isAuthenticated ? (
            <>
              <div onClick={() => dispatch(logout())} className="pointer">
                <p
                  className={`yellow ${
                    isBellow1000px ? "fs-14px" : "fs-24px"
                  } weight-4 mb-5px text-center ${styles.id}`}
                >
                  {state.user.id}
                </p>
                <p
                  className={`yellow ${
                    isBellow1000px ? "fs-14px" : "fs-24px"
                  } weight-4 text-center`}
                >
                  {state.user.wei}
                </p>
              </div>
            </>
          ) : (
            <button
              className={`${styles.connectWalletBtn} lh-1 fs-36px weight-4 white pointer`}
              onClick={() => dispatch(authenticate())}
            >
              <span className="lh-1">Connect</span>{" "}
              <img src={metamaskIcon} alt="" />
            </button>
          )}
        </div>

        <button
          className={`${styles.hamburger} ${isOpen ? styles.open : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
