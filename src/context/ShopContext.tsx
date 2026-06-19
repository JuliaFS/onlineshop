import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useProducts } from "./ProductsContext";
import { Product } from "../products";

type Cart = Record<number, number>;

interface ShopContextType {
  cartItems: Cart;
  addToCart: (id: number) => void;
  removeFromCart: (id: number) => void;
  updateCartItemCount: (newAmount: number, itemId: number) => void;
  getTotalCartAmount: () => number;
  getTotalItems: () => number;
  checkout: () => void;
}

interface ShopProviderProps {
  children: ReactNode;
}

export const ShopContext = createContext<ShopContextType | undefined>(
  undefined
);

const getDefaultCart = (products: Product[]) => {
  const cart: Cart = {};
  for (const product of products) {
    cart[product.id] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props: ShopProviderProps) => {
  const { products } = useProducts();

  const [cartItems, setCartItems] = useState<Cart>(() => {
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : {};
  });

  // Initialize cart when products load (only if empty)
  useEffect(() => {
    if (products.length > 0 && Object.keys(cartItems).length === 0) {
      setCartItems(getDefaultCart(products));
    }
  }, [products]);

  // Persist cart
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const getTotalCartAmount = () => {
    let totalAmount = 0;

    for (const item in cartItems) {
      const quantity = cartItems[Number(item)] ?? 0;

      if (quantity > 0) {
        const itemInfo = products.find(
          (product) => product.id === Number(item)
        );

        if (itemInfo) {
          totalAmount += quantity * itemInfo.price;
        }
      }
    }

    return totalAmount;
  };

  const getTotalItems = () => {
    return Object.values(cartItems).reduce(
      (sum, qty) => sum + qty,
      0
    );
  };

  const addToCart = (itemId: number) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] ?? 0) + 1,
    }));
  };

  const removeFromCart = (itemId: number) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: Math.max((prev[itemId] ?? 0) - 1, 0),
    }));
  };

  const updateCartItemCount = (newAmount: number, itemId: number) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: newAmount,
    }));
  };

  const checkout = () => {
    setCartItems(getDefaultCart(products));
  };

  const contextValue: ShopContextType = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
    getTotalItems,
    checkout,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export const useShopCart = () => {
  const context = useContext(ShopContext);

  if (!context) {
    throw new Error("useShopCart must be used inside ShopContextProvider");
  }

  return context;
};
