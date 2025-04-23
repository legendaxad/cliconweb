import React from "react";
import { BottomDiv, Delivery, OrderMainDiv, TopDiv } from "./trackorder.style";
import { Navigated } from "../compare/compare.style";
import home from "../../assets/shop/House.svg";
import { MainDiv } from "../product/detail.style";
const Orderdetail = () => {
  return (
    <>
      <Navigated>
        <img src={home} alt="" /> <h2>Home</h2>
        <h2>{">"}</h2> <h2>Track Order</h2>
        <h2>{">"}</h2>
        <h3>Order Detail</h3>
      </Navigated>
      <MainDiv>
        <OrderMainDiv>
          <TopDiv>
            <div>
              <h1>#96459761</h1>
              <h2>
                <b>4 Products:</b>Order Placed in 17 Jan, 2021 at 7:32 PM
              </h2>
            </div>
            <h4>$1199.00</h4>
          </TopDiv>
          <h6>
            Order expected arrival <b> 23 Jan, 2025</b>
          </h6>
          <Delivery>
            <div>
              <img src="" alt="" />
              <h2>Order Placed</h2>
            </div>
            <div>
              <img src="" alt="" />
              <h2>Packaging</h2>
            </div>
            <div>
              <img src="" alt="" />
              <h2>On The Road</h2>
            </div>
            <div>
              <img src="" alt="" />
              <h2>Delivered</h2>
            </div>
          </Delivery>
          <div className="Line"></div>
          <h5>Order Activity</h5>
          <BottomDiv>
            <img src="" alt="" />
            <div>
              <h2>
                Your order has been delivered. Thank you for shopping at Clicon!
              </h2>
              <h3>23 Jan, 2021 at 7:32 PM</h3>
            </div>
          </BottomDiv>
          <BottomDiv>
            <img className="Image" src="" alt="" />
            <div>
              <h2>
                Our delivery man (John Wick) Has picked-up your order for
                delvery.
              </h2>
              <h3>23 Jan, 2021 at 2:00 PM</h3>
            </div>
          </BottomDiv>
          <BottomDiv>
            <img className="Image" src="" alt="" />
            <div>
              <h2>Your order has reached at last mile hub.</h2>
              <h3>23 Jan, 2021 at 7:32 PM</h3>
            </div>
          </BottomDiv>
          <BottomDiv>
            <img className="Image" src="" alt="" />
            <div>
              <h2>Your order on the way to (last mile) hub.</h2>
              <h3>23 Jan, 2021 at 7:32 PM</h3>
            </div>
          </BottomDiv>
          <BottomDiv>
            <img src="" alt="" />
            <div>
              <h2>Your order is successfully verified.</h2>
              <h3>23 Jan, 2021 at 7:32 PM</h3>
            </div>
          </BottomDiv>
          <BottomDiv>
            <img className="Image" src="" alt="" />
            <div>
              <h2>Your order has been confirmed.</h2>
              <h3>23 Jan, 2021 at 7:32 PM</h3>
            </div>
          </BottomDiv>
        </OrderMainDiv>
      </MainDiv>
    </>
  );
};

export default Orderdetail;
