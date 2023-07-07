import React, { useContext, useState } from "react";
import styles from "./CartSingleItem.module.css";
import CartContext from "../../../store/cart-context";
import Button from "../../UI/Button/Button";

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
          <Button className="cartButton" onClick={removeQuantityHandler}>
            -
          </Button>
          <span>{quantity}</span>
          <Button className="cartButton" onClick={addQuantityHandler}>
            +
          </Button>
        </div>
      </li>
    </>
  );
}

export default CartSingleItem;
