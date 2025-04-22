import { createContext, useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

interface CompareItem {
  id: string;
  name: string;
  image: string;
  price: number;
  brand?: string;
  memory?: string;
  storage?: string;
  rating?: number;
  quantity: number;
  color?: string;
  size?: string;
  description: string;
  inventoryStatus: string;
}

interface CompareContextType {
  compareItems: CompareItem[];
  addToCompare: (item: CompareItem) => void;
  removeFromCompare: (id: string) => void;
  clearCompare: () => void;
}

const CompareContext = createContext<CompareContextType | undefined>(undefined);

// Provider
export const CompareProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [compareItems, setCompareItems] = useState<CompareItem[]>([]);

  const addToCompare = (item: CompareItem) => {
    setCompareItems((prev) => {
      const exists = prev.find((i) => i.id === item.id);
      if (exists) {
        toast.info(`${item.name} removed from compare list`);
        return prev.filter((i) => i.id !== item.id);
      } else {
        if (prev.length >= 4) {
          toast.error("You can only compare up to 4 items.");
          return prev;
        }
        toast.success(`${item.name} added to compare list!`);
        return [...prev, item];
      }
    });
  };

  const removeFromCompare = (id: string) => {
    toast.success(`Item added to cart!`);
    setCompareItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const clearCompare = () => setCompareItems([]);

  return (
    <CompareContext.Provider
      value={{ compareItems, addToCompare, removeFromCompare, clearCompare }}
    >
      {children}
      <ToastContainer />
    </CompareContext.Provider>
  );
};

export const useCompare = () => {
  const context = useContext(CompareContext);
  if (!context)
    throw new Error("useCompare must be used within CompareProvider");
  return context;
};
