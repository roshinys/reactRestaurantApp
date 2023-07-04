import React, { useContext } from "react";
import styles from "./Cart.module.css";
import Modal from "../UI/Modal/Modal";
import CartContext from "../../store/cart-context";

function Cart() {
  const ctx = useContext(CartContext);

  const cartCloseHandler = () => {
    ctx.closeCart();
  };

  const cartItems = (
    <ul>
      {ctx.cartItems.map((cart) => {
        return (
          <li key={cart.id}>
            {cart.title} <span>{cart.quantity}</span>
          </li>
        );
      })}
    </ul>
  );

  return (
    <Modal>
      {cartItems}
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
    </Modal>
  );
}

export default Cart;
