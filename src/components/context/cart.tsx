// context/cart.tsx
import React, { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

interface CartItem {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  color?: string;
  size?: string;
  memory?: string;
  storage?: string;
  rating: number;
}

interface CartContextType {
  cartItems: CartItem[];
  isInCartlist: (id: string) => boolean;
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  changeQuantity: (id: string, quantity: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    toast.success(`${item.name} added to cart!`);
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);

      if (existingItem) {
        const updatedQuantity = existingItem.quantity + item.quantity;

        if (updatedQuantity > 10) {
          toast.error("Quantity cannot exceed 10");
          return prevItems.map((i) =>
            i.id === item.id ? { ...i, quantity: 10 } : i
          );
        }

        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: updatedQuantity } : i
        );
      } else {
        const quantityToAdd = Math.min(item.quantity, 10);
        return [...prevItems, { ...item, quantity: quantityToAdd }];
      }
    });
  };
  const removeFromCart = (id: string) => {
    toast.error("Item removed from cart!");
    // ✅ This completely removes the item
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };
  const isInCartlist = (id: string) => {
    return cartItems.some((item) => item.id === id);
  };
  const changeQuantity = (id: string, quantity: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.min(Math.max(quantity, 1), 10) }
          : item
      )
    );
  };
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        isInCartlist,
        removeFromCart,
        changeQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};
