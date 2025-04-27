import {
  GridDiv,
  ImageDiv,
  Leftone,
  MainDiv,
  Middleone,
  Rightone,
} from "./about.style";
import { Navigated } from "../compare/compare.style";
import Home from "../../assets/shop/House.svg";
import About1 from "../../assets/about/about1.png";
import Img1 from "../../assets/about/Image (19).png";
import Img2 from "../../assets/about/Image (20).png";
import Img3 from "../../assets/about/Image (21).png";
import Img4 from "../../assets/about/Image (22).png";
import Img5 from "../../assets/about/Image (23).png";
import Img6 from "../../assets/about/Image (24).png";
import Img7 from "../../assets/about/Image (25).png";
import Img8 from "../../assets/about/Image (26).png";
import Icon from "../../assets/about/Checks.svg";
const Aboutcomponent = () => {
  return (
    <div>
      <Navigated>
        <img src={Home} alt="" />
        <h2>Home</h2> <h2>{">"}</h2> <h2>About</h2>
      </Navigated>
      <MainDiv>
        <Leftone>
          <h1>WHO WE ARE</h1>
          <h2>
            Kinbo - largest electronics <br /> retail shop in the world.
          </h2>
          <h3>
            Pellentesque ultrices, dui vel hendrerit iaculis, ipsum velit
            vestibulum risus, ac tincidunt diam lectus id magna. Praesent
            maximus lobortis neque sit amet rhoncus. Nullam tempus lectus a dui
            aliquet, non ultricies nibh elementum. Nulla ac nulla dolor.{" "}
          </h3>
          <div>
            {" "}
            <h4>
              <img src={Icon} alt="" />
              Great 24/7 customer services.
            </h4>
            <h4>
              <img src={Icon} alt="" />
              600+ Dedicated employe.
            </h4>
            <h4>
              <img src={Icon} alt="" />
              50+ Branches all over the world.
            </h4>
            <h4>
              <img src={Icon} alt="" />
              Over 1 Million Electronics Products
            </h4>
          </div>
        </Leftone>
        <Rightone
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <img src={About1} alt="About Section" />
        </Rightone>
      </MainDiv>
      <Middleone>
        <h2>Our core team member</h2>
        <GridDiv>
          <div>
            <img src={Img8} alt="" />
            <h1>
              <h2>Kevin Gilbert</h2>
              <h3>Chief Executive Officer</h3>
            </h1>
          </div>
          <div>
            {" "}
            <img src={Img7} alt="" />{" "}
            <h1>
              <h2>Kevin Gilbert</h2>
              <h3>Assistant of CEO</h3>
            </h1>
          </div>
          <div>
            {" "}
            <img src={Img6} alt="" />
            <h1>
              <h2>Kevin Gilbert</h2>
              <h3>Head of Designer</h3>
            </h1>
          </div>
          <div>
            {" "}
            <img src={Img5} alt="" />
            <h1>
              <h2>Kevin Gilbert</h2>
              <h3>UX Designer</h3>
            </h1>
          </div>
          <div>
            {" "}
            <img src={Img4} alt="" />
            <h1>
              <h2>Kevin Gilbert</h2>
              <h3>Product Designer</h3>
            </h1>
          </div>
          <div>
            {" "}
            <img src={Img3} alt="" />
            <h1>
              <h2>Kevin Gilbert</h2>
              <h3>Head of Development</h3>
            </h1>
          </div>
          <div>
            {" "}
            <img src={Img2} alt="" />
            <h1>
              <h2>Kevin Gilbert</h2>
              <h3>Design Engineer</h3>
            </h1>
          </div>
          <div>
            {" "}
            <img src={Img1} alt="" />
            <h1>
              <h2>Kevin Gilbert</h2>
              <h3>UI Designer</h3>
            </h1>
          </div>
        </GridDiv>
        <ImageDiv>
          <div>
            {" "}
            <h2>
              Your trusted and <br /> reliable retail shop
            </h2>{" "}
            <h3>
              Praesent sed semper metus. Nunc aliquet dolor mauris, et fringilla
              elit gravida eget. Nunc consequat auctor urna a placerat.
            </h3>
          </div>
        </ImageDiv>
        {/* <LastDiv>
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
      </LastDiv> */}
      </Middleone>
    </div>
  );
};

export default Aboutcomponent;
