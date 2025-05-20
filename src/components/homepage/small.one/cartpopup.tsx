import styled from "styled-components";
import { motion } from "framer-motion";
import { useCart } from "../../context/cart";
import { ThreeDot } from "react-loading-indicators";
import { Link } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

import { createGlobalStyle } from "styled-components";
interface CartItem {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

const CartSmall = ({
  onClose,
  cartItems,
}: {
  onClose: () => void;
  cartItems: CartItem[];
}) => {
  const { removeFromCart } = useCart();
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const handleRemove = (id: string) => {
    confirmAlert({
      title: "Confirm Removal",
      message: "Are you sure you want to remove this item from your cart?",
      buttons: [
        {
          label: "Yes",
          onClick: () => removeFromCart(id),
        },
        {
          label: "No",
        },
      ],
    });
  };
  return (
    <Container>
      <ConfirmAlertStyles />{" "}
      <MAinDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div>
          <h1>Shopping Cart ({cartItems.length})</h1>
          <h1 onClick={onClose} style={{ cursor: "pointer" }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M12.5 3.5L3.5 12.5"
                stroke="#929FA5"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.5 12.5L3.5 3.5"
                stroke="#929FA5"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </h1>
        </div>

        {cartItems.length > 0 ? (
          <>
            {cartItems.map((item) => (
              <InputWrapper key={item.id}>
                <img src={item.image} alt={item.name} />
                <div>
                  <h1>{item.name}</h1>
                  <h2>
                    ${item.price} x {item.quantity} = $
                    {item.price * item.quantity}
                  </h2>
                </div>
                <h1 onClick={() => handleRemove(item.id)}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M12.5 3.5L3.5 12.5"
                      stroke="#929FA5"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M12.5 12.5L3.5 3.5"
                      stroke="#929FA5"
                      strokeWidth="1.5"
                    />
                  </svg>
                </h1>
              </InputWrapper>
            ))}

            <Subtotal>
              <h2>Subtotal:</h2>
              <h3>${subtotal}.00</h3>
            </Subtotal>
          </>
        ) : (
          <div style={{ textAlign: "center", padding: "2rem" }}>
            🛒 Your cart is empty!
            <ThreeDot
              variant="bounce"
              color="#f39243"
              size="small"
              text=""
              textColor=""
            />
          </div>
        )}

        <Link style={{ textDecoration: "none" }} to="/shoppingcart">
          {" "}
          <button onClick={onClose}>
            Checkout now
            <svg width="21" height="20" viewBox="0 0 21 20" fill="none">
              <path
                d="M3.625 10H17.375"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.75 4.375L17.375 10L11.75 15.625"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </Link>

        <Singupstyle>
          <button>
            View Cart
            <svg width="21" height="20" viewBox="0 0 21 20" fill="none">
              <path
                d="M3.625 10H17.375"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.75 4.375L17.375 10L11.75 15.625"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </Singupstyle>
      </MAinDiv>
    </Container>
  );
};

const Container = styled.div`
  z-index: 999;
  position: absolute;
  top: 210px;
  left: 47vw;
  transform: translate(30px, -70px);
`;

const Subtotal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  h2 {
    color: var(--Gray-700, #475156);

    /* Body/Small/400 */
    font-family: "Public Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
  }
  h3 {
    color: var(--Gray-900, red);
    margin-left: 5px;
    /* Body/Small/500 */
    font-family: "Public Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 142.857% */
  }
`;
const MAinDiv = styled(motion.div)`
  box-shadow: 0 12px 48px rgba(0, 0, 0, 0.2);
  background: #fff;
  border: 1px solid #e4e7e9;
  border-radius: 4px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  div {
    display: flex;
    justify-content: space-between;
  }

  h1 {
    font-size: 20px;
    font-weight: 600;
    color: #191c1f;
    font-family: "Public Sans";
    margin: 0;
  }

  button {
    display: flex;
    width: 360px;
    padding: 0px 24px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 6px;
    background: #fa8232;
    color: #fff;
    border: none;
    font-family: "Public Sans";
    font-size: 14px;
    font-weight: 700;
    line-height: 48px;
    letter-spacing: 0.168px;
    text-transform: uppercase;
    transition: all 0.3s ease;

    &:hover {
      background: #e66d1e;
      box-shadow: 0px 4px 12px rgba(230, 109, 30, 0.4);
      transform: scale(1.02);
    }

    &:active {
      transform: scale(0.98);
      box-shadow: none;
    }
  }
`;

const Singupstyle = styled.div`
  button {
    display: flex;
    width: 360px;
    padding: 0px 24px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 6px;
    background: #fff;
    color: #fa8232;
    border: 2px solid #fa8232;
    font-family: "Public Sans";
    font-size: 14px;
    font-weight: 700;
    line-height: 48px;
    letter-spacing: 0.168px;
    text-transform: uppercase;
    transition: all 0.3s ease;

    &:hover {
      background: #fa8232;
      color: #fff;
      box-shadow: 0px 4px 12px rgba(250, 130, 50, 0.3);
      transform: scale(1.02);
    }

    &:active {
      transform: scale(0.98);
      box-shadow: none;
    }
  }
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border: 1px solid #e4e7e9;
    background: #f5f5f5;
  }

  div {
    display: flex;
    flex-direction: column;

    h1 {
      color: #191c1f;
      font-family: "Public Sans";
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      width: 200px;
    }

    h2 {
      color: #2da5f3;
      font-size: 14px;
      font-weight: 600;
      line-height: 20px;
      font-family: "Public Sans";
    }
  }
`;
const ConfirmAlertStyles = createGlobalStyle`
  .react-confirm-alert {
    font-family: "Public Sans", sans-serif;
  }

  .react-confirm-alert-overlay {
    background: rgba(0, 0, 0, 0.6);
    z-index: 1001 !important;
  }

  .react-confirm-alert-body {
    background: #fff4e6;
    border-radius: 12px;
    border: 2px solid #fa8232;
    padding: 30px;
    text-align: center;
  }

  .react-confirm-alert-body h1 {
    color: #191c1f;
    font-size: 20px;
    margin-bottom: 10px;
  }

  .react-confirm-alert-body p {
    color: #475156;
    font-size: 16px;
    margin-bottom: 20px;
  }

  .react-confirm-alert-button-group {
    display: flex;
    justify-content: center;
    gap: 20px;
  }

  .react-confirm-alert-button-group button {
    background: #fa8232;
    color: white;
    border: none;
    padding: 10px 20px;
    font-weight: 600;
    border-radius: 6px;
    cursor: pointer;
    transition: 0.3s ease;
  }

  .react-confirm-alert-button-group button:hover {
    background: #e66d1e;
  }

  .react-confirm-alert-button-group button:nth-child(2) {
    background: #f5f5f5;
    color: #fa8232;
    border: 1px solid #fa8232;
  }

  .react-confirm-alert-button-group button:nth-child(2):hover {
    background: #fa8232;
    color: white;
  }
`;
export default CartSmall;
