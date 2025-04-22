import styled from "styled-components";
export const MainDiv = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  gap: 56px;
  margin: 40px 0px;
`;
export const ImagePart = styled.div`
  img {
    width: 616px;
    height: 464px;
  }
`;
export const TextPart = styled.div`
  padding: 20px;
`;
export const Upperone = styled.div`
  .Top {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 20px;
    margin-bottom: 8px;
    h1 {
      display: flex;
      align-items: center;
      gap: 5px;
      margin-bottom: 0px;
      justify-content: center;
      color: var(--Gray-900, #191c1f);

      /* Body/Small/600 */
      font-family: "Public Sans";
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: 20px; /* 142.857% */
    }
    h2 {
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
  h2 {
    color: var(--Gray-900, #191c1f);

    /* Body/XL/400 */
    font-family: "Public Sans";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px; /* 140% */
    max-width: 600px;
  }
  .Gridone {
    display: grid;
    grid-template-areas: "a a";
    gap: 8px;
    margin: 12px 0px;
    p {
      color: var(--Gray-600, #5f6c72);
      margin-bottom: 0px;
      /* Body/Small/400 */
      font-family: "Public Sans";
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px; /* 142.857% */
      span {
        color: var(--Gray-900, #191c1f);

        /* Body/Small/600 */
        font-family: "Public Sans";
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: 20px;
      }
      b {
        color: var(--Success-500, #2db224);

        /* Body/Small/600 */
        font-family: "Public Sans";
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: 20px;
      }
    }
  }
  .Price {
    display: flex;
    align-items: center;
    gap: 20px;
    margin: 24px 0px;
    h4 {
      display: flex;
      align-items: center;
      gap: 10px;
      color: var(--Secondary-500, #2da5f3);

      margin-bottom: 0px;
      /* Heading/03 */
      font-family: "Public Sans";
      font-size: 24px;
      font-style: normal;
      font-weight: 600;
      line-height: 32px; /* 133.333% */
    }
    h3 {
      color: var(--Gray-500, #77878f);
      font-family: "Public Sans";
      font-size: 18px;
      margin-bottom: 0px;
      font-style: normal;
      text-decoration: line-through;
      font-weight: 400;
      line-height: 24px; /* 133.333% */
      text-decoration-line: strikethrough;
    }
    h5 {
      display: flex;
      padding: 5px 10px;
      align-items: flex-start;
      gap: 10px;
      border-radius: 2px;
      background: var(--Warning-400, #efd33d);
      color: var(--Gray-900, #191c1f);

      /* Body/Small/600 */
      font-family: "Public Sans";
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: 20px; /* 142.857% */
    }
  }
`;
export const BottomOne = styled.div`
  .Gridone {
    display: grid;
    grid-template-areas: "a a";
    gap: 10px;
    .Color {
      display: flex;
      flex-direction: column;
      align-items: start;

      div {
        margin: 12px 0px;
        display: flex;
        align-items: center;
        gap: 10px;
        margin-left: 10px;
      }
    }
    div {
      b {
        h2 {
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
        }
        border-radius: 50%;
        display: flex;
        padding: 8px;

        margin-bottom: 0px;
        border: 2px solid var(--Primary-500, #fa8232);
        background: var(--Gray-00, #fff);
      }
      h2 {
        border-radius: 50%;
        width: 32px;

        height: 32px;
        fill: #b1b5b8;
        margin-bottom: 0px;
        box-shadow:
          0px -2px 6px 0px rgba(255, 255, 255, 0.24) inset,
          0px 2px 6px 0px rgba(0, 0, 0, 0.12) inset;
      }

      p {
        margin-bottom: 0px;
        color: var(--Gray-900, #191c1f);

        /* Body/Small/400 */
        font-family: "Public Sans";
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px; /* 142.857% */
      }
    }
  }
`;
export const Lastone = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 20px;
  .Count {
    border-radius: 3px;
    border: 2px solid var(--Gray-100, #e4e7e9);
    background: var(--Gray-00, #fff);
    display: flex;
    width: 164px;
    padding: 10px 15px;
    justify-content: space-between;
    align-items: center;
    button {
      width: 32px;
      height: 32px;
      background-color: white;
      cursor: pointer;
      border: none;
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
export const Withlist = styled.div`
  display: flex;
  align-items: center;
  gap: 190px;
  margin-top: 20px;
  div {
    h2 {
      color: var(--Gray-700, #475156);
      display: flex;
      align-items: center;
      gap: 10px;
      /* Body/Small/400 */
      font-family: "Public Sans";
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px; /* 142.857% */
      margin-bottom: 0px;
      img {
        width: 24px;
        height: 24px;
      }
    }
    gap: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
export const PaymentDiv = styled.div`
  border-radius: 3px;
  border: 1px solid var(--Gray-100, #e4e7e9);
  background: var(--Gray-00, #fff);
  display: flex;
  padding: 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  margin-top: 32px;
  h1 {
    color: var(--Gray-900, #191c1f);

    /* Body/Small/400 */
    font-family: "Public Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
    margin-bottom: 0px;
  }
`;
export const TabDiv = styled.div`
  border-radius: 4px;
  border: 1px solid var(--Gray-100, #e4e7e9);
  background: var(--Gray-00, #fff);
  display: flex;
  padding-bottom: 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  h2 {
    margin-bottom: 0px; /* Label/03 */
    font-family: "Public Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 142.857% */
    text-transform: uppercase;
  }
`;
export const TabContent = styled.div`
  display: flex;
  padding: 0px 40px;
  align-items: start;
  justify-content: center;

  gap: 20px;
  div {
    h2 {
      color: var(--Gray-900, #191c1f);
      margin-bottom: 0px;
      /* Body/Medium/600 */
      font-family: "Public Sans";
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 24px; /* 150% */
    }
    p {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-top: 8px;
      margin-bottom: 0px;
      color: var(--Gray-600, #5f6c72);
      b {
        margin-bottom: 0px;
      }
      /* Body/Small/400 */
      font-family: "Public Sans";
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px; /* 142.857% */
    }
  }
`;
