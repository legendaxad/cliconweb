import { useEffect, useState } from "react";
import axios from "axios";

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

export default function Example() {
  const [products, setProducts] = useState<DataType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("http://localhost:8080/laptop/all");
        setProducts(data);
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.price} USD</p>
          <img src={product.image} alt={product.name} width={150} />
        </div>
      ))}
      <h1>Hello</h1>
    </div>
  );
}
