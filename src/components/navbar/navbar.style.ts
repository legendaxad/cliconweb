import styled from "styled-components";
export const ManiDiv = styled.div`
  background: var(--Secondary-700, #1b6392);
  box-shadow: 0px -1px 0px 0px rgba(255, 255, 255, 0.16) inset;
  padding: 5px 0px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 350px;
  padding: 0px 100px;
  h2 {
    color: var(--Gray-00, #fff);

    /* Body/Small/400 */
    font-family: "Public Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
  }
`;
export const RightDiv = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;

  h3 {
    color: var(--Gray-00, #fff);
    margin-bottom: 0px;
    /* Body/Small/400 */
    font-family: "Public Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
  }
`;
export const LeftOne = styled.div`
  display: flex;
  gap: 20px;
`;

export const BottomDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 100px;
  gap: 70px;
  background: var(--Secondary-700, #1b6392);
  div {
    h3 {
      color: var(--Gray-00, #fff);
      font-family: "Public Sans";
      font-size: 32px;
      font-style: normal;
      font-weight: 700;
      line-height: 40px; /* 125% */
      letter-spacing: -0.64px;
    }
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 32px;
      &:hover {
        cursor: pointer;
        transform: scale(1.02);
      }
      &:active {
        transform: scale(0.98);
        box-shadow: none;
      }
      height: 32px;
    }
  }
  input {
    width: 578px;
    color: black;
    padding: 14px 20px;
    /* Body/Small/400 */
    font-family: "Public Sans";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
    border-radius: 10px;
    background: var(--Gray-00, #fff);
    box-shadow: 0px 8px 32px 0px rgba(0, 0, 0, 0.08);
  }
`;
export const CartDiv = styled.div`
  div {
    background-color: white;
    color: black;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: flex;
    margin-top: -30px;
    margin-left: -10px;
    justify-content: center;
    align-items: center;
  }
`;
export const Navigation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 200px;
  .Leftone {
    width: 696px;

    padding: 10px 16px;
    display: flex;
    gap: 24px;

    .Main {
      border-radius: 2px;
      background: var(--Gray-50, #f2f4f5);
      padding: 12px 24px;
      svg {
        width: 16px;
        height: 16px;
      }
    }
    div {
      gap: 10px;
      display: flex;

      align-items: center;
      justify-content: start;
    }
    h2 {
      color: var(--Gray-900, #191c1f);
      margin-bottom: 0px;
      /* Body/Small/500 */
      font-family: "Public Sans";
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 20px; /* 142.857% */
    }
    h3 {
      color: var(--Gray-600, #5f6c72);
      margin-bottom: 0px;
      /* Body/Small/400 */
      font-family: "Public Sans";
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px; /* 142.857% */
    }
  }
  .Rightone {
    display: flex;
    gap: 10px;
    align-items: center;
    img {
      width: 28px;
      height: 28px;
    }
    h2 {
      color: var(--Gray-900, #191c1f);

      /* Body/Large/400 */
      font-family: "Public Sans";
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px; /* 133.333% */
    }
  }
`;
