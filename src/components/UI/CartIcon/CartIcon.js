import React from "react";
import styles from "./CartIcon.module.css";

function CartIcon() {
  return <i className={`fa-solid fa-cart-shopping ${styles.icon}`}></i>;
}

export default CartIcon;
