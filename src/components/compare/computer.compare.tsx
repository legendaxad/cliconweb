import { useCompare } from "../context/compare";
import { ToastContainer } from "react-toastify";
import { ThreeDot } from "react-loading-indicators";

import {
  Context,
  MainDiv,
  Navigated,
  NoData,
  WrapperDiv,
} from "./compare.style";
import XImage from "../../assets/shop/XCircle.svg";
import home from "../../assets/shop/House.svg";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
export const ComparePage = () => {
  const { compareItems, removeFromCompare, clearCompare } = useCompare();
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  if (compareItems.length === 0)
    return (
      <NoData onClick={goBack}>
        {" "}
        <Button variant="outline-primary" size="lg">
          Please add items to compare
        </Button>
        <ThreeDot
          variant="bounce"
          color="#f39243"
          size="small"
          text=""
          textColor=""
        />
      </NoData>
    );

  return (
    <>
      {" "}
      <Navigated>
        <img src={home} alt="" />
        <h2>Home </h2>
        <h2>{">"}</h2>
        <h3>Compare</h3>
      </Navigated>
      <MainDiv>
        <div style={{ display: "flex", gap: "1rem", overflowX: "auto" }}>
          {compareItems.map((item) => (
            <WrapperDiv key={item.id}>
              <img
                onClick={() => removeFromCompare(item.id)}
                style={{
                  cursor: "pointer",
                  width: "20px",
                  height: "20px",

                  zIndex: "1",
                }}
                src={XImage}
                alt=""
              />
              <img src={item.image} alt={item.name} />
              <Context>
                {" "}
                <h3>
                  Model: <b>{item.name}</b>
                </h3>
                <p>
                  Price: <b>${item.price}</b>
                </p>
                <h4>
                  Brand: <b>{item.brand}</b>
                </h4>
                <p style={{ whiteSpace: "pre-wrap" }}>
                  Description: <b>{item.description}</b>
                </p>
                <h4>
                  Memory: <b>{item.memory}</b>
                </h4>
                <p>
                  Rating: ⭐<b>{item.rating}</b>
                </p>
              </Context>
            </WrapperDiv>
          ))}
        </div>
        <ToastContainer />
      </MainDiv>
    </>
  );
};
