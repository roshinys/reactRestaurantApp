import React from "react";
import styles from "./MealItem.module.css";

function MealItem(props) {
  return (
    <div className={styles.mealItem}>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <span>{props.price}</span>
    </div>
  );
}

export default MealItem;
