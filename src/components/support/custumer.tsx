import { Navigated } from "../compare/compare.style";
import {
  BackDiv,
  Belowgrid,
  Gridone,
  Last,
  LastDiv,
  MainDiv,
} from "./support.style";
import home from "../../assets/shop/House.svg";
import { TextInput } from "@mantine/core";
import { Button } from "../homepage/main/homapage.style";
import Iconloop from "../../assets/support/MagnifyingGlass.svg";
import Img1 from "../../assets/support/Truck.svg";
import Img2 from "../../assets/support/LockOpen.svg";
import Call from "../../assets/support/PhoneCall.svg";
import Img3 from "../../assets/support/CreditCard.svg";
import Img4 from "../../assets/support/User.svg";
import Img5 from "../../assets/support/Stack.svg";
import Img6 from "../../assets/support/Notepad.svg";
import Img7 from "../../assets/support/CreditCard.svg";
import Img8 from "../../assets/support/Storefront.svg";
import Message from "../../assets/support/ChatCircleDots.svg";
const Custumercomponent = () => {
  return (
    <div>
      <Navigated>
        <img src={home} alt="" />
        <h2>Home</h2>
        <h2>{">"}</h2>
        <h3>Customer support</h3>
      </Navigated>

      <BackDiv>
        <div style={{ marginLeft: "-42rem" }}>
          {" "}
          <h2>HELP CENTER</h2>
          <h3>How we can help you!</h3>
          <h1>
            <img src={Iconloop} alt="" />
            <TextInput type="text" placeholder="Enter your questions" />
            <Button style={{ border: "none" }}>Search</Button>
          </h1>
        </div>
      </BackDiv>
      <MainDiv>
        <h2>What can we assist you with today?</h2>
        <Gridone>
          <div>
            <img src={Img1} alt="" />
            <h3>Track Order</h3>
          </div>
          <div>
            <img src={Img2} alt="" />
            <h3>Reset Password</h3>
          </div>
          <div>
            <img src={Img3} alt="" />
            <h3>Payment Option</h3>
          </div>
          <div>
            <img src={Img4} alt="" />
            <h3>User & Account</h3>
          </div>
          <div>
            <img src={Img5} alt="" />
            <h3>Wishlist & Compare</h3>
          </div>
          <div>
            <img src={Img6} alt="" />
            <h3>Shipping & Billing</h3>
          </div>
          <div>
            <img src={Img7} alt="" />
            <h3>Shoping Cart & Wallet</h3>
          </div>{" "}
          <div>
            <img src={Img8} alt="" />
            <h3>Sell on Clicon</h3>
          </div>
        </Gridone>
        <h2>Popular Topics</h2>
        <Belowgrid>
          <h3>• What are the 'Delivery Timelines'? </h3>
          <h3>• What is 'Discover Your Daraz Campaign 2022'?</h3>
          <h3>• How to cancel Clicon Order.</h3>
          <h3>• Ask the Digital and Device Community</h3>
          <h3>• How to change my shop name?</h3>
          <h3>• What is the Voucher Offer in this Campaign?</h3>{" "}
          <h3>• How do I return my item?</h3>{" "}
          <h3>• What is Clicons Returns Policy?</h3>
          <h3>• How long is the refund process?</h3>
        </Belowgrid>
      </MainDiv>
      <LastDiv>
        <h2>CONTACT US</h2>
        <h3>
          Don’t find your answer. <br />
          Contact with us
        </h3>
        <div>
          <Last>
            <img src={Call} alt="" />
            <div>
              <h4>Call us now</h4>
              <p>
                we are available online from 9:00 AM to 5:00 PM <br />{" "}
                (GMT95:45) Talk with use now
              </p>
              <h5>+82-1082-302-277</h5>
              <Button className="Blue">
                Call now{" "}
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
          </Last>

          <Last>
            <img className="Image" src={Message} alt="" />
            <div>
              <h4>Chat with us</h4>

              <p>
                we are available online from 9:00 AM to 5:00 PM <br />{" "}
                (GMT95:45) Talk with use now
              </p>

              <h5>abdulaxadjon9"gmail.com</h5>

              <Button className="Green">
                Contact Us
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
          </Last>
        </div>
      </LastDiv>
    </div>
  );
};

export default Custumercomponent;
