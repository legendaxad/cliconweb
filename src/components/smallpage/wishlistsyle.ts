import styled, { keyframes } from "styled-components";
export const GridDiv = styled.div`
  display: grid;
  justify-content: center;
  grid-template-areas: "a a a ";
  gap: 40px;
  padding: 5px 10px;
`;

const shake = keyframes`
   0% { transform: translateX(0);  }
  25% { transform: translateX(-3px); }
  50% { transform: translateX(3px); }
  75% { transform: translateX(-3px); }
  100% { transform: translateX(0); }
`;

export const Wrappergrid = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 2px 3px 4px 6px rgba(200, 200, 200, 1.5);
  border-radius: 20px;
  transition: box-shadow 0.3s ease;
  height: 400px;
  width: 350px;
  &:hover {
    box-shadow: 2px 3px 4px 6px rgba(200, 200, 200, 0.5);
    animation: ${shake} 0.5s ease;
  }

  img {
    width: 250px;
    height: 150px;
    object-fit: contain;
  }
  .Context {
    display: flex;
    flex-direction: column;
    gap: 10px;
    b {
      color: var(--Gray-900, #191c1f);
      margin-bottom: 0px;
      /* Heading/01 */
      font-family: "Public Sans";
      font-size: 17px;
      font-style: normal;
      font-weight: 600;
    }
    h4 {
      color: var(--Gray-700, #475156);
      margin-bottom: 0px;
      /* Body/Small/400 */
      font-family: "Public Sans";
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px; /* 142.857% */
    }
    p {
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
      display: flex;
      align-items: center;

      color: var(--Gray-600, #475156);
      margin-bottom: 0px;
      /* Body/Small/400 */
      font-family: "Public Sans";
      font-size: 19px;
      font-style: normal;
      font-weight: 800;
    }

    .Button {
      margin-top: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
      img {
        width: 24px;
        height: 24px;
      }
    }
  }
`;
export const ListLine = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  margin: 20px 0px;
`;
export const WrapperList = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);

  h1 {
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 20px;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    table-layout: auto;

    th,
    td {
      img {
        width: 100px;
        height: 100px;
      }
      padding: 16px;

      gap: 30px;
      text-align: left;
      border-bottom: 1px solid #f0f0f0;
      transition: background-color 0.3s ease;
    }

    tbody tr:hover {
      background-color: #fafafa;
    }

    .Button {
      display: flex;
      align-items: center;
      gap: 12px;

      img {
        width: 24px;
        height: 24px;
        cursor: pointer;
        transition: transform 0.2s ease;
      }

      img:hover {
        transform: scale(1.2);
      }

      button {
        border: none;
        border-radius: 4px;
        background: #fa8232;
        color: #fff;
        font-weight: 600;
        padding: 10px 16px;
        transition:
          background-color 0.3s ease,
          transform 0.2s ease;
        cursor: pointer;
      }

      button:hover {
        background: #e56e1f;
        transform: translateY(-2px);
      }
    }
  }
`;
