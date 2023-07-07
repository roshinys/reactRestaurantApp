import React, { useContext } from "react";
import styles from "./Button.module.css";
import CartContext from "../../../store/cart-context";

function Button(props) {
  const ctx = useContext(CartContext);

  const buttonClickHandlder = () => {
    ctx.openCart();
  };

  return (
    <button className={styles.button} onClick={buttonClickHandlder}>
      {props.children}
    </button>
  );
}

export default Button;
