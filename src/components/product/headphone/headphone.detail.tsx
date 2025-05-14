import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Navigation } from "../pages.style";
import Shop from "../../../assets/shop/House.svg";
import { DataType } from "../../type/type";
import Waranty from "../../../assets/shop/Medal.svg";
import Shipping from "../../../assets/shop/Truck.svg";
import Money from "../../../assets/shop/Handshake.svg";
import Paymethod from "../../../assets/shop/CreditCard.svg";
import Support from "../../../assets/shop/Headphones.svg";
import {
  BottomOne,
  ImagePart,
  Lastone,
  MainDiv,
  PaymentDiv,
  TabContent,
  TabDiv,
  TextPart,
  Upperone,
  Withlist,
} from "../detail.style";
import { Tabs } from "@mantine/core";
import Payment from "../../../assets/shop/Payment Method.svg";
import { Galleria } from "primereact/galleria";
import "primereact/resources/themes/saga-blue/theme.css";
import redHeart from "../../../assets/shop/redheart.svg";
import Heart from "../../../assets/shop/Heart.svg";
import Circle from "../../../assets/navbar/ArrowsCounterClockwise.svg";
import Face from "../../../assets/shop/Facebook (1).svg";
import Copy from "../../../assets/shop/Copy.svg";
import Beta from "../../../assets/shop/Twitter.svg";
import Picon from "../../../assets/shop/Pinterest.svg";
import "primereact/resources/primereact.min.css";
import StarRating from "../../homepage/small.one/starRating";
import { Autocomplete, TextField } from "@mui/material";
import { Button } from "../../homepage/main/homapage.style";
import { useCart } from "../../context/cart";
import ProductGrid from "../../homepage/small.one/productdetail";
import { useWish } from "../../context/wishlist";
import { useCompare } from "../../context/compare";
import { ToastContainer } from "react-toastify";
import { HeadphonesData } from "../../mock/headphones";

const RightArrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
  >
    <path
      d="M4.5 2.25L8.25 6L4.5 9.75"
      stroke="#77878F"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const sizeData = [
  { label: "13-inch Retina Display", value: 13 },
  { label: "14-inch Liquid Retina XDR Display", value: 14 },
  { label: "15.6-inch FHD Display", value: 15.6 },
  { label: "16-inch Liquid Retina Display", value: 16 },
  { label: "17-inch IPS Panel", value: 17 },
  { label: "18-inch WQHD+ Display", value: 18 },
  { label: "21-inch UltraSharp 4K Display", value: 21 },
];
const memoryData = [
  { label: "8GB DDR4 RAM", value: 8 },
  { label: "16GB Unified Memory", value: 16 },
  { label: "16GB DDR5 RAM", value: 16 },
  { label: "32GB DDR5 RAM", value: 32 },
  { label: "64GB DDR5 RAM", value: 64 },
  { label: "128GB ECC Memory", value: 128 },
];
const storageData = [
  { label: "256GB SSD", value: 256 },
  { label: "512GB SSD", value: 512 },
  { label: "1TB SSD", value: 1024 },
  { label: "2TB SSD", value: 2048 },
  { label: "1TB NVMe SSD", value: 1024 },
  { label: "2TB PCIe 4.0 NVMe", value: 2048 },
  { label: "4TB Ultra Fast SSD", value: 4096 },
];
const colors = [
  { name: "Silver", code: "#C0C0C0" },
  { name: "Space Gray", code: "#a11010" },
  { name: "Midnight", code: "#000" },
];

const HeadphoneDetail: React.FC = () => {
  const { addToCart } = useCart();
  const { addToCompare } = useCompare();
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<DataType | null>(null);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [selectedMemory, setSelectedMemory] = useState<number | null>(null);
  const [selectedStorage, setSelectedStorage] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<string | null>("first");

  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const { addToWish, removeFromWish, isInWishlist } = useWish();

  const handleToggleWish = (item: any) => {
    if (isInWishlist(item.id)) {
      removeFromWish(item.id);
    } else {
      addToWish({
        id: item.id,
        name: item.name,
        image: item.image,
        price: item.price,
        quantity: 1,
        color: item.color,
        size: item.size,
        memory: item.memory,
        storage: item.storage,
        rating: item.rating,
        description: item.description,
        inventoryStatus: item.inventoryStatus,
        category: item.category,
      });
    }
  };
  // const handleChange = (event: React.SyntheticEvent, newValue: string) => {
  //   setValue(newValue);
  // };
  const [coun, setCoun] = useState<number>(1);
  const increament = () => {
    if (coun < 10) setCoun((prev) => prev + 1);
  };
  const decrement = () => {
    if (coun > 1) setCoun((prev) => prev - 1);
  };

  useEffect(() => {
    const found = HeadphonesData.find((p) => p.id === id);
    setProduct(found || null);
  }, [id]);
  const handleAddToCart = () => {
    if (!product) return;

    addToCart({
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
      quantity: coun,
      color: selectedColor || undefined,
      // size: selectedSize || undefined,
      // memory: selectedMemory || undefined,
      // storage: selectedStorage || undefined,
      rating: product.rating,
    });
  };
  if (!product) {
    return <p>Product not found</p>;
  }
  const galleriaResponsiveOptions = [
    { breakpoint: "991px", numVisible: 4 },
    { breakpoint: "767px", numVisible: 3 },
    { breakpoint: "575px", numVisible: 1 },
  ];
  const galleriaImages = [
    {
      itemImageSrc: product.image,
      thumbnailImageSrc: product.image,
      alt: product.name,
    },
  ];

  const galleriaItemTemplate = (item: any) => (
    <img src={item.itemImageSrc} alt={item.alt} style={{ width: "100%" }} />
  );

  const galleriaThumbnailTemplate = (item: any) => (
    <img
      src={item.thumbnailImageSrc}
      alt={item.alt}
      style={{ width: "50px", height: "50px" }}
    />
  );

  return (
    <>
      <Navigation>
        <div className="one">
          <img src={Shop} alt="Home Icon" />
          <h2>Home</h2>
          <RightArrow />
          <h2>Shop</h2>
          <RightArrow />
          <h3>Electronics Devices</h3>
          <RightArrow />
          <h3>{product.name}</h3>
        </div>
      </Navigation>
      <MainDiv>
        <ImagePart>
          <Galleria
            value={galleriaImages}
            responsiveOptions={galleriaResponsiveOptions}
            numVisible={1}
            item={galleriaItemTemplate}
            thumbnail={galleriaThumbnailTemplate}
            style={{ maxWidth: "550px" }}
          />
        </ImagePart>
        <TextPart>
          <Upperone>
            <div className="Top">
              <h1>
                {" "}
                <StarRating
                  rating={product.rating}
                  numberOfRatings={product.rating}
                />{" "}
                Star Rating
              </h1>
              <h2>(21,671 User feedback)</h2>
            </div>
            <h2>
              {product.name}
              {product.description}
            </h2>

            <div className="Gridone">
              <div>
                <p>
                  Sku: <span> A264671</span>
                </p>
              </div>
              <div>
                <p>
                  Availability: <b>In Stock</b>
                </p>
              </div>
              <div>
                <p>
                  Brand: <span>Apple</span>
                </p>
              </div>
              <div>
                <p>
                  Category: <span>Electronics Devices</span>
                </p>
              </div>
            </div>
            <div className="Price">
              <h4>
                ${Math.floor(product.price * 0.9)}{" "}
                <h3>${product.price.toFixed(2)}</h3>
              </h4>

              <h5>10% OFF</h5>
            </div>
          </Upperone>
          <hr />
          <BottomOne>
            <div className="Gridone">
              <div className="Color">
                <p>Color</p>
                <div>
                  {" "}
                  {colors.map((color) => (
                    <b
                      key={color.name}
                      style={{
                        display: "flex",
                        backgroundColor: color.code,
                        border:
                          selectedColor === color.name
                            ? "3px solid #fa8232"
                            : "2px solid #ccc",
                      }}
                      onClick={() => setSelectedColor(color.name)}
                    >
                      <h2>{selectedColor === color.name && "✓"}</h2>
                    </b>
                  ))}
                </div>
              </div>
              <div>
                <p>Size</p>{" "}
                <Autocomplete
                  disablePortal
                  options={sizeData}
                  sx={{ width: 300 }}
                  onChange={(event, newValue) =>
                    setSelectedSize(newValue?.value || null)
                  }
                  renderInput={(params) => (
                    <TextField {...params} placeholder="Size" />
                  )}
                />
              </div>
              <div>
                <p>Memory</p>
                <Autocomplete
                  disablePortal
                  options={memoryData}
                  sx={{ width: 300 }}
                  onChange={(event, newValue) =>
                    setSelectedMemory(newValue?.value || null)
                  }
                  renderInput={(params) => (
                    <TextField {...params} placeholder="Memory" />
                  )}
                />
              </div>
              <div>
                <p>Storage</p>
                <Autocomplete
                  disablePortal
                  options={storageData}
                  sx={{ width: 300 }}
                  onChange={(event, newValue) =>
                    setSelectedStorage(newValue?.value || null)
                  }
                  renderInput={(params) => (
                    <TextField {...params} placeholder="Storage" />
                  )}
                />
              </div>
            </div>
          </BottomOne>
          <Lastone>
            <div className="Count">
              <button onClick={decrement}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M2.5 8H13.5"
                    stroke="#191C1F"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <h2>{coun}</h2>
              <button onClick={increament}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M2.5 8H13.5"
                    stroke="#191C1F"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8 2.5V13.5"
                    stroke="#191C1F"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
            <Button
              style={{
                width: 310,
                height: 56,
              }}
              onClick={handleAddToCart}
            >
              Add to cart
            </Button>

            <Button
              style={{
                width: 142,
                height: 56,
                backgroundColor: "white",
                color: "#FA8232",
                border: "2px solid #FA8232",
              }}
            >
              Buy Now
            </Button>
          </Lastone>
          <Withlist>
            <div>
              {" "}
              <h2>
                {" "}
                <img
                  onClick={() => handleToggleWish(product)}
                  src={isInWishlist(product.id) ? redHeart : Heart}
                  alt=""
                />
                Add to Wishlist
              </h2>
              <Link to="/compare">
                {" "}
                <img src={Circle} alt="" style={{ cursor: "pointer" }} />
              </Link>
              <h2
                style={{ cursor: "pointer" }}
                onClick={() => addToCompare({ ...product, quantity: 1 })}
              >
                Add to Compare
              </h2>
            </div>
            <div>
              <h2>
                Share product: <img src={Copy} alt="" />
                <img src={Face} alt="" />
                <img src={Beta} alt="" />
                <img src={Picon} alt="" />
              </h2>
            </div>
          </Withlist>
          <PaymentDiv>
            <h1>100% Guarantee Safe Checkout</h1>
            <img src={Payment} alt="" />
          </PaymentDiv>
        </TextPart>
      </MainDiv>
      <MainDiv>
        <TabDiv>
          <Tabs
            color="orange"
            radius="md"
            defaultValue="gallery"
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
              gap: "30px",
            }}
          >
            <Tabs.List
              style={{
                display: "flex",
                alignItems: "center",

                justifyContent: "center",
                gap: "30px",
              }}
            >
              <Tabs.Tab value="gallery">
                <h2>Description</h2>
              </Tabs.Tab>
              <Tabs.Tab value="messages">
                <h2>Additional information</h2>
              </Tabs.Tab>
              <Tabs.Tab value="settings">
                <h2>Specification</h2>
              </Tabs.Tab>
              <Tabs.Tab value="review">
                <h2>Review</h2>
              </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="gallery">
              <TabContent>
                <div>
                  <h2>Description</h2>
                  <p style={{ width: "576px" }}>
                    The most powerful MacBook Pro ever is here. With the
                    blazing-fast M1 Pro or M1 Max chip — the first Apple silicon
                    designed for pros — you get groundbreaking performance and
                    amazing battery life. Add to that a stunning Liquid Retina
                    XDR display, the best camera and audio ever in a Mac
                    notebook, and all the ports you need. The first notebook of
                    its kind, this MacBook Pro is a beast. M1 Pro takes the
                    exceptional performance of the M1 architecture to a whole
                    new level for pro users.
                  </p>
                  <p style={{ width: "576px" }}>
                    Even the most ambitious projects are easily handled with up
                    to 10 CPU cores, up to 16 GPU cores, a 16‑core Neural
                    Engine, and dedicated encode and decode media engines that
                    support H.264, HEVC, and ProRes codecs.
                  </p>
                </div>
                <div>
                  <h2>Feature</h2>
                  <p>
                    {" "}
                    <img src={Waranty} alt="" />
                    Free 1 Year Warranty
                  </p>
                  <p>
                    {" "}
                    <img src={Shipping} alt="" />
                    Free Shipping & Fasted Delivery
                  </p>
                  <p>
                    {" "}
                    <img src={Money} alt="" />
                    100% Money-back guarantee
                  </p>
                  <p>
                    {" "}
                    <img src={Support} alt="" />
                    24/7 Customer support
                  </p>
                  <p>
                    {" "}
                    <img src={Paymethod} alt="" />
                    Secure payment method
                  </p>
                </div>
                <div>
                  <h2>Shipping Information</h2>
                  <p>
                    <b>Courier:</b>2 - 4 days, free shipping{" "}
                  </p>
                  <p>
                    <b>Local Shipping:</b> up to one week, $19.00
                  </p>
                  <p>
                    <b>UPS Ground Shipping:</b> 4 - 6 days, $29.00
                  </p>
                  <p>
                    <b>Unishop Global Export:</b> 3 - 4 days, $39.00
                  </p>
                </div>
              </TabContent>
            </Tabs.Panel>

            <Tabs.Panel value="messages">
              {" "}
              <TabContent>
                <div>
                  <h2>Description</h2>
                  <p style={{ width: "576px" }}>
                    The most powerful MacBook Pro ever is here. With the
                    blazing-fast M1 Pro or M1 Max chip — the first Apple silicon
                    designed for pros — you get groundbreaking performance and
                    amazing battery life. Add to that a stunning Liquid Retina
                    XDR display, the best camera and audio ever in a Mac
                    notebook, and all the ports you need. The first notebook of
                    its kind, this MacBook Pro is a beast. M1 Pro takes the
                    exceptional performance of the M1 architecture to a whole
                    new level for pro users.
                  </p>
                  <p style={{ width: "576px" }}>
                    Even the most ambitious projects are easily handled with up
                    to 10 CPU cores, up to 16 GPU cores, a 16‑core Neural
                    Engine, and dedicated encode and decode media engines that
                    support H.264, HEVC, and ProRes codecs.
                  </p>
                </div>
                <div>
                  <h2>Feature</h2>
                  <p>
                    {" "}
                    <img src={Waranty} alt="" />
                    Free 1 Year Warranty
                  </p>
                  <p>
                    {" "}
                    <img src={Shipping} alt="" />
                    Free Shipping & Fasted Delivery
                  </p>
                  <p>
                    {" "}
                    <img src={Money} alt="" />
                    100% Money-back guarantee
                  </p>
                  <p>
                    {" "}
                    <img src={Support} alt="" />
                    24/7 Customer support
                  </p>
                  <p>
                    {" "}
                    <img src={Paymethod} alt="" />
                    Secure payment method
                  </p>
                </div>
                <div>
                  <h2>Shipping Information</h2>
                  <p>
                    <b>Courier:</b>2 - 4 days, free shipping{" "}
                  </p>
                  <p>
                    <b>Local Shipping:</b> up to one week, $19.00
                  </p>
                  <p>
                    <b>UPS Ground Shipping:</b> 4 - 6 days, $29.00
                  </p>
                  <p>
                    <b>Unishop Global Export:</b> 3 - 4 days, $39.00
                  </p>
                </div>
              </TabContent>
            </Tabs.Panel>

            <Tabs.Panel value="settings">
              {" "}
              <TabContent>
                <div>
                  <h2>Description</h2>
                  <p style={{ width: "576px" }}>
                    The most powerful MacBook Pro ever is here. With the
                    blazing-fast M1 Pro or M1 Max chip — the first Apple silicon
                    designed for pros — you get groundbreaking performance and
                    amazing battery life. Add to that a stunning Liquid Retina
                    XDR display, the best camera and audio ever in a Mac
                    notebook, and all the ports you need. The first notebook of
                    its kind, this MacBook Pro is a beast. M1 Pro takes the
                    exceptional performance of the M1 architecture to a whole
                    new level for pro users.
                  </p>
                  <p style={{ width: "576px" }}>
                    Even the most ambitious projects are easily handled with up
                    to 10 CPU cores, up to 16 GPU cores, a 16‑core Neural
                    Engine, and dedicated encode and decode media engines that
                    support H.264, HEVC, and ProRes codecs.
                  </p>
                </div>
                <div>
                  <h2>Feature</h2>
                  <p>
                    {" "}
                    <img src={Waranty} alt="" />
                    Free 1 Year Warranty
                  </p>
                  <p>
                    {" "}
                    <img src={Shipping} alt="" />
                    Free Shipping & Fasted Delivery
                  </p>
                  <p>
                    {" "}
                    <img src={Money} alt="" />
                    100% Money-back guarantee
                  </p>
                  <p>
                    {" "}
                    <img src={Support} alt="" />
                    24/7 Customer support
                  </p>
                  <p>
                    {" "}
                    <img src={Paymethod} alt="" />
                    Secure payment method
                  </p>
                </div>
                <div>
                  <h2>Shipping Information</h2>
                  <p>
                    <b>Courier:</b>2 - 4 days, free shipping{" "}
                  </p>
                  <p>
                    <b>Local Shipping:</b> up to one week, $19.00
                  </p>
                  <p>
                    <b>UPS Ground Shipping:</b> 4 - 6 days, $29.00
                  </p>
                  <p>
                    <b>Unishop Global Export:</b> 3 - 4 days, $39.00
                  </p>
                </div>
              </TabContent>
            </Tabs.Panel>
            <Tabs.Panel value="review">
              {" "}
              <TabContent>
                <div>
                  <h2>Description</h2>
                  <p style={{ width: "576px" }}>
                    The most powerful MacBook Pro ever is here. With the
                    blazing-fast M1 Pro or M1 Max chip — the first Apple silicon
                    designed for pros — you get groundbreaking performance and
                    amazing battery life. Add to that a stunning Liquid Retina
                    XDR display, the best camera and audio ever in a Mac
                    notebook, and all the ports you need. The first notebook of
                    its kind, this MacBook Pro is a beast. M1 Pro takes the
                    exceptional performance of the M1 architecture to a whole
                    new level for pro users.
                  </p>
                  <p style={{ width: "576px" }}>
                    Even the most ambitious projects are easily handled with up
                    to 10 CPU cores, up to 16 GPU cores, a 16‑core Neural
                    Engine, and dedicated encode and decode media engines that
                    support H.264, HEVC, and ProRes codecs.
                  </p>
                </div>
                <div>
                  <h2>Feature</h2>
                  <p>
                    {" "}
                    <img src={Waranty} alt="" />
                    Free 1 Year Warranty
                  </p>
                  <p>
                    {" "}
                    <img src={Shipping} alt="" />
                    Free Shipping & Fasted Delivery
                  </p>
                  <p>
                    {" "}
                    <img src={Money} alt="" />
                    100% Money-back guarantee
                  </p>
                  <p>
                    {" "}
                    <img src={Support} alt="" />
                    24/7 Customer support
                  </p>
                  <p>
                    {" "}
                    <img src={Paymethod} alt="" />
                    Secure payment method
                  </p>
                </div>
                <div>
                  <h2>Shipping Information</h2>
                  <p>
                    <b>Courier:</b>2 - 4 days, free shipping{" "}
                  </p>
                  <p>
                    <b>Local Shipping:</b> up to one week, $19.00
                  </p>
                  <p>
                    <b>UPS Ground Shipping:</b> 4 - 6 days, $29.00
                  </p>
                  <p>
                    <b>Unishop Global Export:</b> 3 - 4 days, $39.00
                  </p>
                </div>
              </TabContent>
            </Tabs.Panel>
          </Tabs>
        </TabDiv>
      </MainDiv>
      <MainDiv>
        <ProductGrid />
      </MainDiv>
      <ToastContainer />
    </>
  );
};

export default HeadphoneDetail;
