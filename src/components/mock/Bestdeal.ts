import img1 from "../../assets/best/1.jpeg";
import img2 from "../../assets/best/2.jpeg";
import img3 from "../../assets/best/3.jpeg";
import img4 from "../../assets/best/4.jpeg";
import img5 from "../../assets/best/5.jpeg";
import img6 from "../../assets/best/6.jpeg";
import img7 from "../../assets/best/7.jpeg";
import img8 from "../../assets/best/8.jpeg";
import img9 from "../../assets/best/9.jpeg";
import img10 from "../../assets/best/10.jpeg";
import img11 from "../../assets/best/11.jpeg";
import img12 from "../../assets/best/12.jpeg";
import img13 from "../../assets/best/13.jpeg";
import img14 from "../../assets/best/14.jpeg";
import img15 from "../../assets/best/15.jpeg";
import img16 from "../../assets/best/16.jpeg";
import img17 from "../../assets/best/17.jpeg";
import img18 from "../../assets/best/18.jpeg";
import img19 from "../../assets/best/19.jpeg";
import img20 from "../../assets/best/20.jpeg";

import { Product } from "../type/type";

export const Products: Product[] = [
  {
    id: "1",
    image: `${img1}`,
    name: "Gaming Laptop",
    description: "High-performance laptop for gaming and work.",
    price: { actual: 1500, sale: 1299 },
    category: "Computer & Laptop",
    inventoryStatus: "INSTOCK",
  },
  {
    id: "2",
    image: `${img2}`,
    name: "Wireless Gaming Mouse",
    description: "Ergonomic mouse with RGB lighting and fast response time.",
    price: { actual: 80, sale: 60 },
    category: "Computer Accessories",
    inventoryStatus: "LOWSTOCK",
  },
  {
    id: "3",
    image: `${img3}`,
    name: "Flagship Smartphone",
    description:
      "Latest model with 5G, 128GB storage, and triple camera setup.",
    price: { actual: 1200, sale: 999 },
    category: "Smart Phones",
    inventoryStatus: "OUTOFSTOCK",
  },
  {
    id: "4",
    image: `${img4}`,
    name: "Noise Cancelling Headphones",
    description: "Over-ear headphones with active noise cancellation.",
    price: { actual: 250, sale: 199 },
    category: "HeadPhone",
    inventoryStatus: "INSTOCK",
  },
  {
    id: "5",
    image: `${img5}`,
    name: "Fast Charging Power Bank",
    description: "10,000mAh power bank with fast charging support.",
    price: { actual: 50, sale: 35 },
    category: "Mobile Accessories",
    inventoryStatus: "LOWSTOCK",
  },
  {
    id: "6",
    image: `${img6}`,
    name: "Next-Gen Gaming Console",
    description: "4K gaming console with ultra-fast SSD.",
    price: { actual: 500, sale: 449 },
    category: "Gaming Console",
    inventoryStatus: "OUTOFSTOCK",
  },
  {
    id: "7",
    image: `${img7}`,
    name: "Mirrorless Camera",
    description: "24MP mirrorless camera with 4K video recording.",
    price: { actual: 1200, sale: 1099 },
    category: "Camera & Photo",
    inventoryStatus: "INSTOCK",
  },
  {
    id: "8",
    image: `${img8}`,
    name: "4K Smart TV",
    description: "55-inch 4K UHD Smart TV with HDR support.",
    price: { actual: 800, sale: 699 },
    category: "TV & Home Appliances",
    inventoryStatus: "LOWSTOCK",
  },
  {
    id: "9",
    image: `${img9}`,
    name: "Smart Watch",
    description: "Water-resistant smartwatch with fitness tracking.",
    price: { actual: 200, sale: 159 },
    category: "Watch & Accessories",
    inventoryStatus: "OUTOFSTOCK",
  },
  {
    id: "10",
    image: `${img10}`,
    name: "Car GPS Navigator",
    description: "GPS navigation system with real-time traffic updates.",
    price: { actual: 150, sale: 120 },
    category: "GPS & Navigation",
    inventoryStatus: "INSTOCK",
  },
  {
    id: "11",
    image: `${img11}`,
    name: "Fitness Tracker",
    description: "Track your steps, heart rate, and sleep with this device.",
    price: { actual: 100, sale: 79 },
    category: "Wearable Technology",
    inventoryStatus: "LOWSTOCK",
  },
  {
    id: "12",
    image: `${img12}`,
    name: "Mechanical Keyboard",
    description: "RGB backlit mechanical keyboard with responsive keys.",
    price: { actual: 130, sale: 99 },
    category: "Computer Accessories",
    inventoryStatus: "OUTOFSTOCK",
  },
  {
    id: "13",
    image: `${img13}`,
    name: "Wireless Earbuds",
    description: "Noise-isolating earbuds with Bluetooth 5.0.",
    price: { actual: 90, sale: 69 },
    category: "HeadPhone",
    inventoryStatus: "INSTOCK",
  },
  {
    id: "14",
    image: `${img14}`,
    name: "Home Theater Projector",
    description: "1080p projector for home entertainment.",
    price: { actual: 300, sale: 249 },
    category: "TV & Home Appliances",
    inventoryStatus: "LOWSTOCK",
  },
  {
    id: "15",
    image: `${img15}`,
    name: "Wi-Fi 6 Router",
    description: "High-speed router with wide coverage.",
    price: { actual: 180, sale: 149 },
    category: "Computer Accessories",
    inventoryStatus: "OUTOFSTOCK",
  },
  {
    id: "16",
    image: `${img16}`,
    name: "VR Headset",
    description: "Virtual reality headset with immersive experience.",
    price: { actual: 400, sale: 349 },
    category: "Wearable Technology",
    inventoryStatus: "INSTOCK",
  },
  {
    id: "17",
    image: `${img17}`,
    name: "Portable Bluetooth Speaker",
    description: "Compact speaker with deep bass and long battery life.",
    price: { actual: 120, sale: 99 },
    category: "Mobile Accessories",
    inventoryStatus: "LOWSTOCK",
  },
  {
    id: "18",
    image: `${img18}`,
    name: "Smart Home Assistant",
    description: "Voice-controlled smart speaker for home automation.",
    price: { actual: 130, sale: 109 },
    category: "TV & Home Appliances",
    inventoryStatus: "OUTOFSTOCK",
  },
  {
    id: "19",
    image: `${img19}`,
    name: "Gaming Monitor",
    description: "27-inch 144Hz gaming monitor with G-Sync.",
    price: { actual: 400, sale: 349 },
    category: "Computer & Laptop",
    inventoryStatus: "INSTOCK",
  },
  {
    id: "20",
    image: `${img20}`,
    name: "Wireless Charging Pad",
    description: "Fast wireless charger compatible with all Qi devices.",
    price: { actual: 50, sale: 39 },
    category: "Mobile Accessories",
    inventoryStatus: "LOWSTOCK",
  },
];
