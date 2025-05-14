import {
  CountStyle,
  LASTONE,
  MainDiv,
  Subtotal,
  Wrappercart,
} from "./shopping.style";
import { useCart } from "../context/cart";
import { useNavigate } from "react-router-dom";
import { Button } from "../homepage/main/homapage.style";

const Cartcomponet = () => {
  const { cartItems, removeFromCart, changeQuantity } = useCart();

  const Discount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity * 0.15, // 14% discount
    0
  );
  const originalTotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const discountAmount = originalTotal * 0.14;
  const discountedTotal = originalTotal - discountAmount;
  const tax = 30;
  const totalWithTax = discountedTotal + tax;
  const navigate = useNavigate();

  return (
    <MainDiv>
      <>
        {cartItems.length > 0 ? (
          <>
            <Wrappercart>
              <h1>Shopping Cart</h1>
              <table>
                <thead>
                  <tr style={{ backgroundColor: "#F2F4F5" }}>
                    <th style={{ width: "220px" }}>Product</th>
                    <th>Price</th>
                    <th style={{ width: 148, textAlign: "center" }}>
                      Quantity
                    </th>
                    <th>Total</th>
                    <th>Remove</th>
                  </tr>
                </thead>
              </table>
              {cartItems.map((item) => (
                <table key={item.id}>
                  <tbody>
                    <tr>
                      <td className="Name">
                        <h3 style={{ width: "200px" }}>
                          <img src={item.image} alt={item.name} />
                          {item.name}
                        </h3>
                      </td>
                      <td>
                        <h3>${item.price.toFixed(1)}</h3>
                      </td>
                      <td>
                        <CountStyle>
                          <div className="Count">
                            <button
                              onClick={() =>
                                changeQuantity(item.id, item.quantity - 1)
                              }
                            >
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
                            <h2>{item.quantity}</h2>
                            <button
                              onClick={() =>
                                changeQuantity(item.id, item.quantity + 1)
                              }
                            >
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
                        </CountStyle>
                      </td>
                      <td>
                        <h3>${(item.price * item.quantity).toFixed(1)}</h3>
                      </td>
                      <td>
                        <button onClick={() => removeFromCart(item.id)}>
                          X
                        </button>
                      </td>
                    </tr>
                  </tbody>
                  <hr style={{ marginTop: 0 }} />
                </table>
              ))}

              <LASTONE>
                <button onClick={() => navigate(-1)}>
                  {" "}
                  <svg
                    className="arrow"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M16.875 10H3.125"
                      stroke="#fff"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.75 4.375L3.125 10L8.75 15.625"
                      stroke="#fff"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Return to shop
                </button>
                <button>Update cart</button>
              </LASTONE>
            </Wrappercart>
            <div>
              {" "}
              <Subtotal>
                <h1>Card Totals</h1>
                <div className="Context">
                  <h2>Subtotal</h2>{" "}
                  <h3>
                    $
                    {cartItems.reduce(
                      (acc, item) => acc + item.price * item.quantity,
                      0
                    )}
                  </h3>
                </div>
                <div className="Context">
                  <h2>Shipping</h2> <h3>Free</h3>
                </div>
                <div className="Context">
                  <h2>Discount</h2> <h3>${Discount.toFixed(2)}</h3>
                </div>
                <div className="Context">
                  <h2>Tax</h2> <h3>$30</h3>
                </div>
                <hr />
                <div className="Context">
                  <h2 style={{ fontWeight: "bold", color: "#191C1F" }}>
                    Total
                  </h2>{" "}
                  <h3
                    style={{
                      fontWeight: "bold",
                      color: "#191C1F",
                      fontSize: "20px",
                    }}
                  >
                    ${totalWithTax.toFixed(2)}
                  </h3>
                </div>
                <Button>
                  {" "}
                  Checkout
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
                  </svg>
                </Button>
              </Subtotal>
              <Subtotal style={{ marginTop: "20px" }}>
                {" "}
                <h4>Coupon Code</h4>
                <hr />
                <input type="text" name="" id="" placeholder="Coupon Code" />
                <Button style={{ backgroundColor: "#2da5f3" }}>
                  Apply Coupon{" "}
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
                  </svg>
                </Button>
              </Subtotal>
            </div>
          </>
        ) : (
          <h1>Cart is empty</h1>
        )}
      </>
    </MainDiv>
  );
};

export default Cartcomponet;
