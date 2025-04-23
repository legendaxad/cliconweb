import styled from "styled-components";

export const MainDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f9f9f9; /* Optional background */
  padding: 100px 0px;
`;

export const Wrapper = styled.div`
  width: 424px;

  border-radius: 4px;
  border: 1px solid var(--Gray-100, #e4e7e9);
  background: var(--Gray-00, #fff);
  box-shadow: 0px 8px 40px 0px rgba(0, 0, 0, 0.12);
  padding: 32px;
  box-sizing: border-box;
`;

export const TopButton = styled.div<{ isLogin: boolean }>`
  display: flex;
  position: relative;
  border-bottom: 1px solid #e4e7e9;

  button {
    flex: 1;
    padding: 16px 0;
    background: none;
    border: none;
    outline: none;
    font-family: "Public Sans", sans-serif;
    font-size: 20px;
    font-weight: 600;
    color: var(--Gray-500, #77878f);
    cursor: pointer;
    transition: color 0.3s ease;
    position: relative;
  }

  button:hover {
    color: #111;
  }

  button.active {
    color: #fa8232;
    font-weight: 700;
  }

  .underline {
    position: absolute;
    bottom: 0;
    height: 3px;
    width: 50%;
    background-color: #fa8232;
    transition: transform 0.3s ease;
    transform: ${({ isLogin }) =>
      isLogin ? "translateX(0%)" : "translateX(100%)"};
  }
`;
export const MainWrapper = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  margin-top: 20px;
  h2 {
    span {
      color: var(--Secondary-500, #2da5f3);
      cursor: pointer;
      /* Body/Small/500 */
      font-family: "Public Sans";
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 20px;
    }
    color: var(--Gray-900, #191c1f);
    margin-bottom: 0px;
    /* Body/Small/400 */
    font-family: "Public Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
    align-self: stretch;
  }
  h1 {
    h6 {
      color: var(--Gray-500, #77878f);
      margin-bottom: 0px;
      /* Body/Small/400 */
      font-family: "Public Sans";
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px; /* 142.857% */
    }
    align-items: center;
    gap: 5px;
    div {
      color: var(--Gray-900, #191c1f);
      width: 100%;
      height: 2px;
      background: #e4e7e9;
      margin-bottom: 0px;
    }
    h3 {
      cursor: pointer;
      color: #2da5f3;
      font-family: "Public Sans", sans-serif;
      font-size: 14px;
      font-weight: 500;
      line-height: 20px;
      margin-bottom: 0px;
      transition: color 0.3s ease;

      text-decoration: none;
      display: inline-block;
      position: relative;
    }

    h3::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -2px;
      width: 0%;
      height: 1px;
      background-color: #2da5f3;
      transition: width 0.3s ease;
    }

    h3:hover::after {
      width: 100%;
    }

    h3:hover {
      color: #1a8ed3;
    }

    margin-bottom: 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .Privecy {
    display: flex;
  }
  button {
    margin-top: 0px;
    h5 {
      color: var(--Gray-00, #fff);
      margin-bottom: 0px;
      /* Heading/07 */
      font-family: "Public Sans";
      font-size: 14px;
      font-style: normal;
      font-weight: 700;

      text-transform: uppercase;
    }
  }
  .Google {
    cursor: pointer;
    display: flex;
    width: 360px;
    height: 44px;
    padding: 12px 121px 12px 16px;
    align-items: flex-start;
    gap: 85px;
    border-radius: 2px;
    border: 1px solid var(--Gray-100, #e4e7e9);
    background: var(--Gray-00, #fff);
    p {
      color: var(--Gray-700, #475156);
      text-align: center;

      /* Body/Small/400 */
      font-family: "Public Sans";
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px; /* 142.857% */
    }
  }
`;
