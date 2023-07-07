import React, { useContext, useState } from "react";
import styles from "./CartSingleItem.module.css";
import CartContext from "../../../store/cart-context";

function CartSingleItem(props) {
  const [quantity, setQuantity] = useState(props.cart.quantity);
  const cartCtx = useContext(CartContext);

  const addQuantityHandler = () => {
    setQuantity((prevState) => {
      return prevState + 1;
    });
    cartCtx.changeQuantity(quantity + 1, props.cart.id);
  };

  const removeQuantityHandler = () => {
    if (quantity <= 1) {
      alert("Do you want delete the item?");
      cartCtx.removeCartItem(props.cart.id);
      return;
    }
    setQuantity((prevState) => {
      return prevState - 1;
    });
    cartCtx.changeQuantity(quantity - 1, props.cart.id);
  };

  return (
    <>
      <li id={props.cart.id} className={styles.listcart}>
        <div className={styles.title}>
          <h3>{props.cart.title}</h3>
          <p>${props.cart.price}</p>
        </div>
        <div className={styles.cartactions}>
          <button onClick={removeQuantityHandler}>-</button>
          <span>{quantity}</span>
          <button onClick={addQuantityHandler}>+</button>
        </div>
      </li>
    </>
  );
}

export default CartSingleItem;
