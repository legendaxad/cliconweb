import styled from "styled-components";
export const Wrapper = styled.div`
  display: flex;
  padding: 72px 0px;
  align-items: start;
  justify-content: center;
  gap: 44px;
  background: var(--Gray-900, #191c1f);
`;
export const FirstDiv = styled.div`
  h2 {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 20px;
    color: var(--Gray-00, #fff);
    font-family: "Public Sans";
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px; /* 125% */
    letter-spacing: -0.64px;
  }
  h3 {
    color: var(--Gray-500, #77878f);
    margin-top: 24px;
    /* Body/Small/400 */
    font-family: "Public Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
  }
  h4 {
    color: var(--Gray-00, #fff);

    /* Body/Large/500 */
    font-family: "Public Sans";
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 133.333% */
  }
  h5 {
    color: var(--Gray-300, #adb7bc);
    width: 248px;
    margin: 12px 0px;
    /* Body/Medium/400 */
    font-family: "Public Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
  }
  h6 {
    color: var(--Gray-00, #fff);

    /* Body/Medium/500 */
    font-family: "Public Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 150% */
  }
`;

export const MiddleDiv = styled.div`
  p {
    transition:
      transform 0.3s ease-in-out,
      stroke-dashoffset 0.5s ease-in-out;
    display: flex;
    align-items: center;
    position: relative;
    color: var(--Gray-400, #929fa5);
    font-family: "Public Sans";
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    margin: 6px;
    padding: 0;
    transition: transform 0.3s ease-in-out;
  }

  p div {
    transition:
      transform 0.3s ease-in-out,
      stroke-dashoffset 0.5s ease-in-out;
    position: absolute;
    left: -20px;
    width: 14px;
    padding: 0px;
    box-sizing: 0px;
    margin: 0px;
    height: 2px;
    background: #ebc80c;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  p:hover {
    transform: translateX(10px);
    transition:
      transform 0.3s ease-in-out,
      stroke-dashoffset 0.5s ease-in-out;
  }

  p:hover div {
    opacity: 1;
  }
  h2 {
    color: var(--Gray-00, #fff);
    margin-bottom: 22px;
    /* Label/02 */
    font-family: "Public Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 150% */
    text-transform: uppercase;
  }
  div {
    display: flex;
    padding: 6px 0px;
    align-items: center;
    gap: 8px;
    background: var(--Gray-900, #191c1f);
    h4 {
      opacity: 1;
      color: var(--Warning-500, #ebc80c);
      transition:
        transform 0.3s ease-in-out,
        stroke-dashoffset 0.5s ease-in-out;
      &:hover {
        color: #edcd24;
        transform: translateX(5px);
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
      /* Body/Small/500 */
      font-family: "Public Sans";
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 20px; /* 142.857% */
    }
  }
`;
export const THirdDiv = styled.div`
  h2 {
    color: var(--Gray-00, #fff);

    /* Label/02 */
    font-family: "Public Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 150% */
    text-transform: uppercase;
  }
  div {
    margin-top: 18px;
    display: flex;
    padding: 16px 20px;
    justify-content: center;
    align-items: center;
    gap: 16px;
    border-radius: 3px;
    background: var(--Gray-800, #303639);
    table {
      p {
        padding: 0px;
        box-sizing: 0px;
        margin: 0px;
        color: #fff;
        font-family: Inter;
        font-size: 11px;
        font-style: normal;
        font-weight: 400;
        line-height: 13px; /* 118.182% */
      }
      b {
        color: #fff;
        font-family: Inter;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: 20px; /* 142.857% */
      }
    }
  }
`;
export const LastDiv = styled.div`
  h1 {
    color: var(--Gray-00, #fff);

    /* Label/02 */
    font-family: "Public Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 150% */
    text-transform: uppercase;
    margin-bottom: 18px;
  }
  .Mainone {
    display: flex;

    gap: 20px;
    h2:hover {
      border: 1px solid var(--Gray-00, #1b6392);
      background: var(--Gray-800, #fff);
      color: var(--Gray-00, #303639);
    }
    h2 {
      display: flex;
      padding: 6px 12px;
      justify-content: center;
      align-items: center;
      gap: 10px;
      border-radius: 2px;
      border: 1px solid var(--Gray-00, #fff);
      background: var(--Gray-800, #303639);
      color: var(--Gray-00, #fff);

      /* Body/Small/500 */
      font-family: "Public Sans";
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 20px; /* 142.857% */
    }
  }
`;
