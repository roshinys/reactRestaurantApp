import React from "react";
import MealItem from "../MealItem/MealItem";
import styles from "./Meals.module.css";

const DUMMY_MEALS = [
  {
    id: 1,
    title: "Spaghetti Bolognese",
    description: "Classic Italian pasta",
    price: 9.99,
  },
  {
    id: 2,
    title: "Chicken Caesar Salad",
    description: "Fresh romaine lettuce",
    price: 12.99,
  },
  {
    id: 3,
    title: "Mushroom Risotto",
    description: "Creamy Arborio rice ",
    price: 10.99,
  },
];

function Meals() {
  return (
    <div className={styles.allmeals}>
      <div className={styles.meals}>
        {DUMMY_MEALS.map((meal) => {
          return <MealItem key={meal.id} mealItem={meal} />;
        })}
      </div>
    </div>
  );
}

export default Meals;
