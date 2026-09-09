import axios from "axios";
import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

export interface CartItem {
  id: string;
  productId?: string;
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

const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  return token ? { headers: { Authorization: `Bearer ${token}` } } : undefined;
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      const headers = getAuthHeaders();
      if (!headers) return; // Guest: no fetch from backend

      try {
        const res = await axios.get("http://localhost:8080/cart/user", headers);
        const backendItems: CartItem[] = res.data.map((item: any) => ({
          id: item.productId || item._id || item.id,
          name: item.name,
          image: item.image,
          price: item.price,
          quantity: item.quantity,
          rating: item.rating || 0,
        }));
        setCartItems(backendItems);
      } catch (error) {
        console.error("❌ Failed to fetch cart:", error);
        toast.error("Could not load your cart.");
      }
    };

    fetchCartItems();
  }, []);

  const addToCart = async (item: CartItem) => {
    toast.success(`${item.name} added to cart!`);

    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem) {
        const newQty = Math.min(existingItem.quantity + item.quantity, 10);
        if (newQty > 10) toast.error("Quantity cannot exceed 10");

        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: newQty } : i
        );
      } else {
        return [
          ...prevItems,
          { ...item, quantity: Math.min(item.quantity, 10) },
        ];
      }
    });

    const headers = getAuthHeaders();
    if (!headers) return; // Guest: local state only

    try {
      await axios.post(
        "http://localhost:8080/cart/add",
        {
          product: {
            _id: item.id,
            name: item.name,
            price: item.price,
            image: item.image,
            quantity: item.quantity,
          },
        },
        headers
      );
    } catch (error) {
      console.error("❌ Failed to sync cart:", error);
      toast.error("Could not sync with backend");
    }
  };

  const removeFromCart = async (id: string) => {
    toast.error("Item removed from cart!");
    setCartItems((prev) => prev.filter((item) => item.id !== id));

    const headers = getAuthHeaders();
    if (!headers) return;

    try {
      await axios.delete(`http://localhost:8080/cart/remove/${id}`, headers);
    } catch (error) {
      console.error("❌ Failed to delete from backend:", error);
      toast.error("Could not remove item from backend");
    }
  };

  const changeQuantity = async (id: string, quantity: number) => {
    if (quantity > 10 || quantity < 1) {
      toast.error("Quantity must be between 1 and 10.");
      return;
    }

    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );

    const headers = getAuthHeaders();
    if (!headers) return;

    try {
      await axios.put(
        `http://localhost:8080/cart/update/${id}`,
        { quantity },
        headers
      );
    } catch (error) {
      console.error("❌ Failed to update quantity:", error);
      toast.error("Failed to update cart.");
    }
  };

  const isInCartlist = (id: string) => {
    return cartItems.some((item) => item.id === id);
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
