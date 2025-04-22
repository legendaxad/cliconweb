import React, { createContext, useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

interface WishItem {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  color?: string;
  size?: string;
  memory?: string;
  storage?: string;
  category: string;
  rating: number;
  description: string;
  inventoryStatus: string;
}

interface CartContextType {
  wishItems: WishItem[];
  addToWish: (item: WishItem) => void;
  removeFromWish: (id: string) => void;
  clearWishlist: () => void;
  isInWishlist: (id: string) => boolean;
}

const WishContext = createContext<CartContextType | undefined>(undefined);

export const WishProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [wishItems, setWishItems] = useState<WishItem[]>([]);

  const addToWish = (item: WishItem) => {
    toast.success(`Item added to wishlist!`);

    setWishItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);

      if (existingItem) {
        const updatedQuantity = existingItem.quantity + item.quantity;

        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: updatedQuantity } : i
        );
      } else {
        const quantityToAdd = Math.min(item.quantity, 10);
        return [...prevItems, { ...item, quantity: quantityToAdd }];
      }
    });
  };

  const removeFromWish = (id: string) => {
    toast.error("Item removed from wishlist!");
    setWishItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const clearWishlist = () => {
    toast.info("Wishlist cleared!");
    setWishItems([]);
  };

  const isInWishlist = (id: string) => {
    return wishItems.some((item) => item.id === id);
  };

  return (
    <WishContext.Provider
      value={{
        wishItems,
        addToWish,
        removeFromWish,
        clearWishlist,
        isInWishlist,
      }}
    >
      {children}
    </WishContext.Provider>
  );
};

export const useWish = () => {
  const context = useContext(WishContext);
  if (!context) throw new Error("useWish must be used within a WishProvider");
  return context;
};
