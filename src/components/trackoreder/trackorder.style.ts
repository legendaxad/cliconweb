import styled from "styled-components";
export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  margin: 49px 0px;
  gap: 16px;
`;
export const Context = styled.div`
  display: flex;

  flex-direction: column;
  div {
    h1 {
      color: var(--Gray-900, #191c1f);

      /* Heading/01 */
      font-family: "Public Sans";
      font-size: 32px;
      font-style: normal;
      font-weight: 600;
      line-height: 40px; /* 125% */
      margin-bottom: 0px;
    }
    h2 {
      color: var(--Gray-600, #5f6c72);
      margin: 20px 0px;
      /* Body/Medium/400 */
      font-family: "Public Sans";
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px; /* 150% */
      width: 760px;
      margin-bottom: 0px;
    }
  }
  .Flex {
    display: flex;
    gap: 40px;
    margin: 20px 0px;
  }
  input {
    display: flex;
    height: 44px;
    padding: 12px 316px 12px 16px;
    align-items: center;
    margin-top: 20px;
    align-self: stretch;
  }
  h3 {
    margin-bottom: -10px;
    color: var(--Gray-600, #5f6c72);

    /* Body/Small/400 */
    font-family: "Public Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
  }
  h5 {
    margin: 10px 0px;
    color: var(--Gray-600, #5f6c72);
    display: flex;
    align-items: center;
    /* Body/Small/400 */
    font-family: "Public Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
  }
`;

//order detail

export const OrderMainDiv = styled.div`
  display: flex;
  padding: 24px;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 24px;
  border-radius: 4px;
  border: 1px solid var(--Gray-100, #e4e7e9);
  background: var(--Gray-00, #fff);
  padding: 24px;
  h6 {
    color: var(--Gray-700, #475156);

    /* Body/Small/400 */
    font-family: "Public Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
  }
  .Line {
    border: 1px solid var(--black-100, #e4e7e9);
    width: 100%;
  }
  h5 {
    color: var(--Gray-900, #191c1f);

    /* Body/Large/500 */
    font-family: "Public Sans";
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 133.333% */
    margin-bottom: 0px;
  }
`;
export const TopDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  border: 1px solid var(--Warning-200, #f7e99e);
  background: var(--Warning-50, #fdfae7);
  gap: 25rem;
  padding: 24px;
  h4 {
    color: var(--Secondary-500, #2da5f3);

    /* Heading/02 */
    font-family: "Public Sans";
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: 32px; /* 114.286% */
    margin-bottom: 0px;
  }
  div {
    h1 {
      color: var(--Gray-900, #191c1f);

      /* Body/XL/400 */
      font-family: "Public Sans";
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 28px; /* 140% */
      margin-bottom: 0px;
    }
    h2 {
      color: var(--Gray-700, #475156);

      /* Body/Small/400 */
      font-family: "Public Sans";
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px; /* 142.857% */
      margin-bottom: 0px;
    }
  }
`;
export const BottomDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  img {
    border-radius: 2px;
    border: 1px solid var(--Success-100, #d5f0d3);
    background: var(--Success-50, #eaf7e9);
    display: flex;
    padding: 12px;
    align-items: flex-start;
    gap: 10px;
  }
  .Image {
    border-radius: 2px;
    border: 1px solid var(--Secondary-100, #d5edfd);
    background: var(--Secondary-50, #eaf6fe);
  }
  div {
    display: flex;
    flex-direction: column;

    h2 {
      color: var(--Gray-900, #191c1f);

      /* Body/Small/400 */
      font-family: "Public Sans";
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px; /* 142.857% */
      margin-bottom: 0px;
    }
    h3 {
      color: var(--Gray-500, #77878f);
      margin-bottom: 0px;
      /* Body/Small/400 */
      font-family: "Public Sans";
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px; /* 142.857% */
    }
  }
`;
export const Delivery = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-around;
  padding: 24px;
  gap: 24px;
  border-radius: 4px;
  border: 1px solid var(--Gray-100, #e4e7e9);
  background: var(--Gray-00, #fff);
  h2 {
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
