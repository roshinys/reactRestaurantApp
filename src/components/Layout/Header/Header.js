import React from "react";
import styles from "./Header.module.css";
import Button from "../../UI/Button";
import CartIcon from "../../UI/CartIcon";
import mealsImage from "../../../images/raspberries.jpg";

function Header() {
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.heading}>Italian Cuisine</h1>
        <Button>
          <CartIcon />
          Cart 0
        </Button>
      </header>{" "}
      <div className={styles.headerImage}>
        <img src={mealsImage} alt="Italian cuisine" />
      </div>
    </>
  );
}

export default Header;
