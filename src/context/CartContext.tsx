import { createContext, useContext, useState } from "react";
import { ICartItem, IProduct } from "../interfaces";
import { useCounter } from "../hooks/useCounter";

export type CartContextValue = {
  counter: number;
  cartData: ICartItem[];
  isCartVisible: boolean;
  changeCounter: (action: "inc" | "dec") => void;
  toggleCartVisibility: () => void;
  addItemToCart: (product: IProduct | undefined, quantity: number) => void;
  removeItemFromCart: (id: string) => void;
  calculateOrderQuantity: () => number;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartData, setCartData] = useState<ICartItem[]>([]);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const { count: counter, changeCounter } = useCounter();

  const toggleCartVisibility = () => setIsCartVisible((prev) => !prev);

  const addItemToCart = (product: IProduct | undefined, quantity: number) => {
    if (!product) return;
    const { id, title, images, price, discount } = product;
    const image = images?.[0]?.thumbnailSize;

    setCartData((prev) => {
      const existing = prev.find((item) => item.id === id);
      const updatedItem = { id, title, image, price, discount, quantity };

      if (existing && existing.quantity === quantity) return prev;
      if (existing)
        return prev.map((item) => (item.id === id ? updatedItem : item));

      return [...prev, updatedItem];
    });
  };

  const removeItemFromCart = (id: string) => {
    setCartData((prev) => prev.filter((item) => item.id !== id));
  };

  const calculateOrderQuantity = () => {
    return cartData.reduce((acc, item) => acc + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        counter,
        cartData,
        isCartVisible,
        changeCounter,
        toggleCartVisibility,
        addItemToCart,
        removeItemFromCart,
        calculateOrderQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context)
    throw new Error("useCartContext must be used within CartProvider");
  return context;
};
