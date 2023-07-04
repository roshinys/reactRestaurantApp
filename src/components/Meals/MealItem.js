import React from "react";
import styles from "./MealItem.module.css";
import Form from "../UI/Form/Form";

function MealItem(props) {
  return (
    <div className={styles.mealItem}>
      <div>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <span>{props.price}</span>
      </div>
      <Form mealId={props.mealId} />
    </div>
  );
}

export default MealItem;
