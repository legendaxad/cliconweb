import styled from "styled-components";
export const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  margin: 40px 0px;
  gap: 50px;
`;
export const Leftone = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  background: var(--Gray-00, #fff);
  border-radius: 3px;
  padding: 20px;
  gap: 10px;
  h2 {
    color: var(--Gray-900, #191c1f);

    /* Heading/01 */
    font-family: "Public Sans";
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: 40px; /* 125% */
    margin-bottom: 30px;
  }
`;
export const Rightone = styled.div`
  display: flex;
  padding: 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  border-radius: 4px;
  background: var(--Warning-100, #fbf4ce);

  border-radius: 3px;
  h1 {
    color: var(--Gray-900, #191c1f);

    /* Body/Large/500 */
    font-family: "Public Sans";
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 133.333% */
  }
  h2 {
    color: var(--Gray-700, #475156);

    /* Body/Small/400 */
    font-family: "Public Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
    width: 360px;
  }
`;
