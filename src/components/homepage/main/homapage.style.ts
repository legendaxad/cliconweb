import styled from "styled-components";
import Imagebac from "../../../assets/homepage/New Google Pixel 6 Pro.jpg";
import { dividerClasses } from "@mui/material";
export const MainDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;
export const All = styled.div`
  display: flex;
  z-index: 11;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0px;
  box-sizing: 0px;
  margin: 0px;
`;
export const Rightone = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Button = styled.button`
  background-color: #fa8232;
  color: white;
  font-size: 16px;
  font-weight: 600;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #e56f24;
    transform: scale(1.02);
  }
  &:active {
    transform: scale(0.98);
    box-shadow: none;
  }
  .arrow-icon {
    width: 20px;
    height: 20px;
    transition:
      transform 0.3s ease-in-out,
      stroke-dashoffset 0.5s ease-in-out;
    stroke-dasharray: 20;
    stroke-dashoffset: 20;
  }

  &:hover .arrow-icon {
    transform: translateX(5px);
    stroke-dashoffset: 0;
  }
`;

export const Topdiv = styled.div`
  border-radius: 6px;
  background: var(--Gray-900, #191c1f);
  width: 424px;
  height: 248px;
  display: flex;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  div {
    h2 {
      color: var(--Warning-500, #ebc80c);

      /* Label/03 */
      font-family: "Public Sans";
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 20px; /* 142.857% */
      text-transform: uppercase;
    }
    h3 {
      color: var(--Gray-00, #fff);
      width: 160px;
      /* Heading/03 */
      font-family: "Public Sans";
      font-size: 24px;
      font-style: normal;
      font-weight: 600;
      line-height: 32px; /* 133.333% */
    }
  }
  .Bottom {
    img {
      width: 102px;
      height: 214px;
    }
    p {
      display: flex;
      width: 102px;
      height: 40px;
      padding: 8px 16px;
      align-items: flex-start;
      gap: 10px;
      flex-shrink: 0;
      border-radius: 2px;
      background: var(--Warning-400, #efd33d);
      color: var(--Gray-900, #141414);

      /* Body/Medium/600 */
      font-family: "Public Sans";
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 24px; /* 150% */
      margin-top: -100px;
    }
  }
`;
export const Bottomdiv = styled.div`
  display: flex;
  width: 424px;
  height: 248px;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border-radius: 6px;
  background: var(--Gray-50, #f2f4f5);
  div {
    h3 {
      color: var(--Gray-900, #191c1f);

      /* Heading/03 */
      font-family: "Public Sans";
      font-size: 24px;
      font-style: normal;
      font-weight: 600;
      line-height: 32px; /* 133.333% */

      width: 172px;
    }
    p {
      color: var(--Secondary-500, #2da5f3);

      /* Body/Large/600 */
      font-family: "Public Sans";
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: 24px; /* 133.333% */
    }
  }
`;
export const Container = styled.div`
  b {
    width: 1px;
    height: 56px;
    background: #e4e7e9;
  }
  padding: 0px;
  box-sizing: 0px;
  margin: 0px;
  margin: 30px 0px;
  border-radius: 6px;
  border: 1px solid var(--Gray-100, #e4e7e9);
  background: var(--Gray-00, #fff);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 60px;
  padding: 10px 30px;
  .Mainone {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    img {
      width: 40px;
      height: 40px;
    }
    div {
      padding: 0px;
      box-sizing: 0px;
      margin: 0px;
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: start;
      h2 {
        padding: 0px;
        box-sizing: 0px;
        margin: 0px;
        color: var(--Gray-900, #191c1f);

        /* Label/03 */
        font-family: "Public Sans";
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        text-transform: uppercase;
      }
      p {
        color: var(--Gray-600, #5f6c72);
        padding: 0px;
        box-sizing: 0px;
        margin: 0px;
        /* Body/Small/400 */
        font-family: "Public Sans";
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
      }
    }
  }
`;
export const BestDeals = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 746px;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    h2 {
      color: var(--Gray-900, #191c1f);

      /* Heading/03 */
      font-family: "Public Sans";
      font-size: 24px;
      font-style: normal;
      font-weight: 600;
      line-height: 32px; /* 133.333% */
    }
  }
  button {
    color: var(--Secondary-500, #2da5f3);

    /* Body/Small/600 */
    font-family: "Public Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px; /* 142.857% */
    display: flex;
    padding: 6px 0px;
    align-items: center;
    gap: 8px;
    background: var(--Gray-00, #fff);
    border: none;
    cursor: pointer;
    padding: 5px 10px;
    justify-content: center;
    gap: 8px;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: wheat;
      padding: 5px 10px;
      border-radius: 10px;
    }

    .arrow-icon {
      width: 20px;
      height: 20px;
      opacity: 0;
      transform: translateX(-5px);
      transition:
        opacity 0.3s ease-in-out,
        transform 0.3s ease-in-out;
    }

    &:hover .arrow-icon {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

export const BestDealData = styled.div`
  margin: 30px 0px;
  h2 {
    color: var(--Gray-900, #191c1f);
    text-align: center;

    /* Heading/01 */
    font-family: "Public Sans";
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: 40px; /* 125% */
  }
`;
export const MiddleDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 30px 0px;
  .AnotherLeft {
    height: 428px;
    padding: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    border-radius: 3px;
    background: var(--Warning-300, #f3de6d);

    img {
      margin-top: -20px;
      width: 108px;
      height: 108px;
    }
    h3 {
      margin-top: -20px;
      color: var(--Gray-900, #191c1f);
      text-align: center;

      /* Heading/02 */
      font-family: "Public Sans";
      font-size: 28px;
      font-style: normal;
      font-weight: 600;
      line-height: 32px; /* 114.286% */
    }
    h4 {
      color: var(--Gray-700, #475156);
      text-align: center;

      /* Body/Medium/400 */
      font-family: "Public Sans";
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px; /* 150% */
      margin: 10px 0px;
    }
    h5 {
      color: var(--Gray-700, #475156);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      /* Body/Small/400 */
      font-family: "Public Sans";
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px; /* 142.857% */
      span {
        color: var(--Gray-900, #191c1f);
        text-align: center;

        /* Body/Medium/600 */
        font-family: "Public Sans";
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 24px; /* 150% */
        display: flex;
        padding: 6px 12px;
        align-items: flex-start;
        gap: 10px;
        border-radius: 3px;
        background: var(--Gray-00, #fff);
      }
    }
  }
  .BottomBlue {
    display: flex;
    padding: 40px 24px;
    flex-direction: column;
    height: 264px;
    justify-content: center;
    align-items: center;
    gap: 24px;
    border-radius: 4px;
    background: #124261;
    h1 {
      display: flex;
      padding: 6px 12px;
      align-items: flex-start;
      gap: 10px;
      border-radius: 2px;
      background: rgba(255, 255, 255, 0.12);
      color: var(--Gray-00, #fff);

      /* Body/Small/600 */
      font-family: "Public Sans";
      font-size: 14px;
      padding: 0px;
      box-sizing: 0px;
      margin: 0px;
      font-style: normal;
      font-weight: 600;
      line-height: 20px; /* 142.857% */
    }
    h2 {
      color: var(--Gray-00, #fff);
      text-align: center;

      /* Heading/02 */
      font-family: "Public Sans";
      font-size: 28px;
      padding: 0px;
      box-sizing: 0px;
      margin: 0px;
      font-style: normal;
      font-weight: 600;
      line-height: 32px; /* 114.286% */
    }
    h3 {
      color: var(--Gray-00, #fff);
      text-align: center;
      padding: 0px;
      box-sizing: 0px;
      margin: 0px;
      /* Body/Large/400 */
      font-family: "Public Sans";
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px; /* 133.333% */
      span {
        color: var(--Warning-500, #ebc80c);

        /* Body/Large/600 */
        font-family: "Public Sans";
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: 24px;
      }
    }
  }
  .Leftone {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    border-radius: 3px;
    background: var(--Warning-300, #f3de6d);

    h2 {
      color: var(--Danger-600, #be4646);
      text-align: center;

      /* Body/Small/600 */
      font-family: "Public Sans";
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: 20px; /* 142.857% */
    }
    h3 {
      color: var(--Gray-900, #191c1f);
      text-align: center;

      /* Heading/01 */
      font-family: "Public Sans";
      font-size: 32px;
      font-style: normal;
      font-weight: 600;
      line-height: 40px; /* 125% */
    }
    h4 {
      color: var(--Gray-700, #475156);
      text-align: center;

      /* Body/Medium/400 */
      font-family: "Public Sans";
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px; /* 150% */
    }
    h5 {
      color: var(--Gray-900, #191c1f);
      display: flex;
      padding: 6px 12px;
      align-items: center;
      gap: 10px;
      /* Body/Small/500 */
      font-family: "Public Sans";
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 20px; /* 142.857% */
      span {
        display: flex;
        padding: 6px 12px;
        align-items: flex-start;
        gap: 10px;
        border-radius: 2px;
        background: var(--Gray-00, #fff);
        color: var(--Gray-900, #191c1f);

        /* Body/Small/600 */
        font-family: "Public Sans";
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: 20px; /* 142.857% */
      }
    }
  }
  .Rightone {
    .Topone {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 40px;
      padding: 20px;

      h2 {
        color: var(--Gray-900, #191c1f);

        /* Heading/03 */
        font-family: "Public Sans";
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: 32px; /* 133.333% */
      }
      div {
        gap: 10px;
        h2 {
          color: var(--Gray-600, #5f6c72);
          letter-spacing: 0.5px;
          font-family: "Public Sans";
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 20px; /* 142.857% */
          text-transform: uppercase;
          position: relative;
          cursor: pointer;
          transition: color 0.3s ease-in-out;
        }

        h2::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 2px;
          background: #fa8232;
          left: 0;
          bottom: 0;
          transform: scaleX(0);
          transform-origin: bottom right;
          transition: transform 0.3s ease-out;
        }

        h2:hover::after {
          transform: scaleX(1);
          transform-origin: bottom left;
        }

        h2:hover {
          color: var(--Gray-900, #191c1f);
        }

        h2.active {
          color: #fa8232 !important; /* Highlight color */
          font-weight: 600;
        }

        h2.active::after {
          transform: scaleX(1);
          background: #fa8232;
        }
        h3 {
          color: var(--Primary-500, #fa8232);

          /* Body/Small/600 */
          font-family: "Public Sans";
          font-size: 14px;
          font-style: normal;
          font-weight: 600;
          line-height: 20px; /* 142.857% */

          text-transform: uppercase;
          letter-spacing: 1px;
          position: relative;
          padding-bottom: 4px;
          &::after {
            content: "";
            position: absolute;
            width: 100%;
            height: 2px;
            background: #fa8232;
            left: 0;
            bottom: 0;
            transform: scaleX(0);
            transform-origin: bottom right;
            transition: transform 0.3s ease-out;
          }
          &:hover::after {
            transform: scaleX(1);
            transform-origin: bottom left;
          }
        }
        display: flex;
      }
    }
    .GridOne {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-template-areas: "a a a a";
      gap: 10px;
      padding: 5px 10px;
    }
  }
`;
export const Wrapper = styled.div`
  display: flex;
  width: 234px;
  height: 300px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 0px;
  border-radius: 3px;
  border: 1px solid var(--Gray-100, #e4e7e9);
  background: var(--Gray-00, #fff);
  &:hover {
    border: 1px solid var(--Secondary-500, #2da5f3);
    border-radius: 3px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
  img {
    width: 202px;
    height: 172px;
    flex-shrink: 0;
    border-radius: 3px;
    border: 1px solid var(--Gray-100, #e4e7e9);
  }
  div {
    align-items: start;
    justify-content: center;
    width: 150px;
    h2 {
      color: var(--Gray-900, #191c1f);

      /* Body/Small/400 */
      font-family: "Public Sans";
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px; /* 142.857% */
    }
    h3 {
      color: var(--Secondary-500, #2da5f3);

      /* Body/Small/600 */
      font-family: "Public Sans";
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: 20px; /* 142.857% */
    }
    p {
      display: flex;
      align-items: center;
      justify-content: center;
      span {
        color: var(--Gray-500, #77878f);

        /* Body/Tiny/400 */
        font-family: "Public Sans";
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 16px; /* 133.333% */
      }
    }
  }
`;
export const Wrapper2 = styled.div`
  display: flex;
  margin: 100px 0px;
  gap: 60px;
  .Leftone {
    display: flex;
    justify-content: center;
    width: 648px;
    height: 336px;
    padding: 44px;
    margin-left: -20px;
    justify-content: center;
    align-items: center;
    gap: 40px;
    border-radius: 4px;
    background: var(--Gray-50, #f2f4f5);
    div {
      gap: 10px;
      display: flex;
      flex-direction: column;
      h2 {
        border-radius: 2px;
        background: var(--Secondary-500, #2da5f3);
        display: flex;
        padding: 6px 12px;
        align-items: center;
        justify-content: center;
        gap: 10px; /* Body/Small/600 */
        font-family: "Public Sans";
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: 20px; /* 142.857% */
      }
      h3 {
        color: var(--Gray-900, #191c1f);

        /* Heading/01 */
        font-family: "Public Sans";
        font-size: 32px;
        font-style: normal;
        font-weight: 600;
        line-height: 40px; /* 125% */
      }
      h4 {
        color: var(--Gray-700, #475156);

        /* Body/Medium/400 */
        font-family: "Public Sans";
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px; /* 150% */
        margin-bottom: 20px;
      }
    }
  }
  .Rightone {
    border-radius: 4px;
    background: var(--Gray-900, #191c1f);
    width: 648px;
    height: 336px;
    padding: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    div {
      display: flex;
      flex-direction: column;
      gap: 10px;

      h2 {
        border-radius: 2px;
        background: var(--Warning-400, #efd33d);

        color: var(--Gray-900, #191c1f);

        /* Body/Small/600 */
        font-family: "Public Sans";
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: 20px; /* 142.857% */
        display: flex;
        padding: 6px 12px;
        align-items: center;
        justify-content: center;
        gap: 10px;
      }
      h3 {
        color: var(--Gray-00, #fff);

        /* Heading/01 */
        font-family: "Public Sans";
        font-size: 32px;
        font-style: normal;
        font-weight: 600;
        line-height: 40px; /* 125% */
      }
      h4 {
        color: var(--Gray-300, #adb7bc);

        /* Body/Medium/400 */
        font-family: "Public Sans";
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px; /* 150% */
      }
    }
  }
`;
export const Wrapper3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  img {
    flex-shrink: 0;
    margin-right: -80px;
    margin-bottom: -33px;
    z-index: 1;
  }
  h5 {
    margin-bottom: -100px;
    margin-right: -50px;
    z-index: 12;
    color: var(--Gray-00, #fff);
    height: 88px;
    width: 88px;
    /* Body/XL/600 */
    font-family: "Public Sans";
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 28px; /* 140% */
    display: flex;

    align-items: center;
    justify-content: center;

    border-radius: 50%;
    background: var(--Secondary-500, #2da5f3);
  }
`;
export const Backgroundiv = styled.div`
  background: var(--Primary-100, #ffe7d6);
  margin: 30px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 300px;
  .LeftDiv {
    padding: 80px;
    h2 {
      color: var(--Gray-00, #fff);

      /* Body/Small/600 */
      font-family: "Public Sans";
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: 20px; /* 142.857% */
      display: flex;
      padding: 6px 12px;
      align-items: center;
      justify-content: center;
      gap: 10px;
      width: 165px;
      background: var(--Secondary-500, #2da5f3);
    }
    h3 {
      width: 424px;
      color: var(--Gray-900, #191c1f);
      margin-top: 12px;
      /* Display/03 */
      font-family: "Public Sans";
      font-size: 48px;
      font-style: normal;
      font-weight: 600;
      line-height: 56px; /* 116.667% */
    }
    h4 {
      color: var(--Gray-900, #191c1f);
      margin: 22px 0px;
      /* Body/XXL, 400 */
      font-family: "Public Sans";
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: 32px; /* 133.333% */
    }
  }
  .Righdiv {
    position: relative; /* Ensures child elements are positioned relative to this */
    display: inline-block; /* Prevents collapsing of container */
  }

  .Righdiv img {
    z-index: 1;
    width: 100%; /* Adjust if needed */
  }

  .Righdiv h3 {
    position: absolute;
    top: 50%; /* Adjust to center vertically */
    left: 50%; /* Adjust to center horizontally */
    transform: translate(-210%, -130%); /* Centers the h3 perfectly */
    z-index: 3;
    height: 130px;
    width: 130px;
    border-radius: 50%;
    border: 6px solid var(--Gray-00, #fff);
    background: var(--Primary-200, #ffcead);
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--Gray-900, #191c1f);
    font-family: "Public Sans";
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 28px; /* 140% */
  }
`;
export const LatestNews = styled.div`
  background: var(--Gray-50, #f2f4f5);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h3 {
    color: var(--Gray-900, #191c1f);
    text-align: center;
    margin: 72px 0px 40px 0px;
    /* Heading/01 */
    font-family: "Public Sans";
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: 40px; /* 125% */
  }
`;
export const BlogDiv = styled.div`
  border-radius: 4px;
  border: 1px solid var(--Gray-100, #e4e7e9);
  background: var(--Gray-00, #fff);
  box-shadow: 0px 8px 24px 0px rgba(0, 0, 0, 0.04);
  padding: 32px;
  gap: 10px;
  display: flex;
  width: 424px;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  margin: 50px 0px;
  img {
    width: 360px;
    height: 248px;
  }
`;
export const RestBlog = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  .Data {
    display: flex;
    gap: 16px;
    p {
      color: var(--Gray-700, #475156);
      display: flex;
      align-items: center;
      justify-content: center;
      /* Body/Small/400 */
      font-family: "Public Sans";
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px; /* 142.857% */
      img {
        width: 24px;
        height: 24px;
      }
    }
  }
  h1 {
    color: var(--Gray-900, #191c1f);

    /* Body/Large/500 */
    font-family: "Public Sans";
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 133.333% */
  }
  h5 {
    height: 132px;
    color: var(--Gray-500, #77878f);

    /* Body/Medium/400 */
    font-family: "Public Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
  }
  button {
    background: var(--Gray-00, #fff);
    box-shadow: 0px 8px 24px 0px rgba(0, 0, 0, 0.04);
    display: flex;
    align-items: center;
    padding: 12px 16px;
    border-radius: 2px;
    border: 2px solid var(--Primary-100, #ffe7d6);
    gap: 10px;
    color: var(--Primary-500, #fa8232);
    cursor: pointer;
    font-family: "Public Sans", sans-serif;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.168px;
    text-transform: uppercase;
    margin-top: 40px;
    transition: all 0.3s ease-in-out;
  }

  /* Hover effect */
  button:hover {
    background: var(--Primary-50, #ffead6);
    border-color: var(--Primary-500, #fa8232);
  }

  /* SVG Animation */
  button svg {
    width: 20px;
    height: 20px;
    transition:
      transform 0.3s ease-in-out,
      stroke-dashoffset 0.5s ease-in-out;
    stroke-dasharray: 20;
    stroke-dashoffset: 20;
  }

  button:hover svg {
    transform: translateX(5px);
    stroke-dashoffset: 0;
  }
`;
export const LastDiv = styled.div`
  display: flex;
  padding: 72px 300px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: var(--Secondary-700, #1b6392);
  h6 {
    color: var(--Gray-00, #fff);
    text-align: center;

    /* Heading/01 */
    font-family: "Public Sans";
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: 40px; /* 125% */
  }
  p {
    color: var(--Gray-00, #fff);
    text-align: center;

    /* Body/Medium/400 */
    font-family: "Public Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
    width: 536px;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 12px;
    margin: 32px 0px;
    gap: 16px;
    input {
      border: none;
      display: flex;
      width: 424px;
      padding: 12px 303px 12px 16px;
      align-items: center;
    }
    border-radius: 3px;
    background: #fff;
    box-shadow: 0px 12px 24px 0px rgba(0, 0, 0, 0.12);
    width: 624px;
    height: 72px;
  }
  b {
    display: flex;
    gap: 48px;
  }
`;
