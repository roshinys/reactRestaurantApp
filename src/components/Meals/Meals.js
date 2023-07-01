import React from "react";
import MealItem from "./MealItem";
import styles from "./Meals.module.css";

const DUMMY_MEALS = [
  {
    id: 1,
    title: "Spaghetti Bolognese",
    description: "Classic Italian pasta dish with tomato sauce and ground beef",
    price: 9.99,
  },
  {
    id: 2,
    title: "Chicken Caesar Salad",
    description:
      "Fresh romaine lettuce, grilled chicken, croutons, and Caesar dressing",
    price: 12.99,
  },
  {
    id: 3,
    title: "Mushroom Risotto",
    description:
      "Creamy Arborio rice cooked with mushrooms and Parmesan cheese",
    price: 10.99,
  },
];

function Meals() {
  return (
    <div className={styles.allmeals}>
      <div className={styles.meals}>
        {DUMMY_MEALS.map((meal) => {
          return (
            <MealItem
              key={meal.id}
              title={meal.title}
              description={meal.description}
              price={meal.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Meals;
