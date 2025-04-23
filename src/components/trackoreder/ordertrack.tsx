import { Context, MainDiv } from "./trackorder.style";
import { Navigated } from "../compare/compare.style";
import home from "../../assets/shop/House.svg";
import { Button } from "../homepage/main/homapage.style";
import { InputText } from "primereact/inputtext";
import { Link } from "react-router-dom";
const Ordertrack = () => {
  return (
    <>
      <Navigated>
        <img src={home} alt="" />
        <h2>Home</h2>
        <h2>{">"}</h2>
        <h3>track order</h3>
      </Navigated>
      <MainDiv>
        {" "}
        <Context>
          {" "}
          <div>
            {" "}
            <h1>Track Your Order</h1>
            <h2>
              {" "}
              To track your order please enter your order ID in the input field
              below and press the “Track Order” button. this was given to you on
              your receipt and in the confirmation email you should have
              received.
            </h2>
          </div>
          <div className="Flex">
            <div>
              <h3>Order ID</h3>
              <InputText type="text" name="" id="" placeholder="Enter ID" />
            </div>
            <div>
              {" "}
              <h3>Billing Email</h3>
              <InputText
                type="text"
                name=""
                id=""
                placeholder="Email address"
              />
            </div>
          </div>
          <h5>
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                stroke="#5F6C72"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.25 11.25H12V16.5H12.75"
                stroke="#5F6C72"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.8125 9C12.4338 9 12.9375 8.49632 12.9375 7.875C12.9375 7.25368 12.4338 6.75 11.8125 6.75C11.1912 6.75 10.6875 7.25368 10.6875 7.875C10.6875 8.49632 11.1912 9 11.8125 9Z"
                fill="#5F6C72"
              />
            </svg>
            Order ID that we sended to your in your email address.
          </h5>{" "}
          <Link style={{ textDecoration: "none" }} to="/track-detail">
            {" "}
            <Button style={{ width: 200 }}>
              Track Order
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
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.5 5.25L20.25 12L13.5 18.75"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>{" "}
            </Button>
          </Link>
        </Context>
      </MainDiv>
    </>
  );
};

export default Ordertrack;
