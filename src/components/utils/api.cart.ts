import axiosInstance from "./axiosInstance";

export const fetchCartItems = async () => {
  const res = await axiosInstance.get("/cart");
  return res.data;
};

export const addItemToCart = async (item: any) => {
  const res = await axiosInstance.post("/cart/add", {
    productId: item.id,
    name: item.name,
    price: item.price,
    image: item.image || "https://via.placeholder.com/150",
    quantity: item.quantity || 1,
    rating: item.rating,
  });
  return res.data;
};

export const removeItemFromCart = async (productId: string) => {
  const res = await axiosInstance.delete("/cart/remove", {
    data: { productId },
  });
  return res.data;
};

export const updateItemQuantity = async (
  productId: string,
  quantity: number
) => {
  const res = await axiosInstance.put("/cart/update", { productId, quantity });
  return res.data;
};
