import styled from "styled-components";

export const MainDiv = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  margin: 40px 0px;
  gap: 20px;
`;
export const Wrappercart = styled.div`
  border-radius: 4px;
  border: 1px solid var(--Gray-100, #e4e7e9);
  background: var(--Gray-00, #fff);
  padding: 20px 0px;
  h1 {
    color: var(--Gray-900, #191c1f);
    padding-left: 20px;
    /* Body/Large/500 */
    font-family: "Public Sans";
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 133.333% */
    margin-bottom: 20px;
  }
  table {
    display: flex;
    flex-direction: column;

    thead,
    tbody {
      width: 800px;
      display: flex;

      align-items: center;
      tr {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 20px;
      }
      th {
        color: #475156;

        /* Label/04 */
        font-family: "Public Sans";
        font-size: 12px;
        font-style: normal;
        font-weight: 500;
        line-height: 150%; /* 18px */
        text-transform: uppercase;
        border-bottom: 0px;
      }
      td {
        display: flex;
        align-items: start;
        justify-content: center;
        h3 {
          img {
            width: 40px;
            height: 40px;
          }
          color: var(--Gray-900, #191c1f);
          margin-bottom: 0px;
          /* Body/Small/400 */
          font-family: "Public Sans";
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 20px; /* 142.857% */
        }
        button {
          color: var(--Gray-00, #929fa5);
          background-color: white;
          /* Heading/06 */
          font-family: "Public Sans";
          font-size: 10px;
          font-style: normal;
          font-weight: 700;
          border: none;
          text-transform: uppercase;
          border-radius: 3px;
          padding-right: 20px;
          &:hover {
            color: #fa8232;
            cursor: pointer;
            transform: scale(1.02);
          }
        }
      }
    }
  }
`;
export const CountStyle = styled.div`
  display: flex;
  align-items: center;

  .Count {
    border-radius: 3px;
    border: 2px solid var(--Gray-100, #e4e7e9);
    background: var(--Gray-00, #fff);
    display: flex;
    width: 124px;
    padding: 10px 15px;
    justify-content: space-around;
    align-items: center;
    button {
      width: 20px;
      height: 20px;
      background-color: white;
      cursor: pointer;
      &:hover {
        color: #fa8232;
        cursor: pointer;
        transform: scale(1.02);
      }
      svg {
      }
    }
  }
  h2 {
    color: var(--Gray-700, #475156);
    text-align: center;
    margin-bottom: 0px;
    /* Body/Medium/400 */
    font-family: "Public Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
  }
`;
export const LASTONE = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  padding: 0px 20px;
  button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 12px 24px;
    border-radius: 8px;
    border: none;
    background-color: #2da5f3;
    color: white;
    font-family: "Public Sans", sans-serif;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    box-shadow: 0 4px 12px rgba(45, 165, 243, 0.3);
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
      background-color: #1b8dd6;
      transform: translateY(-2px) scale(1.02);
      box-shadow: 0 6px 16px rgba(45, 165, 243, 0.4);
    }

    &:active {
      transform: scale(0.98);
      box-shadow: 0 2px 8px rgba(45, 165, 243, 0.2);
    }

    &:disabled {
      background-color: #e0e0e0;
      color: #9e9e9e;
      cursor: not-allowed;
      box-shadow: none;
    }
  }
`;
export const Subtotal = styled.div`
  border-radius: 4px;
  border: 1px solid var(--Gray-100, #e4e7e9);
  background: var(--Gray-00, #fff);
  padding: 20px 20px;
  display: flex;
  flex-direction: column;

  gap: 12px;
  h1 {
    color: var(--Gray-900, #191c1f);

    /* Body/Large/500 */
    font-family: "Public Sans";
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 133.333% */
  }
  h4 {
    color: var(--Gray-900, #191c1f);

    /* Body/Large/500 */
    font-family: "Public Sans";
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 133.333% */
  }
  input {
    display: flex;
    width: 376px;
    height: 44px;
    padding: 12px 268px 12px 16px;
    align-items: center;
    border-radius: 2px;
    border: 1px solid var(--Gray-100, #e4e7e9);
    background: var(--Gray-00, #fff);
  }
  button {
    display: flex;
    padding: 0px 24px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 2px;
    /* background: var(--Secondary-500, #2da5f3); */
    color: var(--Gray-00, #fff);

    /* Heading/07 */
    font-family: "Public Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 48px; /* 342.857% */
    letter-spacing: 0.168px;
    text-transform: uppercase;
    border: none;
  }
  .Context {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
      color: var(--Gray-600, #5f6c72);
      /* Body/Small/400 */
      font-family: "Public Sans";
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px; /* 142.857% */
      margin-bottom: 0px;
    }
    h3 {
      color: var(--Gray-900, #191c1f);

      /* Body/Small/500 */
      font-family: "Public Sans";
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 20px; /* 142.857% */
      margin-bottom: 0px;
    }
  }
`;
