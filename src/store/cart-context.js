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
  changeQuantity: (quantity, cartItem) => {},
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
    console.log(amount);
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
        quantity: parseInt(amount),
      };
      return [...oldCart, newCart];
    });
  };

  const changeQuantityHandler = (newquantity, id) => {
    setCartItems((prevState) => {
      const oldCart = [...prevState];
      return oldCart.map((cart) => {
        if (cart.id === id) {
          return {
            ...cart,
            quantity: parseInt(newquantity),
          };
        }
        return cart;
      });
    });
  };

  const removeCartItemHandler = (id) => {
    setCartItems((prevState) => {
      const updatedCartItems = [...prevState];
      return updatedCartItems.filter((cart) => {
        return cart.id !== id;
      });
    });
  };

  return (
    <CartContext.Provider
      value={{
        isCart: cart,
        openCart: cartOpenHander,
        closeCart: cartCloseHander,
        cartItems: cartItems,
        addCartItem: addCartItemHandler,
        removeCartItem: removeCartItemHandler,
        changeQuantity: changeQuantityHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
