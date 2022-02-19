import React from "react";
import styles from "./Navbar.module.css";
import logo from "assets/images/logo.png";
import metamaskIcon from "assets/images/metamaskIcon.png";
import { useSelector, useDispatch } from "react-redux";
import { authenticate, logout } from "reduxFolder/userState";

function Navbar() {
  const state = useSelector((state) => state.userState);
  const dispatch = useDispatch();

  return (
    <div className={styles.wrapper}>
      <div className="container-wrapper">
        <div className={styles.navbar}>
          <img src={logo} className={styles.logo} alt="" />

          <div className={styles.right}>
            <a href="/" className={`fs-36px weight-4 white`}>
              HowTo
            </a>
            <a href="/" className={`fs-36px weight-4 white`}>
              FAQ
            </a>

            {state.isAuthenticated ? (
              <>
                <div onClick={() => dispatch(logout())} className="pointer">
                  <p className="yellow fs-24px weight-4 mb-5px text-center">
                    {state.user.id}
                  </p>
                  <p className="yellow fs-24px weight-4 text-center">
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
        </div>
      </div>
    </div>
  );
}

export default Navbar;
