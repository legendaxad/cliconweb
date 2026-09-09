import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export interface WishItem {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity?: number; // ✅ Make it optional
  color?: string;
  size?: string;
  memory?: string;
  storage?: string;
  category: string;
  rating: number;
  description: string;
  inventoryStatus: string;
}

interface WishlistContextType {
  wishItems: WishItem[];
  addToWish: (item: WishItem) => void;
  removeFromWish: (id: string) => void;
  clearWishlist: () => void;
  isInWishlist: (id: string) => boolean;
}

const WishContext = createContext<WishlistContextType | undefined>(undefined);
const USER_ID = "guest123";

export const WishProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [wishItems, setWishItems] = useState<WishItem[]>([]);

  // Fetch wishlist on mount
  useEffect(() => {
    const fetchWishlistItems = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8080/wishlist/user?userId=${USER_ID}`
        );

        // Ensure response is an array
        if (Array.isArray(res.data)) {
          const items: WishItem[] = res.data.map((item: any) => ({
            id: item.productId,
            name: item.name,
            image: item.image,
            price: item.price,
            category: item.category || "",
            rating: item.rating || 0,
            description: item.description || "",
            inventoryStatus: item.inventoryStatus || "IN_STOCK",
            color: item.color,
            size: item.size,
            memory: item.memory,
            storage: item.storage,
          }));

          setWishItems(items);
        } else {
          toast.error("Unexpected response format from wishlist API");
          console.error("Unexpected wishlist API response:", res.data);
        }
      } catch (error) {
        console.error("❌ Failed to fetch wishlist:", error);
        toast.error("Could not load your wishlist");
      }
    };

    fetchWishlistItems();
  }, []);

  // Add to wishlist
  const addToWish = async (item: WishItem) => {
    console.log("🧪 Sending to wishlist:", item);
    try {
      await axios.post("http://localhost:8080/wishlist/add", {
        userId: USER_ID,
        product: {
          _id: item.id,
          name: item.name,
          price: item.price,
          image: item.image,
        },
      });

      toast.success(`Item added to wishlist!`);

      setWishItems((prev) => {
        const exists = prev.some((i) => i.id === item.id);
        return exists ? prev : [...prev, item];
      });
    } catch (error: any) {
      console.error(
        "❌ Failed to sync wishlist:",
        error?.response?.data || error
      );
      toast.error("Could not sync with backend");
    }
  };

  // Remove from wishlist
  const removeFromWish = async (id: string) => {
    try {
      await axios.delete(
        `http://localhost:8080/wishlist/remove/${USER_ID}/${id}`
      );
      toast.error("Item removed from wishlist!");

      setWishItems((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.error("❌ Failed to delete from backend:", error);
      toast.error("Could not remove item from backend");
    }
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
