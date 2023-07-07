import React, { useContext, useState } from "react";
import styles from "./Form.module.css";
import CartContext from "../../../store/cart-context";
import Button from "../Button/Button";

function Form(props) {
  const cartCtx = useContext(CartContext);
  const [amount, setAmount] = useState("");

  const addToCartHandler = (e) => {
    e.preventDefault();
    cartCtx.addCartItem(amount, props.mealItem);
    setAmount("");
  };

  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
  };

  return (
    <div className={styles.div}>
      <form className={styles.form} onSubmit={addToCartHandler}>
        <div className={styles.formInput}>
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            className={styles.input}
            id="amount"
            min={1}
            value={amount}
            onChange={amountChangeHandler}
            required
          />
        </div>
        <Button type="submit">+Add</Button>
      </form>
    </div>
  );
}

export default Form;
