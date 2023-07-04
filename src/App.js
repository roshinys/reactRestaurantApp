import Header from "./components/Layout/Header/Header.js";
import Meals from "./components/Meals/Meals.js";
import Cart from "./components/Cart/Cart.js";

function App() {
  return (
    <>
      <Cart />
      <Header></Header>
      <Meals />
    </>
  );
}

export default App;
