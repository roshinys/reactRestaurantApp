import Header from "./components/Layout/Header/Header.js";
import Meals from "./components/Meals/Meal/Meals.js";
import Cart from "./components/Cart/Cart/Cart.js";
import { useContext } from "react";
import CartContext from "./store/cart-context.js";

function App() {
  const ctx = useContext(CartContext);

  return (
    <>
      {ctx.isCart && <Cart />}
      <Header></Header>
      <Meals />
    </>
  );
}

export default App;
