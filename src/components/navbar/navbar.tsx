import {
  BottomDiv,
  CartDiv,
  LeftOne,
  ManiDiv,
  Navigation,
  RightDiv,
} from "./navbar.style";
import { AnimatePresence } from "framer-motion";

import Compare from "../../assets/navbar/ArrowsCounterClockwise.svg";
import Track from "../../assets/navbar/MapPinLine.svg";
import Customer from "../../assets/navbar/Headphones.svg";
import Help from "../../assets/navbar/Info.svg";
import PhoneCall from "../../assets/navbar/PhoneCall.svg";
import Insta from "../../assets/navbar/Instagram (1).svg";
import Face from "../../assets/navbar/Facebook (1).svg";
import Prin from "../../assets/navbar/Pinterest.svg";
import Red from "../../assets/navbar/Reddit.svg";
import Logo from "../../assets/navbar/Icon.svg";
import Loop from "../../assets/navbar/MagnifyingGlass.svg";
import Twit from "../../assets/navbar/Twitter.svg";
import Youtube from "../../assets/navbar/Youtube.svg";
import User from "../../assets/navbar/User.svg";
import Heart from "../../assets/navbar/Heart.svg";
import Shop from "../../assets/navbar/shopping_cart_32dp_FFF_FILL0_wght400_GRAD0_opsz40.svg";
import { useState } from "react";

import CategoryList from "../homepage/small.one/homepopup";
import Language from "../homepage/small.one/language";
import Usdcomponents from "../homepage/small.one/usd";
import SingupSmall from "../homepage/small.one/singup";
import CartSmall from "../homepage/small.one/cartpopup";
import { useCart } from "../context/cart";
import { Link, NavLink } from "react-router-dom";
import { useWish } from "../context/wishlist";

const Navbarcomponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setuser] = useState(false);
  const [cart, setcart] = useState(false);
  const { cartItems } = useCart();
  const { wishItems } = useWish();
  const totalCount = cartItems.length;
  const totalWish = wishItems.length;
  return (
    <>
      <ManiDiv>
        <h2>Welcome to Clicon online eCommerce store. </h2>
        <RightDiv>
          <h3>Follow us:</h3>
          <img src={Insta} alt="" />
          <img src={Face} alt="" />
          <img src={Prin} alt="" />
          <img src={Red} alt="" />
          <img src={Twit} alt="" />
          <img src={Youtube} alt="" />
          <div
            style={{
              width: 2,
              marginLeft: 24,
              marginRight: 24,
              height: 28,
              opacity: 0.46,
              backgroundColor: "white",
            }}
          ></div>
          <LeftOne>
            {" "}
            <Language />
            <Usdcomponents />
          </LeftOne>
        </RightDiv>
      </ManiDiv>
      <BottomDiv>
        <Link style={{ textDecoration: "none" }} to="/">
          {" "}
          <div>
            <img
              src={Logo}
              style={{ width: 48, height: 48, marginRight: 10 }}
              alt=""
            />
            <h3>CLICON</h3>
          </div>
        </Link>
        <div>
          {" "}
          <input type="text" placeholder="search ...." />
          <img
            style={{ marginLeft: "-35px", width: 20, height: 20 }}
            src={Loop}
            alt=""
          />
        </div>
        <div style={{ gap: 20 }}>
          {" "}
          <CartDiv>
            {" "}
            <img onClick={() => setcart(!cart)} src={Shop} alt="" />
            {totalCount > 0 && <div>{totalCount}</div>}
          </CartDiv>
          <CartDiv>
            {" "}
            <Link to="/wishlist">
              <img src={Heart} alt="" />
            </Link>
            {totalWish > 0 && <div>{totalWish}</div>}
          </CartDiv>
          <img onClick={() => setuser(!user)} src={User} alt="" />
        </div>
      </BottomDiv>
      <Navigation>
        <div className="Leftone">
          <div onClick={() => setIsOpen(!isOpen)} className="Main">
            <h2>All Category</h2>
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M4.5 15L12 7.5L19.5 15"
                  stroke="#191C1F"
                  stroke-width="1.9"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M13 6L8 11L3 6"
                  stroke="#191C1F"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            )}
          </div>
          <div>
            {" "}
            <NavLink
              to="/trackorder"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              <img src={Track} alt="" />
              <h3>Track Order</h3>
            </NavLink>
          </div>
          <div>
            {" "}
            <NavLink
              to="/customersupport"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              <img src={Customer} alt="" />
              <h3>Customer Support</h3>{" "}
            </NavLink>
          </div>

          <div>
            <NavLink
              to="/compare"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              <img src={Compare} alt="" />
              <h3>Compare</h3>
            </NavLink>
          </div>

          <div>
            {" "}
            <NavLink
              to="/needhelp"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              <img src={Help} alt="" />
              <h3>Need Help</h3>{" "}
            </NavLink>
          </div>
        </div>
        <div className="Rightone">
          <img src={PhoneCall} alt="" />
          <h2>+1-202-555-0104</h2>
        </div>
      </Navigation>

      {isOpen && (
        <div>
          {" "}
          <CategoryList />
        </div>
      )}

      {user && (
        <div>
          {" "}
          <AnimatePresence>
            <SingupSmall onClose={() => setuser(false)} />
          </AnimatePresence>
        </div>
      )}
      {cart && (
        <div>
          {" "}
          <AnimatePresence>
            <CartSmall onClose={() => setcart(false)} cartItems={cartItems} />
          </AnimatePresence>
        </div>
      )}
    </>
  );
};

export default Navbarcomponent;
