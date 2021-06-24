import React from "react";
import * as styles from "./Header.module.css";
const Header = ({ text, bold, text2, customClass = "" }) => {
  return (
    <h2 className={styles.Header + customClass}>
      {text} <span>{bold}</span> {text2}
    </h2>
  );
};

export default Header;
