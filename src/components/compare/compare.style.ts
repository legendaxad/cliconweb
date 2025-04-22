import styled from "styled-components";
export const MainDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px 0px;
  gap: 20px;
  flex-direction: column;
`;
export const Navigated = styled.div`
  background: var(--Gray-50, #f2f4f5);
  display: flex;
  align-items: center;
  padding: 20px 0px;
  gap: 10px;
  justify-content: center;
  margin-left: -54rem;
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
  h3 {
    font-family: "Public Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    color: var(--Gray-900, #46aff3);
    margin-bottom: 0px;
  }
`;
export const WrapperDiv = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  border: 1px solid #e4e7e9;
  padding: 10px 16px;
  img {
    width: 272px;
    height: 272px;
  }
`;
export const Context = styled.div`
  display: flex;
  flex-direction: column;

  gap: 10px;
  padding: 10px 0px;
  h3 {
    color: var(--Gray-900, #191c1f);

    /* Body/Medium/400 */
    font-family: "Public Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
  }
  p {
    color: var(--Gray-500, #77878f);
    margin-bottom: 0px;
    padding: 5px 5px;
    /* Body/Small/400 */
    font-family: "Public Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
    background: var(--Gray-50, #f2f4f5);
  }
  h4 {
    color: var(--Gray-900, #191c1f);
    margin-bottom: 0px;
    padding: 0px 5px;
    /* Body/Small/400 */
    font-family: "Public Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
  }
`;
export const NoData = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 100px;
  gap: 20px;
  flex-direction: column;
`;
