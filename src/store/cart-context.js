import React, { useState } from "react";

const DUMMY_CART = [
  {
    id: 1,
    title: "Spaghetti Bolognese",
    price: 9.99,
    quantity: 2,
  },
  {
    id: 2,
    title: "Chicken Caesar Salad",
    price: 12.99,
    quantity: 1,
  },
];

const CartContext = React.createContext({
  isCart: false,
  openCart: () => {},
  closeCart: () => {},
  cartItems: DUMMY_CART,
  addCartItem: (amount, cartItem) => {},
  removeCartItem: (id) => {},
});

export const CartContextProvider = (props) => {
  const [cart, setCart] = useState(false);
  const [cartItems, setCartItems] = useState(DUMMY_CART);

  const cartOpenHander = () => {
    setCart(true);
  };
  const cartCloseHander = () => {
    setCart(false);
  };

  const addCartItemHandler = (amount, cartItem) => {
    setCartItems((prevState) => {
      const oldCart = [...prevState];
      const existingCart = oldCart.find((cart) => cart.id === cartItem.id);
      if (existingCart) {
        return oldCart.map((cart) => {
          if (cart.id === cartItem.id) {
            return { ...cart, quantity: cart.quantity + parseInt(amount) };
          }
          return cart;
        });
      }
      const newCart = {
        id: cartItem.id,
        title: cartItem.title,
        price: cartItem.price,
        quantity: amount,
      };
      return [...oldCart, newCart];
    });
  };

  const removeCartItemHandler = (cartItem) => {};

  return (
    <CartContext.Provider
      value={{
        isCart: cart,
        openCart: cartOpenHander,
        closeCart: cartCloseHander,
        cartItems: cartItems,
        addCartItem: addCartItemHandler,
        removeCartItem: removeCartItemHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
