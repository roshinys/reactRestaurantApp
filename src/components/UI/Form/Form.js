import React from "react";
import styles from "./Form.module.css";

function Form() {
  return (
    <div className={styles.div}>
      <form className={styles.form}>
        <div className={styles.formInput}>
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            className={styles.input}
            id="amount"
            min={1}
            required
          />
        </div>
        <button type="submit" className={styles.formButton}>
          +Add
        </button>
      </form>
    </div>
  );
}

export default Form;
