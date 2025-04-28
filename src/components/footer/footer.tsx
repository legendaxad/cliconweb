import { FirstDiv, LastDiv, MiddleDiv, THirdDiv, Wrapper } from "./footerstyle";
import Icon from "../../assets/homepage/Icon (1).svg";
import Play from "../../assets/homepage/Icon=google-play 1.svg";
import Apple from "../../assets/homepage/Apple---Negative 1.svg";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <Wrapper>
      <FirstDiv>
        {" "}
        <h2>
          <img src={Icon} alt="" />
          CLICON
        </h2>
        <h3>Customer Supports:</h3>
        <h4>(629) 555-0129</h4>
        <h5>4517 Washington Ave. Manchester, Kentucky 39495</h5>
        <h6>info@kinbo.com</h6>
      </FirstDiv>
      <MiddleDiv>
        {" "}
        <h2>Top Category</h2>
        <p>
          <div></div>Computer & Laptop
        </p>
        <p>
          <div></div>SmartPhone
        </p>
        <p>
          <div></div>Headphone
        </p>
        <p>
          <div></div>Accessories
        </p>
        <p>
          <div></div>Camera & Photo
        </p>
        <p>
          <div></div>TV & Homes
        </p>
        <div>
          {" "}
          <h4>
            Browse All Product{" "}
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
                stroke="#EBC80C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.25 4.375L16.875 10L11.25 15.625"
                stroke="#EBC80C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </h4>
        </div>
      </MiddleDiv>
      <MiddleDiv>
        {" "}
        <h2>Quick links</h2>
        <p>
          <div></div>Shop Product
        </p>
        <p>
          <div></div>Shoping Cart
        </p>
        <Link style={{textDecoration:'none'}} to={'/wishlist'}>   <p>
          <div></div>Wishlist
        </p></Link>
        <Link style={{textDecoration:'none'}} to={'/compare'}> <p>
          <div></div>Compare
        </p></Link>
        <Link style={{textDecoration:'none'}} to={'/customersupport'}>  <p>
          <div></div>Customer Help
        </p></Link>
      <Link style={{textDecoration:'none'}} to={'/about'}>  <p>
          <div></div>About Us
        </p></Link>
      </MiddleDiv>
      <THirdDiv>
        {" "}
        <h2>Download APP</h2>
        <div>
          <img src={Play} alt="" />
          <table>
            <p>Get it now</p>
            <b>Google Play</b>
          </table>
        </div>
        <div>
          <img src={Apple} alt="" />
          <table>
            <p>Get it now</p>
            <b>App Store</b>
          </table>
        </div>
      </THirdDiv>
      <LastDiv>
        <h1>Popular Tag</h1>
        <div className="Mainone">
          <h2>Game</h2>
          <h2>TV</h2>
          <h2>iPhone</h2>
          <h2>Asus Laptops</h2>
        </div>
        <div className="Mainone">
          <h2>Macbook </h2>
          <h2>SSD</h2>
          <h2>Graphics Card </h2>
        </div>
        <div className="Mainone">
          <h2>Power Bank </h2>
          <h2>Smart TV</h2>
          <h2>Speaker</h2>
        </div>
        <div className="Mainone">
          <h2>Tablet</h2>
          <h2>Microwave</h2>
          <h2>Samsung</h2>
        </div>
      </LastDiv>
    </Wrapper>
  );
};

export default Footer;
