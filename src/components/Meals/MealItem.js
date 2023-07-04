import React from "react";
import styles from "./MealItem.module.css";
import Form from "../UI/Form/Form";

function MealItem(props) {
  return (
    <div className={styles.mealItem}>
      <div>
        <h1>{props.mealItem.title}</h1>
        <p>{props.mealItem.description}</p>
        <span>{props.mealItem.price}</span>
      </div>
      <Form mealId={props.mealId} mealItem={props.mealItem} />
    </div>
  );
}

export default MealItem;
