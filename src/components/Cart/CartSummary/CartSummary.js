import React, { useContext } from "react";
import styles from "./CartSummary.module.css";
import CartContext from "../../../store/cart-context";

function CartSummary() {
  const ctx = useContext(CartContext);

  const cartCloseHandler = () => {
    ctx.closeCart();
  };

  return (
    <>
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={styles.actions}>
        <button className={styles.closeCart} onClick={cartCloseHandler}>
          Close
        </button>
        <button className={styles.orderCart}>Order</button>
      </div>
    </>
  );
}

export default CartSummary;
