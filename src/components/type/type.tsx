export interface DataType {
  category: string;
  name: string;
  price: number;
  description: string;
  id: string;
  brand: string;
  popular: string;
  inventoryStatus:
    | "HOT"
    | "BEST DEALS"
    | "25% OFF"
    | "SALE"
    | "INSTOCK"
    | "LOWSTOCK"
    | "OUTOFSTOCK"
    | "";

  rating: number;

  image: string;
}

export interface CartItem {
  id: number;
  image: string;
  name: string;
  price: number;
}
export interface Product {
  id: string;
  image: string;
  name: string;
  description: string;
  price: {
    actual: number;
    sale: number;
  };
  category: string;
  inventoryStatus: "INSTOCK" | "LOWSTOCK" | "OUTOFSTOCK";
}
export interface CategoryData {
  name: string;
  price: number;
  category: string;
  image: string;
}
export type Blog = {
  name: string;
  author: string;
  date: string;
  category: string;
  description1: string;
  description2: string;
  content: string;
  images: string[];
  Image: string;
  comment: string;
};

export type BlogPost = {
  id: number;
  blog: Blog;
};
