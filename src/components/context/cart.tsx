import axios from "axios";
import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

export interface CartItem {
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

const USER_ID = "guest123"; // Replace with dynamic ID if user is logged in

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // ✅ Load cart from backend on first load
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8080/cart/user?userId=${USER_ID}`
        );

        const backendItems = res.data.map((item: any) => ({
          id: item.productId,
          name: item.name,
          image: item.image,
          price: item.price,
          quantity: item.quantity,
          rating: 0, // Replace with actual rating if available
        }));

        setCartItems(backendItems);
      } catch (error) {
        console.error("Failed to fetch cart:", error);
        toast.error("Could not load your cart");
      }
    };

    fetchCartItems();
  }, []);

  const addToCart = async (item: CartItem) => {
    toast.success(`${item.name} added to cart!`);

    // ✅ Sync with backend
    try {
      await axios.post("http://localhost:8080/cart/add", {
        userId: USER_ID,
        product: {
          _id: item.id,
          name: item.name,
          price: item.price,
          image: item.image,
          quantity: item.quantity,
        },
      });
    } catch (error: any) {
      console.error("❌ Failed to sync cart:", error);
      toast.error("Could not sync with backend");
    }

    // ✅ Local cart logic
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
