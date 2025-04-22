import { Carousel } from "primereact/carousel";
import img1 from "../../../assets/homepage/Image (1).png";
import img2 from "../../../assets/homepage/Image (2).png";
import img3 from "../../../assets/homepage/Image (3).png";
import img4 from "../../../assets/homepage/Image (4).png";
import img5 from "../../../assets/homepage/Image (5).png";
import img6 from "../../../assets/homepage/Image (6).png";
import img7 from "../../../assets/homepage/Watch & Accessories.webp";
import img8 from "../../../assets/homepage/Wearable Technology.jpg";
import img9 from "../../../assets/homepage/GPS & Navigation.jpg";

export default function NumScrollDemo() {
  const products = [
    {
      id: 1,
      name: "Computer & Laptop",
      image: `${img1}`,
      price: 29.99,
      link: "/product/1",
    },
    {
      id: 2,
      name: "SmartPhone",
      image: `${img2}`,
      price: 19.99,
      link: "/product/2",
    },
    {
      id: 3,
      name: "Headphones",
      image: `${img3}`,
      price: 39.99,
      link: "/product/3",
    },
    {
      id: 4,
      name: "Accessories",
      image: `${img4}`,
      price: 49.99,
      link: "/product/4",
    },
    {
      id: 5,
      name: "Camera & Photo",
      image: `${img5}`,
      price: 99.99,
      link: "/product/5",
    },
    {
      id: 6,
      image: `${img6}`,
      name: "TV & Homes",
      price: 25.99,

      link: "/product/6",
    },
    {
      id: 7,
      name: "Watch & Accessories",
      image: `${img7}`,
      price: 59.99,
      link: "/product/7",
    },
    {
      id: 8,
      name: "Gps & Navigation",
      image: `${img8}`,
      price: 22.99,
      link: "/product/8",
    },
    {
      id: 9,
      name: "Warable Technology",
      image: `${img9}`,
      price: 79.99,

      link: "/product/9",
    },
  ];

  const responsiveOptions = [
    { breakpoint: "1400px", numVisible: 2, numScroll: 1 },
    { breakpoint: "1199px", numVisible: 3, numScroll: 1 },
    { breakpoint: "767px", numVisible: 2, numScroll: 1 },
    { breakpoint: "575px", numVisible: 1, numScroll: 1 },
  ];

  const productTemplate = (product: any) => {
    return (
      <div
        style={{
          border: " 1px solid var(--Gray-100, #E4E7E9)",
          background: "var(--Gray-00, #FFF)",
          height: 256,
        }}
        onClick={() => (window.location.href = product.link)}
        className="border-1 surface-border border-round m-2 text-center py-5 px-3"
      >
        <div className="mb-3">
          <img
            style={{ width: 100, height: 100 }}
            src={product.image}
            alt={product.name}
            className="w-6 shadow-2"
          />
        </div>
        <div>
          <h4 className="mb-1">{product.name}</h4>
        </div>
      </div>
    );
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ width: "90%", maxWidth: "1400px" }}>
        {" "}
        {/* Adjust width as needed */}
        <Carousel
          value={products}
          numVisible={5}
          numScroll={1}
          responsiveOptions={responsiveOptions}
          className="custom-carousel"
          circular
          autoplayInterval={4000}
          itemTemplate={productTemplate}
          showIndicators={false}
        />
      </div>
    </div>
  );
}
