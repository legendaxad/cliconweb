import React from "react";
import styled from "styled-components";
import { smartphonesData } from "../../mock/smartPhone";
import { laptopsData } from "../../mock/laptop";
import { keyboardMouseData } from "../../mock/keyboardMouseData";
import { webcamData } from "../../mock/webcam";
const CATEGORIES = [
  "RELATED PRODUCT",
  "PRODUCT ACCESSORIES",
  "APPLE PRODUCT",
  "FEATURED PRODUCTS",
];
const getCategoryProducts = (category: string) => {
  switch (category) {
    case "RELATED PRODUCT":
      return laptopsData.slice(0, 3);
    case "PRODUCT ACCESSORIES":
      return keyboardMouseData.slice(0, 3);
    case "APPLE PRODUCT":
      return smartphonesData
        .filter((item) => item.brand === "Apple" || item.brand === "Samsung")
        .slice(0, 3);
    case "FEATURED PRODUCTS":
      return webcamData.slice(4, 7);
    default:
      return [];
  }
};

const ProductGrid: React.FC = () => {
  return (
    <div
      style={{ margin: "30px 0px", display: "flex", gap: 30, flexWrap: "wrap" }}
    >
      {CATEGORIES.map((category) => {
        const filteredProducts = getCategoryProducts(category);

        return (
          <div key={category}>
            <Hstyle>{category}</Hstyle>
            <div
              style={{
                gap: 20,
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                justifyContent: "start",
              }}
            >
              {filteredProducts.map((product) => (
                <DivStyle key={product.name}>
                  <img src={product.image} alt={product.name} />
                  <div>
                    <h3>{product.name}</h3>
                    <p>${product.price}</p>
                  </div>
                </DivStyle>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};
const DivStyle = styled.div`
  display: flex;
  padding: 12px;
  justify-content: start;
  width: 312px;
  height: 104px;
  align-items: start;
  gap: 12px;
  border-radius: 3px;
  border: 1px solid var(--Gray-100, #e4e7e9);
  background: var(--Gray-00, #fff);
  &:hover {
    border: 1px solid var(--Gray-100, #2da5f3);
    padding: 10px;
  }
  img {
    width: 80px;
    height: 80px;
  }
  div {
    h3 {
      color: var(--Gray-900, #191c1f);

      /* Body/Small/400 */
      font-family: "Public Sans";
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px; /* 142.857% */
    }
    p {
      color: var(--Secondary-500, #2da5f3);

      /* Body/Small/600 */
      font-family: "Public Sans";
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: 20px; /* 142.857% */
    }
  }
`;
const Hstyle = styled.h2`
  color: var(--Gray-900, #191c1f);

  /* Body/Medium/600 */
  font-family: "Public Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 150% */
`;
export default ProductGrid;
