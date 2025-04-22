import React from "react";
import { Carousel } from "react-bootstrap";
import { MainDiv } from "./carusel.style";
import { Button } from "../main/homapage.style";
import Xbox from "../../../assets/homepage/xbox.png";
const ExampleCarousel = () => {
  return (
    <Carousel style={{ width: 872, height: 512 }}>
      <Carousel.Item>
        <MainDiv>
          <div>
            <h1>
              {" "}
              <div
                style={{ width: 24, height: 2, backgroundColor: "#2DA5F3" }}
              ></div>
              THE BEST PLACE TO PLAY
            </h1>
            <h2>Xbox Consoles</h2>
            <p>
              Save up to 50% on select Xbox games. Get 3 months of PC Game Pass
              for $2 USD.
            </p>
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
          <div style={{ display: "flex", flexDirection: "row" }}>
            <img src={Xbox} alt="" />
            <div style={{ marginLeft: -150 }} className="Circle">
              <h2>$299</h2>
            </div>
          </div>
        </MainDiv>
      </Carousel.Item>
      <Carousel.Item>
        <MainDiv>
          <div>
            <h1>
              {" "}
              <div
                style={{ width: 24, height: 2, backgroundColor: "#2DA5F3" }}
              ></div>
              THE BEST PLACE TO PLAY
            </h1>
            <h2>Xbox Consoles</h2>
            <p>
              Save up to 50% on select Xbox games. Get 3 months of PC Game Pass
              for $2 USD.
            </p>
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
          <div style={{ display: "flex", flexDirection: "row" }}>
            <img src={Xbox} alt="" />
            <div style={{ marginLeft: -150 }} className="Circle">
              <h2>$299</h2>
            </div>
          </div>
        </MainDiv>
      </Carousel.Item>
      <Carousel.Item>
        <MainDiv>
          <div>
            <h1>
              {" "}
              <div
                style={{ width: 24, height: 2, backgroundColor: "#2DA5F3" }}
              ></div>
              THE BEST PLACE TO PLAY
            </h1>
            <h2>Xbox Consoles</h2>
            <p>
              Save up to 50% on select Xbox games. Get 3 months of PC Game Pass
              for $2 USD.
            </p>
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
          <div style={{ display: "flex", flexDirection: "row" }}>
            <img src={Xbox} alt="" />
            <div style={{ marginLeft: -150 }} className="Circle">
              <h2>$299</h2>
            </div>
          </div>
        </MainDiv>
      </Carousel.Item>
    </Carousel>
  );
};

export default ExampleCarousel;
