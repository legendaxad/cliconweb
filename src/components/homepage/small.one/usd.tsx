import React, { useState } from "react";
import styled from "styled-components";
import Eng from "../../../assets/navbar/Ellipse 10 copy 2.svg";
import Kor from "../../../assets/navbar/south-korea-flag-round-circle-icon.svg";
import Rus from "../../../assets/navbar/Ellipse 10 copy.svg";
import Uzb from "../../../assets/navbar/uzbekistan-flag-round-circle-icon.svg";

const Usdcomponents = () => {
  const [selectedLang, setSelectedLang] = useState<string>("");
  const [open, setOpen] = useState(false);

  const handleSelect = (lang: string) => {
    setSelectedLang(lang);
    setOpen(false);
  };

  const languageDisplayMap: Record<string, string> = {
    eng: "USD",
    kor: "WON",
    rus: "RUBL",
    uzb: "SOM",
  };

  return (
    <Wrapper>
      <SelectedBox onClick={() => setOpen((prev) => !prev)}>
        <Hstyle>
          {" "}
          {selectedLang ? languageDisplayMap[selectedLang] : "USD"}
        </Hstyle>
        <Arrow open={open}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
          >
            <g opacity="0.5">
              <path
                d="M9.75 4.5L6 8.25L2.25 4.5"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>
        </Arrow>
      </SelectedBox>

      {open && (
        <Popup>
          <h1 onClick={() => handleSelect("eng")}>
            <img src={Eng} alt="English" />
            USD
            {selectedLang === "eng" && <CheckIcon />}
          </h1>
          <h1 onClick={() => handleSelect("kor")}>
            <img src={Kor} alt="Korean" />
            WON
            {selectedLang === "kor" && <CheckIcon />}
          </h1>
          <h1 onClick={() => handleSelect("rus")}>
            <img src={Rus} alt="Russian" />
            Rubl {selectedLang === "rus" && <CheckIcon />}
          </h1>
          <h1 onClick={() => handleSelect("uzb")}>
            <img src={Uzb} alt="Uzbek" />
            SOM
            {selectedLang === "uzb" && <CheckIcon />}
          </h1>
        </Popup>
      )}
    </Wrapper>
  );
};

// ✅ Checkmark Icon
const CheckIcon = () => (
  <svg
    style={{ marginLeft: "10px" }}
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
  >
    <path
      d="M13.5 4.5L6.5 11.5L3 8"
      stroke="#FA8232"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const SelectedBox = styled.div`
  background: var(--Secondary-700, #1b6392);
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Hstyle = styled.h1`
  cursor: pointer;
  color: var(--Gray-00, #fff);
  margin: 0;
  /* Body/Small/400 */
  font-family: "Public Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
`;

const Arrow = styled.span<{ open: boolean }>`
  margin-left: 8px;
  transform: ${({ open }) => (open ? "rotate(180deg)" : "rotate(0)")};
  transition: 0.2s ease;
`;

const Popup = styled.div`
  position: absolute;
  top: 100%;
  left: 10px;
  margin-top: 8px;
  padding: 8px 16px;
  background: #fff;
  border: 1px solid #e4e7e9;
  border-radius: 4px;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.12);
  z-index: 10;

  h1 {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 14px;
    padding: 6px 0;
    cursor: pointer;
    font-family: "Public Sans";
    color: #5f6c72;

    img {
      width: 20px;
      height: 20px;
    }
  }
`;

export default Usdcomponents;
