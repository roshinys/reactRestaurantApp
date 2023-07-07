import React, { useContext } from "react";
import CartContext from "../../../store/cart-context";
import styles from "./Header.module.css";
import Button from "../../UI/Button/Button";
import CartIcon from "../../UI/CartIcon/CartIcon";
import mealsImage from "../../../images/raspberries.jpg";
import Summary from "../Summary/Summary";

function Header(props) {
  const ctx = useContext(CartContext);

  const buttonClickHandlder = () => {
    ctx.openCart();
  };

  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1 className={styles.heading}>Italian Cuisine</h1>
        <Button onClick={buttonClickHandlder}>
          <CartIcon />
          Cart <span>{props.cartLength}</span>
        </Button>
      </header>
      <div className={styles.headerImage}>
        <img src={mealsImage} alt="Italian cuisine" />
      </div>
      <Summary />
    </React.Fragment>
  );
}

export default Header;
