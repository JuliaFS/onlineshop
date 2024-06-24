import { ReactNode, createContext, useState } from "react";
import { PRODUCTS } from "../products";

interface Cart {
    [key: string]: number;
  }

  interface ShopContextType {
    // Define the properties and methods your context will have
    cartItems: Cart;
    addToCart: (id: string) => void;
    removeFromCart: (id: string) => void;
    updateCartItemCount: (newAmount:number, itemId:number) => void;
    getTotalCartAmount: () => void;
    checkout: () => void;

    // Add other properties or methods as needed
  }

  interface ShopProviderProps {
    children: ReactNode;
  }

export const ShopContext = createContext<ShopContextType | undefined>(undefined);

const getDefaultCart = () => {
  const cart: Cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props: ShopProviderProps) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo!.price;
      }
    }
    return totalAmount;
  };

  const addToCart = (itemId: string) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId: string) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount:number, itemId:number) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const checkout = () => {
    setCartItems(getDefaultCart());
  };

const contextValue : ShopContextType = {
    cartItems,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    checkout,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};