import React from "react";
import styles from "./Button.module.css";

function Button(props) {
  console.log(props);
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;
