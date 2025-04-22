import { Carousel } from "primereact/carousel";
import { Tag } from "primereact/tag";
import { Products } from "../../mock/Bestdeal";
import { BestDealstyle } from "./carusel.style";
import { Button } from "../main/homapage.style";
import { useCount } from "../../context/count";
import { useCart } from "../../context/cart";
import { DataType, Product } from "../../type/type";
import { ToastContainer, toast } from "react-toastify";

export default function BasicDemo() {
  const { count, setCount } = useCount();
  const { addToCart } = useCart();

  const responsiveOptions = [
    { breakpoint: { max: 3000, min: 1024 }, numVisible: 5, numScroll: 1 },
    { breakpoint: { max: 1024, min: 464 }, numVisible: 5, numScroll: 1 },
    { breakpoint: "767px", numVisible: 4, numScroll: 1 },
    { breakpoint: "575px", numVisible: 5, numScroll: 1 },
  ];

  const getSeverity = (product: DataType) => {
    switch (product.inventoryStatus) {
      case "INSTOCK":
        return "success";
      case "LOWSTOCK":
        return "warning";
      case "OUTOFSTOCK":
        return "danger";
      default:
        return null;
    }
  };

  const productTemplate = (product: DataType) => {
    const handleAddToCart = () => {
      toast.success(`${product.name} added to cart!`);
      addToCart({
        id: product.id,
        name: product.name,
        image: product.image,
        price: product.price,
        quantity: 1,
        rating: product.rating,
      });
      setCount(count + 1);
    };

    return (
      <BestDealstyle>
        <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
          <Tag
            style={{
              marginRight: "-170px",
              padding: 10,
              marginBottom: "-50px",
              zIndex: 1,
            }}
            value={product.inventoryStatus}
            severity={getSeverity(product)}
          />
          <img
            src={product.image}
            alt={product.name}
            className="w-6 shadow-2"
          />
          <div>
            <h4 className="mb-1">{product.name}</h4>
            <h6 className="mt-0 mb-3">
              {/* <span className="text-red-500">${product.price}</span>{" "}
              <del className="text-gray-500">${product.price}</del> */}
            </h6>
            <p onClick={() => setCount(Math.max(count - 1, 0))}>
              {product.description}
            </p>
          </div>
          <Button onClick={handleAddToCart}>
            <svg
              className="arrow-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
            >
              <path
                d="M7.25 16.875C7.25 17.1511 7.02614 17.375 6.75 17.375C6.47386 17.375 6.25 17.1511 6.25 16.875C6.25 16.5989 6.47386 16.375 6.75 16.375C7.02614 16.375 7.25 16.5989 7.25 16.875Z"
                fill="white"
                stroke="white"
                strokeWidth="1.5"
              />
              <path
                d="M14.875 18.125C15.5654 18.125 16.125 17.5654 16.125 16.875C16.125 16.1846 15.5654 15.625 14.875 15.625C14.1846 15.625 13.625 16.1846 13.625 16.875C13.625 17.5654 14.1846 18.125 14.875 18.125Z"
                fill="white"
              />
              <path
                d="M3.80469 5.625H17.8203L15.7578 12.8438C15.6842 13.1057 15.5266 13.3363 15.3093 13.5C15.0919 13.6638 14.8268 13.7516 14.5547 13.75H7.07031C6.79819 13.7516 6.53308 13.6638 6.31572 13.5C6.09836 13.3363 5.94078 13.1057 5.86719 12.8438L3.03906 2.95313C3.00169 2.82246 2.92275 2.70754 2.8142 2.62578C2.70565 2.54401 2.5734 2.49986 2.4375 2.5H1.125"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Add to cart
          </Button>
        </div>
      </BestDealstyle>
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
        <Carousel
          value={Products}
          numVisible={3}
          numScroll={1}
          responsiveOptions={responsiveOptions}
          className="custom-carousel"
          circular
          autoplayInterval={4000}
          itemTemplate={productTemplate}
        />
      </div>
      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
}
