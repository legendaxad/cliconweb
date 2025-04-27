import { motion } from "framer-motion";
import styled from "styled-components";
import Banner from ".././../assets/about/banner.jpg";
export const MainDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  margin: 40px 0px;
`;
export const Leftone = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 20px;
  h1 {
    border-radius: 2px;
    background: var(--Secondary-500, #2da5f3);
    display: flex;
    padding: 8px 16px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: var(--Gray-00, #fff);
    margin-bottom: 0px;
    /* Body/Small/600 */
    font-family: "Public Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px; /* 142.857% */
  }
  h2 {
    color: var(--Gray-900, #191c1f);

    /* Display/04 */
    font-family: "Public Sans";
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    line-height: 48px; /* 120% */
    margin-bottom: 0px;
  }
  h3 {
    color: var(--Gray-700, #475156);

    /* Body/Medium/400 */
    font-family: "Public Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
    width: 536px;
    margin-bottom: 0px;
  }
  h4 {
    color: var(--Gray-900, #191c1f);

    /* Body/Medium/400 */
    font-family: "Public Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;
export const Rightone = styled(motion.div)`
  overflow: hidden;
  border-radius: 16px; /* Make it more rounded */
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  max-width: 500px;

  img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.4s ease;
    border-radius: 16px;
  }

  &:hover img {
    transform: scale(1.05); /* Smooth zoom on hover */
  }
`;
export const Middleone = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 72px 0px;
  flex-direction: column;
`;
export const GridDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin: 40px 0px;
  div {
    border-radius: 3px;
    border: 1px solid var(--Gray-100, #e4e7e9);
    background: var(--Gray-00, #fff);
    display: flex;
    padding: 24px;
    justify-content: center;
    align-items: center;
    gap: 16px;
    h1 {
      display: flex;
      flex-direction: column;
      align-items: start;

      h2 {
        color: var(--Gray-900, #191c1f);

        /* Body/Medium/600 */
        font-family: "Public Sans";
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 24px;
        margin-bottom: 0px;
      }
      h3 {
        color: var(--Gray-700, #475156);
        margin-bottom: 0px;
        /* Body/Small/400 */
        font-family: "Public Sans";
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px; /* 142.857% */
      }
    }
    img {
      width: 64px;
      height: 64px;
      border-radius: 3100px;
      background: url(<path-to-image>) lightgray 50% / cover no-repeat;
    }
  }
`;
export const ImageDiv = styled.div`
  background-image: url(${Banner});
  margin: 40px 0px;
  background-position: center;
  background-size: cover;
  height: 440px;
  width: 100%;
  background-repeat: no-repeat;

  display: flex;

  align-items: center;
  flex-direction: column;
  justify-content: center;
  div {
    margin-left: -46rem;
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    h2 {
      color: var(--Gray-900, #191c1f);

      font-family: "Public Sans";
      font-size: 32px;
      font-style: normal;
      font-weight: 600;
      line-height: 40px;
      margin-bottom: 0px;
    }
    h3 {
      color: var(--Gray-900, #191c1f);
      width: 423px;
      margin-bottom: 0px;

      font-family: "Public Sans";
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px; /* 133.333% */
    }
  }
`;
