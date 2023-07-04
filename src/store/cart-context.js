import React, { useState } from "react";

const CartContext = React.createContext({
  isCart: false,
  openCart: () => {},
  closeCart: () => {},
});

export const CartContextProvider = (props) => {
  const [cart, setCart] = useState(false);
  const cartOpenHander = () => {
    setCart(true);
  };
  const cartCloseHander = () => {
    setCart(false);
  };

  return (
    <CartContext.Provider
      value={{
        isCart: cart,
        openCart: cartOpenHander,
        closeCart: cartCloseHander,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
