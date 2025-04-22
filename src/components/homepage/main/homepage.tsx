import {
  All,
  Backgroundiv,
  BestDealData,
  BestDeals,
  BlogDiv,
  Bottomdiv,
  Button,
  Container,
  LastDiv,
  LatestNews,
  MainDiv,
  MiddleDiv,
  RestBlog,
  Rightone,
  Topdiv,
  Wrapper,
  Wrapper2,
  Wrapper3,
} from "./homapage.style";
import { Tag } from "primereact/tag";
import Amazon from "../../../assets/homepage/amaron.svg";
import Google from "../../../assets/homepage/google-2015 1.svg";
import Toshiba from "../../../assets/homepage/toshiba-1 1.svg";
import Phillips from "../../../assets/homepage/philips 1.svg";
import Samsungimg from "../../../assets/homepage/samsung-4 1.svg";

import LeftImage from "../../../assets/homepage/XiaomiMi1Ultra.png";
import LeftImage2 from "../../../assets/homepage/XiaomiWirelessEarbuds.png";
import RightImage from "../../../assets/homepage/NewAppleHomepodMini.png";
import User from "../../../assets/homepage/UserCircle.svg";
import Dateimg from "../../../assets/homepage/CalendarBlank.svg";
import Commentimg from "../../../assets/homepage/ChatCircleDots.svg";
import CarouselFadeExample from "../small.one/carusel";
import Phone from "../../../assets/homepage/New Google Pixel 6 Pro.jpg";
import Mackbook from "../../../assets/homepage/macbook.png";
import Airpods from "../../../assets/homepage/airpods.png";
import Return from "../../../assets/homepage/Trophy.svg";
import MiddleImage from "../../../assets/homepage/middleimageyellow.jpg";
import Delivery from "../../../assets/homepage/Package.svg";
import Payment from "../../../assets/homepage/CreditCard.svg";
import Support from "../../../assets/homepage/Headphones.svg";
import SaleTimer from "../small.one/SaleTimer";
import BasicDemo from "../small.one/carusel.Bestdeal";
import NumScrollDemo from "../small.one/Categories.carusel";
import { smartphonesData } from "../../mock/smartPhone";
import StarRating from "../small.one/starRating";
import { DataType } from "../../type/type";
import { useState } from "react";
import { laptopsData } from "../../mock/laptop";
import { HeadphonesData } from "../../mock/headphones";
import { TVDATA } from "../../mock/tv";
import { keyboardMouseData } from "../../mock/keyboardMouseData";
import { printerData } from "../../mock/printer";
import { webcamData } from "../../mock/webcam";
import ProductGrid from "../small.one/productdetail";
import { blogPosts } from "../../mock/blogdata";

const Homepage = () => {
  const getSeverity = (item: DataType) => {
    if (item.inventoryStatus === "") {
      return "";
    }

    switch (item.inventoryStatus) {
      case "HOT":
      case "25% OFF":
        return "success";
      case "SALE":
        return "warning";
      case "BEST DEALS":
        return "danger";
      default:
        return "";
    }
  };
  const [selectedCategory, setSelectedCategory] =
    useState<string>("All Product");
  const [secondSelectedCategory, setSecondSelectedCategory] =
    useState<string>("All Product");

  const getCategoryData = () => {
    let data = [];

    switch (selectedCategory) {
      case "Smart Phone":
        data = smartphonesData;
        break;
      case "Laptop":
        data = laptopsData;
        break;
      case "Headphone":
        data = HeadphonesData;
        break;
      case "TV":
        data = TVDATA;
        break;
      default:
        data = [
          ...smartphonesData,
          ...laptopsData,
          ...HeadphonesData,
          ...TVDATA,
        ];
        return shuffleArray(data);
    }

    return data;
  };

  const shuffleArray = (array: any[]) => {
    return array
      .map((item) => ({ item, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ item }) => item);
  };

  const Seconddata = () => {
    let secondata = [];

    switch (secondSelectedCategory) {
      case "KEYBOARD & MOUSE":
        secondata = keyboardMouseData;
        break;
      case "PRINTER":
        secondata = printerData;
        break;
      case "Headphone":
        secondata = HeadphonesData;
        break;
      case "WEBCAM":
        secondata = webcamData;
        break;
      default:
        secondata = [
          ...keyboardMouseData,
          ...printerData,
          ...HeadphonesData,
          ...webcamData,
        ];
        return seconsdshuffleArray(secondata);
    }

    return secondata;
  };

  const seconsdshuffleArray = (array: any[]) => {
    return array
      .map((item) => ({ item, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ item }) => item);
  };

  return (
    <>
      <MainDiv>
        <CarouselFadeExample />
        <Rightone>
          <Topdiv>
            <div style={{ marginLeft: "-40px" }}>
              <h2>Summer Sales</h2>
              <h3>New Google Pixel 6 Pro</h3>
              <Button>
                Shop Now
                <svg
                  className="arrow-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M3.125 10H16.875"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.25 4.375L16.875 10L11.25 15.625"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Button>
            </div>
            <div className="Bottom">
              <p>29% off</p>
              <div
                style={{
                  position: "relative",

                  width: "100%",
                }}
              >
                <img
                  src={Phone}
                  alt="Top Left Image"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "170px",
                    height: "150px",
                    borderRadius: 20,
                  }}
                />
              </div>
            </div>
          </Topdiv>
          <Bottomdiv>
            <img src={Airpods} alt="" />
            <div>
              <h3>Xiaomi FlipBuds Pro</h3>
              <p>$299 USD</p>
              <Button>
                Shop Now
                <svg
                  className="arrow-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M3.125 10H16.875"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.25 4.375L16.875 10L11.25 15.625"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Button>
            </div>
          </Bottomdiv>
        </Rightone>
      </MainDiv>
      <All>
        <Container>
          <div className="Mainone">
            <img src={Delivery} alt="" />
            <div>
              <h2>Fastest Delivery</h2>
              <p>Delivery in 24/H</p>
            </div>
          </div>
          <b></b>
          <div className="Mainone">
            <img src={Return} alt="" />
            <div>
              <h2>24 Hours Return</h2>
              <p>100% money-back guarantee</p>
            </div>
          </div>
          <b></b>
          <div className="Mainone">
            <img src={Payment} alt="" />
            <div>
              <h2>Secure Payment</h2>
              <p>Your money is safe</p>
            </div>
          </div>
          <b></b>
          <div className="Mainone">
            <img src={Support} alt="" />
            <div>
              <h2>Support 24/7</h2>
              <p>Live contact/message</p>
            </div>
          </div>
        </Container>
      </All>
      <All>
        <BestDeals>
          <div>
            <h2>Best Deals</h2> <SaleTimer endTime="2025-03-28T23:58:59" />
          </div>
          <button>
            Browse All Products{" "}
            <svg
              className="arrow-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M3.125 10H16.875"
                stroke="#2DA5F3"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.25 4.375L16.875 10L11.25 15.625"
                stroke="#2DA5F3"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>{" "}
          </button>
        </BestDeals>
      </All>
      <BasicDemo />
      <All>
        <BestDealData>
          <h2>Shop with Categories</h2>
          <NumScrollDemo />
        </BestDealData>
      </All>
      <All>
        <MiddleDiv>
          <div className="Leftone">
            <h2>COMPUTER & ACCESSORIES</h2>
            <h3>32% Discount</h3>
            <h4>For all electronics products</h4>
            <h5>
              Offers ends in: <span>ENDS OF CHRISTMAS</span>
            </h5>
            <Button>
              Shop Now{" "}
              <svg
                className="arrow-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M3.75 12H20.25"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.5 5.25L20.25 12L13.5 18.75"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
            <img src={MiddleImage} alt="" />
          </div>
          <div className="Rightone">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "80px",
              }}
              className="Topone"
            >
              <h2>Featured Products</h2>
              <div>
                <h2
                  onClick={() => setSelectedCategory("All Product")}
                  className={selectedCategory === "All Product" ? "active" : ""}
                >
                  All Product
                </h2>
                <h2
                  onClick={() => setSelectedCategory("Smart Phone")}
                  className={selectedCategory === "Smart Phone" ? "active" : ""}
                >
                  Smart Phone
                </h2>
                <h2
                  onClick={() => setSelectedCategory("Laptop")}
                  className={selectedCategory === "Laptop" ? "active" : ""}
                >
                  Laptop
                </h2>
                <h2
                  onClick={() => setSelectedCategory("Headphone")}
                  className={selectedCategory === "Headphone" ? "active" : ""}
                >
                  Headphone
                </h2>
                <h2
                  onClick={() => setSelectedCategory("TV")}
                  className={selectedCategory === "TV" ? "active" : ""}
                >
                  TV
                </h2>
                <h3>
                  Browse All Products{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M3.125 10H16.875"
                      stroke="#FA8232"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.25 4.375L16.875 10L11.25 15.625"
                      stroke="#FA8232"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </h3>
              </div>
            </div>
            <div className="GridOne">
              {getCategoryData()
                .slice(4, 12)
                .map((item, index) => (
                  <Wrapper key={index}>
                    {item.inventoryStatus && (
                      <Tag
                        style={{
                          marginRight: "-130px",
                          padding: 10,
                          marginBottom: "-40px",
                          zIndex: 1,
                        }}
                        value={item.inventoryStatus}
                        severity={getSeverity(item)}
                      ></Tag>
                    )}
                    <img src={item.image} alt="" />
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <p>
                        <StarRating
                          numberOfRatings={item.rating}
                          rating={item.rating}
                        />
                      </p>
                      <h2>{item.name}</h2>
                      <h3>{item.price} $</h3>
                    </div>
                  </Wrapper>
                ))}
            </div>
          </div>
        </MiddleDiv>
      </All>
      <All>
        <Wrapper2>
          <div className="Leftone">
            <div>
              <h2>INTRODUCING</h2>
              <h3>
                New Apple <br />
                Homepod Mini
              </h3>
              <h4>
                Jam-packed with innovation, <br /> HomePod mini delivers
                unexpectedly.
              </h4>
              <Button>
                Shop Now
                <svg
                  className="arrow-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M3.75 12H20.25"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.5 5.25L20.25 12L13.5 18.75"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Button>
            </div>
            <img src={RightImage} alt="" />
          </div>
          <div className="Rightone">
            <div>
              {" "}
              <h2>INTRODUCING NEW</h2>
              <h3>
                Xiaomi Mi 11 Ultra <br /> 12GB+256GB
              </h3>
              <h4>
                *Data provided by internal <br /> laboratories. Industry
                measurment.
              </h4>
              <Button>
                Shop Now
                <svg
                  className="arrow-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M3.75 12H20.25"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.5 5.25L20.25 12L13.5 18.75"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Button>
            </div>
            <Wrapper3>
              {" "}
              <h5>$590</h5>
              <img src={LeftImage} alt="" />
            </Wrapper3>
          </div>
        </Wrapper2>
      </All>
      <All>
        <MiddleDiv>
          <div className="Rightone">
            <div className="Topone">
              <h2>Computer Accessories:</h2>
              <div>
                <h2
                  onClick={() => setSecondSelectedCategory("All Product")}
                  className={
                    secondSelectedCategory === "All Product" ? "active" : ""
                  }
                >
                  All Product
                </h2>
                <h2
                  onClick={() => setSecondSelectedCategory("Keyboard & Mouse")}
                  className={
                    secondSelectedCategory === "Keyboard & Mouse"
                      ? "active"
                      : ""
                  }
                >
                  Keyboard & Mouse
                </h2>
                <h2
                  onClick={() => setSecondSelectedCategory("WEBCAM")}
                  className={
                    secondSelectedCategory === "WEBCAM" ? "active" : ""
                  }
                >
                  Webcam
                </h2>
                <h2
                  onClick={() => setSecondSelectedCategory("Headphone")}
                  className={
                    secondSelectedCategory === "Headphone" ? "active" : ""
                  }
                >
                  Headphone
                </h2>
                <h2
                  onClick={() => setSecondSelectedCategory("PRINTER")}
                  className={
                    secondSelectedCategory === "PRINTER" ? "active" : ""
                  }
                >
                  Printer
                </h2>
                <h3>
                  Browse All Products{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M3.125 10H16.875"
                      stroke="#FA8232"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.25 4.375L16.875 10L11.25 15.625"
                      stroke="#FA8232"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </h3>
              </div>
            </div>
            <div className="GridOne">
              {Seconddata()
                .slice(4, 12)
                .map((item, index) => (
                  <Wrapper key={index}>
                    {item.inventoryStatus && (
                      <Tag
                        style={{
                          marginRight: "-130px",
                          padding: 10,
                          marginBottom: "-40px",
                          zIndex: 1,
                        }}
                        value={item.inventoryStatus}
                        severity={getSeverity(item)}
                      ></Tag>
                    )}
                    <img src={item.image} alt="" />
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <p>
                        <StarRating
                          numberOfRatings={item.rating}
                          rating={item.rating}
                        />
                      </p>
                      <h2>{item.name}</h2>
                      <h3>{item.price} $</h3>
                    </div>
                  </Wrapper>
                ))}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 20,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className="AnotherLeft">
              <img src={LeftImage2} alt="" />

              <h3>
                Xiaomi True <br /> Wireless Earbuds
              </h3>
              <h4>
                Escape the noise, It’s time to hear <br /> the magic with Xiaomi
                Earbuds.
              </h4>
              <h5>
                Only for : <span>$299 USD</span>
              </h5>
              <Button style={{ marginTop: "20px" }}>
                Shop Now{" "}
                <svg
                  className="arrow-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M3.75 12H20.25"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.5 5.25L20.25 12L13.5 18.75"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Button>
            </div>
            <div className="BottomBlue">
              <h1>SUMMER SALES</h1>
              <h2>37% DISCOUNT</h2>
              <h3>
                only for <span>SmartPhone</span> product.
              </h3>
              <Button style={{ backgroundColor: "#2DA5F3" }}>
                Shop Now{" "}
                <svg
                  className="arrow-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M3.75 12H20.25"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.5 5.25L20.25 12L13.5 18.75"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </MiddleDiv>
      </All>
      <All>
        <Backgroundiv>
          <div className="LeftDiv">
            <h2>SAVE UP TO $200.00</h2>
            <h3>Macbook Pro</h3>
            <h4>
              Apple M1 Max Chip. 32GB Unified <br /> Memory, 1TB SSD Storage
            </h4>
            <Button>
              Shop Now
              <svg
                className="arrow-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M3.75 12H20.25"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.5 5.25L20.25 12L13.5 18.75"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Button>
          </div>
          <div className="Righdiv">
            <h3>$1999</h3>
            <img src={Mackbook} alt="" />
          </div>
        </Backgroundiv>
      </All>
      <All>
        <ProductGrid />
      </All>
      <All>
        {" "}
        <LatestNews>
          <h3>Latest News</h3>
          <div
            style={{
              display: "flex",

              gap: 24,
            }}
          >
            {blogPosts.slice(0, 3).map((item, index) => (
              <BlogDiv key={index}>
                <img src={item.blog.Image} alt="" />
                <RestBlog>
                  <div className="Data">
                    <p>
                      {" "}
                      <img src={User} alt="" /> {item.blog.author}
                    </p>
                    <p>
                      {" "}
                      <img src={Dateimg} alt="" /> {item.blog.date}
                    </p>
                    <p>
                      {" "}
                      <img src={Commentimg} alt="" /> {item.blog.comment}
                    </p>
                  </div>
                  <h1>{item.blog.name}</h1>
                  <h5>{item.blog.description1}</h5>
                  <button>
                    Read More{" "}
                    <svg
                      className="arrow-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M3.125 10H16.875"
                        stroke="#FA8232"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M11.25 4.375L16.875 10L11.25 15.625"
                        stroke="#FA8232"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </RestBlog>
              </BlogDiv>
            ))}
          </div>
        </LatestNews>
      </All>

      <LastDiv>
        <h6>Subscribe to our newsletter</h6>
        <p>
          Praesent fringilla erat a lacinia egestas. Donec vehicula tempor
          libero et cursus. Donec non quam urna. Quisque vitae porta ipsum.
        </p>
        <div>
          <input type="email" name="email" placeholder="Your Email" id="" />
          <Button>
            Subscribe
            <svg
              className="arrow-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M3.125 10H16.875"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.25 4.375L16.875 10L11.25 15.625"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Button>
        </div>
        <b>
          <img src={Google} alt="" />
          <img src={Amazon} alt="" />
          <img src={Phillips} alt="" />
          <img src={Toshiba} alt="" />
          <img src={Samsungimg} alt="" />
        </b>
      </LastDiv>
    </>
  );
};

export default Homepage;
