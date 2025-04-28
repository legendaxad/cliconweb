import styled from "styled-components";
export const MainDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 56px;
  background-color: #fdfaea;
  border-radius: 10px;
  div {
    .Circle {
      h2 {
      
        color: var(--Gray-00, #fff);
        font-family: "Public Sans";
        font-size: 22px;
        font-style: normal;
        font-weight: 600;
        line-height: 100px; /* 454.545% */
      }
      display: flex;

      padding: 0px 21px 0px 23px;
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
      border-radius: 100px;
      border: 4px solid var(--Gray-00, #fff);
      background: var(--Secondary-500, #2da5f3);
      height: 100px;
      width: 100px;
      flex-shrink: 0;
    }
    h1 {
      color: var(--Secondary-600, #2484c2);

      /* Body/Small/600 */
      font-family: "Public Sans";
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: 20px; /* 142.857% */
      display: flex;
      align-items: center;
    }
    h2 {
      color: var(--Gray-900, #191c1f);

      /* Display/03 */
      font-family: "Public Sans";
      font-size: 48px;
      font-style: normal;
      font-weight: 600;
      line-height: 56px; /* 116.667% */
    }
    p {
      color: var(--Gray-700, #475156);

      /* Body/Large/400 */
      font-family: "Public Sans";
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px; /* 133.333% */
      width: 356px;
    }
  }
`;

// Best deals style carusel

export const BestDealstyle = styled.div`
  flex-shrink: 0;
  border: 1px solid var(--Gray-100, grey);
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;
  margin: 20px 20px;
  img {
    width: 280px;
    height: 308px;
    border-radius: 10px;
    box-shadow: 0px 4px 6px rgba(200, 200, 200, 0.5);
    flex-shrink: 0;
    border: 1px solid var(--Gray-100, grey);
    margin-bottom: 10px;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    h4 {
      color: var(--Gray-900, #191c1f);

      /* Body/Medium/400 */
      font-family: "Public Sans";
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px; /* 150% */
    }
    h6 {
      span {
        color: var(--Gray-300, #adb7bc);
        font-family: "Public Sans";
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px; /* 150% */
        text-decoration-line: strikethrough;
      }
      del {
        color: var(--Secondary-500, #2da5f3);

        /* Body/Large/600 */
        font-family: "Public Sans";
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: 24px; /* 133.333% */
      }
    }
    p {
      color: var(--Gray-600, #5f6c72);

      /* Body/Small/400 */
      font-family: "Public Sans";
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px; /* 142.857% */
      width: 70%;
    }
  }
`;
