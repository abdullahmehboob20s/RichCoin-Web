import React from "react";
import styles from "./Checkbox.module.css";

function Checkbox(props) {
  return (
    <div
      className={
        props.rounded ? `${styles.checkbox} ${styles.rounded}` : styles.checkbox
      }
    >
      <input
        type={props.radio ? "radio" : "checkbox"}
        name={props.name ? props.name : ""}
        id={props.label}
      />
    </div>
  );
}

export default Checkbox;
