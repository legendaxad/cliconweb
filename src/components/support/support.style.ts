import styled from "styled-components";
import Image from "../../assets/support/image1.png";
export const MainDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h2 {
    color: var(--Gray-900, #191c1f);
    text-align: center;

    /* Heading/01 */
    font-family: "Public Sans";
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: 40px; /* 125% */
    margin-bottom: 0px;
  }
`;

export const BackDiv = styled.div`
  background-image: url(${Image});
  margin: 40px 0px;
  background-position: center;
  background-size: cover;
  height: 332px;
  width: 100%;
  display: flex;

  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  margin-top: 0px;
  div {
    gap: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    h2 {
      color: var(--Gray-900, #191c1f);
      margin-bottom: 0px;
      /* Body/Small/600 */
      font-family: "Public Sans";
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: 20px; /* 142.857% */
      display: flex;
      padding: 8px 16px;
      justify-content: center;
      align-items: center;
      gap: 10px;
      border-radius: 2px;
      background: var(--Warning-400, #efd33d);
    }
    h3 {
      color: var(--Gray-900, #191c1f);

      /* Heading/01 */
      font-family: "Public Sans";
      font-size: 32px;
      font-style: normal;
      font-weight: 600;
      line-height: 40px; /* 125% */
      margin-bottom: 0px;
    }
    h1 {
      button {
        border: none;
      }
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 4px;
      padding: 12px;
      gap: 12px;
      margin-bottom: 0px;
      border: 1px solid var(--Gray-100, #e4e7e9);
      background: var(--Gray-00, #fff);
    }
  }
`;
export const Gridone = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin: 40px 0px;
  div {
    border-radius: 4px;
    border: 2px solid var(--Primary-100, #ffe7d6);
    background: var(--Gray-00, #fff);
    display: flex;
    align-items: center;
    justify-content: start;

    padding: 24px;

    gap: 16px;
    h3 {
      color: var(--Gray-900, #191c1f);

      /* Body/Medium/500 */
      font-family: "Public Sans";
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 24px; /* 150% */
      margin-bottom: 0px;
    }
  }
`;
export const Belowgrid = styled.div`
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin: 40px 0px;
  display: grid;
  justify-content: center;
  h3 {
    color: var(--Gray-900, #191c1f);

    /* Body/Medium/400 */
    font-family: "Public Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
    margin-bottom: 0px;
    &:hover {
      color: var(--Primary-500, #fa8232);

      /* Body/Medium/600 */
      font-family: "Public Sans";
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 24px; /* 150% */
      margin-bottom: 0px;
    }
  }
`;

export const LastDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
gap: 20px;
padding: 72px 0px;
  h2 {
    display: flex;
    padding: 8px 16px;
    align-items: flex-start;
    gap: 10px;
    margin-bottom: 0px;
    border-radius: 2px;
    color: var(--Gray-00, #fff);

    /* Body/Small/600 */
    font-family: "Public Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px; /* 142.857% */
    background: var(--Secondary-500, #2da5f3);
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
    margin-bottom: 0px;
  }
  div {
    display: flex;
    align-items: start;
   
  }
  background: var(--Gray-50, #f2f4f5);
`;
export const Last = styled.div`
  display: flex;
  display: flex;
padding: 32px;
align-items: flex-start;
gap: 24px;
border-radius: 4px;
background: var(--Gray-00, #FFF);
box-shadow: 0px 24px 32px 0px rgba(25, 28, 31, 0.08);
  img{
      border-radius: 4px;
background: var(--Secondary-50, #EAF6FE);
padding: 24px;
    }
    .Image{
      border-radius: 4px;
background: var(--Success-50, #EAF7E9);
    }
  margin: 0px 40px;
  div {
    display: flex;
    flex-direction: column;
   

    h4 {
      color: var(--Gray-900, #191c1f);

      /* Body/Large/600 */
      font-family: "Public Sans";
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: 24px; /* 133.333% */
      margin-bottom: 0px;
    }
    p {
      color: var(--Gray-600, #5f6c72);

      /* Body/Small/400 */
      font-family: "Public Sans";
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px; /* 142.857% */
      margin-bottom: 0px;
    }
    h5 {
      color: var(--Gray-900, #191c1f);

      /* Body/XXL, 400 */
      font-family: "Public Sans";
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: 32px; /* 133.333% */
      
      margin-bottom: 20px;
    }
    .Blue{
      border-radius: 2px;
      color: var(--Gray-00, #FFF);
      display: flex;
padding: 0px 24px;
justify-content: center;
align-items: center;
gap: 8px;
/* Heading/07 */
font-family: "Public Sans";
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: 48px; /* 342.857% */
letter-spacing: 0.168px;
text-transform: uppercase;
background: var(--Secondary-500, #2DA5F3);
    }
    .Green{
      border-radius: 2px;
      color: var(--Gray-00, #FFF);
      display: flex;
padding: 0px 24px;
justify-content: center;
align-items: center;
gap: 8px;
/* Heading/07 */
font-family: "Public Sans";
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: 48px; /* 342.857% */
letter-spacing: 0.168px;
text-transform: uppercase;
background: var(--Success-500, #2DB224);
    }
  }
`;
