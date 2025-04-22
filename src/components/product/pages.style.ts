import styled from "styled-components";
export const MainDiv = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  margin: 40px 0px;
  gap: 20px;
`;
export const Navigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background: var(--Gray-50, #f2f4f5);
  padding: 20px 0px;
  .one {
    width: 1200px;
    gap: 10px;
    display: flex;
    align-items: center;
    justify-content: start;
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
      color: var(--Secondary-500, #2da5f3);

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
export const LeftDiv = styled.div`
  .Line {
    width: 312px;
    height: 1px;
    background: #e4e7e9;
    margin: 10px 0px;
  }
  h2 {
    color: var(--Gray-900, #191c1f);

    /* Label/02 */
    font-family: "Public Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 150% */
    text-transform: uppercase;
  }
`;

export const CategoryName = styled.div`
  h3 {
    margin-bottom: -10px;
    display: flex;
    align-items: center;
    justify-content: start;
    .Axad {
      margin-right: 0px;
    }
    color: var(--Gray-700, #475156);

    /* Body/Small/400 */
    font-family: "Public Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
    &:hover {
      color: var(--Gray-900, #191c1f);

      /* Body/Small/500 */
      font-family: "Public Sans";
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 20px; /* 142.857% */
    }
  }
`;
export const BrandsGrid = styled.div`
  display: grid;
  grid-template-areas: "a a";
  label {
    color: var(--Gray-700, #475156);
    font-family: "Public Sans", sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    margin-bottom: -4px;
    cursor: pointer;
    transition: color 0.2s ease;
    margin-bottom: -10px;
    &:hover {
      color: var(--Gray-800, #2f353a);
    }

    &:active {
      color: var(--Gray-900, #191c1f);
    }
  }
`;
export const LastSort = styled.div`
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    gap: 10px;
    h2 {
      color: var(--Gray-900, #191c1f);
      cursor: pointer;
      transition: all 0.3s ease;
      font-family: "Public Sans", sans-serif;
      font-size: 14px;
      font-weight: 500;
      line-height: 20px;
      padding: 6px 12px;
      border-radius: 4px;
      border: 1px solid var(--Gray-100, #e4e7e9);
      background-color: transparent;

      &:hover {
        border-color: var(--Primary-500, #fa8232);
        background-color: var(--Primary-50, #fff3eb);
        color: var(--Primary-500, #fa8232);
      }

      &.active {
        border-color: var(--Primary-500, #fa8232);
        background-color: var(--Primary-50, #fff3eb);
        color: var(--Primary-500, #fa8232);
      }
    }
  }
`;
export const Rightdiv = styled.div`
  display: flex;
  flex-direction: column;
`;
export const TopDiv = styled.div`
  display: flex;
  gap: 272px;
  .INPUT {
    display: flex;
    padding: 12px 16px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 2px;
    border: 1px solid var(--Gray-100, #e4e7e9);
    background: var(--Gray-00, #fff);
    &:hover {
      border-color: blue;
    }
  }
  div {
    display: flex;

    h2 {
      color: var(--Gray-900, #191c1f);
      margin-bottom: 0px;
      /* Body/Small/400 */
      font-family: "Public Sans";
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px; /* 142.857% */
    }
    .Text {
      color: var(--Gray-700, #475156);

      /* Body/Small/400 */
      font-family: "Public Sans";
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px; /* 142.857% */
    }
  }
`;
export const GridDataForm = styled.div`
  margin: 30px 0px;
  display: grid;
  grid-template-areas: " a a a a";
  gap: 10px;
  justify-content: start;
`;
export const ButtonsWrapper = styled.div`
  position: absolute;
  top: 45%;
  left: 14%;
  right: 10%;
  opacity: 0;
  visibility: hidden;
  transition:
    opacity 0.3s ease-in-out,
    visibility 0.3s ease-out;
  display: flex;
  gap: 8px;
`;

export const Buttonn = styled.button`
  border-radius: 100px;
  background: var(--Gray-00, #fff);
  color: white;
  border: none;
  font-size: 16px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  cursor: pointer;
  img {
    width: 24px;
    height: 24px;
  }
  display: flex;
  padding: 12px;
  align-items: flex-start;
  gap: 10px;
  &:hover {
    background: var(--Primary-500, #fa8232);
  }
`;
export const Wrapper = styled.div`
  position: relative;

  overflow: hidden;

  &:hover ${ButtonsWrapper} {
    opacity: 1;
    visibility: visible;
  }
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: column;
  padding: 16px;
  width: 234px;

  border-radius: 3px;
  border: 1px solid var(--Gray-100, #e4e7e9);
  background: var(--Gray-00, #fff);
  &:hover {
    border: 1px solid var(--Secondary-500, #2da5f3);
    border-radius: 3px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
`;
export const ImageTop = styled.div`
  position: relative;

  img {
    width: 202px;
    height: 172px;
    flex-shrink: 0;
    display: block;
  }

  .status-tag {
    position: absolute;
    top: 8px;
    right: 8px;
    z-index: 10;
  }
`;
export const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  h1 {
    color: var(--Gray-900, #191c1f);
    margin-bottom: 0px;
    /* Body/Small/400 */
    font-family: "Public Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 142.857% */
  }
  h2 {
    margin: 5px 0px;
    color: var(--Gray-900, #191c1f);
    margin-bottom: 0px;
    /* Body/Small/400 */
    font-family: "Public Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
  }
  h3 {
    margin-top: 5px;
    color: var(--Secondary-500, #2da5f3);
    margin-bottom: 0px;
    /* Body/Small/600 */
    font-family: "Public Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px; /* 142.857% */
  }
`;

export const NoItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 300px;
  margin-top: 120px;
  flex-direction: column;
`;
export const PageButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 32px;
  flex-wrap: wrap;

  button {
    padding: 10px 16px;
    font-size: 14px;
    border: none;
    border-radius: 12px;
    background: linear-gradient(145deg, #f5f5f5, #e5e5e5);
    color: #333;
    cursor: pointer;
    transition: all 0.25s ease;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);

    &:hover {
      transform: scale(1.05);
      background: linear-gradient(145deg, #f3f4f6, #d1d5db);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
    }

    &:disabled {
      background: #f3f3f3;
      color: #aaa;
      cursor: not-allowed;
      box-shadow: none;
      transform: none;
    }
  }

  button.active {
    background: linear-gradient(145deg, #fa8232, #ff9f4d);
    color: white;
    font-weight: bold;
    transform: scale(1.1);
    box-shadow: 0 4px 14px rgba(250, 130, 50, 0.4);
  }
`;
