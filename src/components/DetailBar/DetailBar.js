import React, { useState } from "react";
import styles from "./DetailBar.module.css";

const DetailBar = ({ title, text, type = "text" }) => {
  const [value, setValue] = useState(text);
  return (
    <div className={styles.detailBar}>
      <label htmlFor={title} className="fs-16px white mb-5px block">
        {title}
      </label>
      <input
        type={type}
        className={`${styles.detailBox} fs-14px black weight-4`}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        id={title}
      />
    </div>
  );
};

export default DetailBar;
