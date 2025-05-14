import styled from "styled-components";
import { keyframes } from "styled-components";

// Define a fade-in animation
const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20px);  // Slightly shifted up initially
  }
  100% {
    opacity: 1;
    transform: translateY(-100);  // Normal position
  }
`;
export const Popup = styled.div`
  width: 200px;
  position: absolute;
  animation: ${fadeIn} 0.3s ease-out forwards; // Apply the fade-in animation

  top: 200px;
  left: 50%;
  transform: translateX(-260%);
  z-index: 9999;
  background-color: white;
  padding: 10px;
  h2 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--Gray-900, #191c1f);
    font-family: "Public Sans";
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    padding: 5px;
    cursor: pointer;

    &:hover {
      background-color: #fa8232;
      color: white;
    }
  }
`;
export const TabContent = styled.div`
  height: 384px;
  width: 312px;

  border-radius: 3px;
  border: 1px solid var(--Gray-100, #e4e7e9);
  background: var(--Gray-00, #fff);
  flex: 1;

  display: flex;
  flex-direction: column;

  justify-content: center;
  h2 {
    margin-top: 10px;
    text-align: start;
    padding: 0px 10px;
    color: var(--Gray-900, #191c1f);

    /* Body/Medium/600 */
    font-family: "Public Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px; /* 150% */
  }
`;
export const Container = styled.div``;
export const Leftone = styled.div`
  img {
    width: 80px;
    height: 80px;
  }
`;
export const Rightone = styled.div`
  h3 {
    color: var(--Gray-900, #191c1f);

    /* Body/Medium/600 */
    font-family: "Public Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px; /* 150% */
  }
  p {
    margin: 5px 0px;
    color: var(--Gray-900, #191c1f);

    /* Body/Small/400 */
    font-family: "Public Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
  }
  h4 {
    color: var(--Secondary-500, #2da5f3);

    /* Body/Small/600 */
    font-family: "Public Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px; /* 142.857% */
  }
`;
export const MainPOPUP = styled.div`
  position: absolute;
  top: 200px;
  left: 50%;
  transform: translateX(-45%);
  z-index: 9999;
  background-color: #fff;
  display: flex;
  padding: 15px;
  border-radius: 4px;
  border: 1px solid var(--Gray-100, #e4e7e9);
  .axad {
    border-radius: 4px;
    background: var(--Warning-200, #f7e99e);
    height: 384px;
    width: 312px;
    display: flex;
    align-items: center;
    justify-content: center;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;

      .Image {
        width: 248px;
        height: 96px;
        border: 1px solid red;
      }

      .Bottom {
        h3 {
          color: var(--Gray-900, #191c1f);
          text-align: center;

          font-family: "Public Sans";
          font-size: 28px;
          font-weight: 600;
          line-height: 32px;
          width: 248px;
        }

        p {
          margin: 12px 0px;
          color: var(--Gray-700, #475156);
          text-align: center;

          font-family: "Public Sans";
          font-size: 16px;
          font-weight: 400;
          line-height: 24px;
          width: 248px;
        }

        h4 {
          display: flex;
          align-items: center;
          color: var(--Gray-700, #475156);

          font-family: "Public Sans";
          font-size: 14px;
          font-weight: 400;
          line-height: 20px;

          b {
            display: flex;
            padding: 6px 12px;
            align-items: flex-start;
            gap: 10px;
            border-radius: 3px;
            color: var(--Gray-900, #191c1f);
            text-align: center;
            margin-left: 5px;

            font-family: "Public Sans";
            font-size: 16px;
            font-weight: 600;
            line-height: 24px;
            background: var(--Gray-00, #fff);
          }
        }

        button {
          svg {
            opacity: 0;
            transition: opacity 0.3s ease-in-out;
          }

          &:hover svg {
            opacity: 1;
          }

          h2 {
            color: var(--Gray-00, #fff);

            font-family: "Public Sans";
            font-size: 14px;
            font-weight: 700;
            line-height: 48px;
            text-transform: uppercase;
          }

          border-radius: 2px;
          background: var(--Primary-500, #fa8232);
          display: flex;
          width: 248px;
          padding: 0px 24px;
          justify-content: center;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          border: none;
          margin-top: 12px;
        }
      }
    }
  }

  align-items: center;
  gap: 30px;
  justify-content: space-between;
`;
