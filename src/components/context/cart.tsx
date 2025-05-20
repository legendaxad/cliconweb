import axios from "axios";
import { a } from "framer-motion/dist/types.d-B50aGbjN";
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
          rating: 0,
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

  const removeFromCart = async (id: string) => {
    toast.error("Item removed from cart!");

    try {
      await axios.delete(`http://localhost:8080/cart/remove/${USER_ID}/${id}`);
    } catch (error) {
      console.error("❌ Failed to delete from backend:", error);
      toast.error("Could not remove item from backend");
    }

    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };
  const isInCartlist = (id: string) => {
    return cartItems.some((item) => item.id === id);
  };

  const changeQuantity = async (id: string, quantity: number) => {
    if (quantity > 10) {
      toast.error("Item quantity cannot exceed 10.");
      return;
    }

    if (quantity < 1) {
      toast.error("Item quantity must be at least 1.");
      return;
    }

    try {
      await axios.put(`http://localhost:8080/cart/update/${USER_ID}/${id}`, {
        quantity,
      });

      setCartItems((prev) =>
        prev.map((item) => (item.id === id ? { ...item, quantity } : item))
      );
    } catch (error) {
      console.error("Failed to update quantity:", error);
      alert("Failed to update cart. Please try again.");
    }
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
