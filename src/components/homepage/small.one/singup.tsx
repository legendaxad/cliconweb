import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
const close = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 4.25C4.5 4.25 1.5 12 1.5 12C1.5 12 4.5 19.75 12 19.75C19.5 19.75 22.5 12 22.5 12C22.5 12 19.5 4.25 12 4.25Z"
      stroke="#191C1F"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
      stroke="#191C1F"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
const open = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.8531 11.9343L21 15.6375"
      stroke="#191C1F"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M14.4563 13.9968L15.1219 17.775"
      stroke="#191C1F"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9.5344 13.9875L8.86877 17.7751"
      stroke="#191C1F"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M5.13748 11.9343L2.9906 15.6562"
      stroke="#191C1F"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M3 9.83435C4.575 11.7844 7.4625 14.25 12 14.25C16.5375 14.25 19.425 11.7844 21 9.83435"
      stroke="#191C1F"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
const SingupSmall = ({ onClose }: { onClose: () => void }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Container>
      <MAinDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div>
          {" "}
          <h1>Sign in to your account</h1>
          <h1 onClick={onClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M12.5 3.5L3.5 12.5"
                stroke="#929FA5"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.5 12.5L3.5 3.5"
                stroke="#929FA5"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </h1>
        </div>
        <InputWrapper>
          <h2>Email Address</h2>
          <input type="text" placeholder="Email" />
        </InputWrapper>

        <InputWrapper>
          <PasswordTop>
            <h2>Password</h2>
            <h3>Forgot Password</h3>
          </PasswordTop>
          <PasswordField>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
            />
            <ToggleIcon onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? close : open}
            </ToggleIcon>
          </PasswordField>
        </InputWrapper>

        <button>
          Sign in{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
          >
            <path
              d="M3.625 10H17.375"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.75 4.375L17.375 10L11.75 15.625"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <h4>
          <Div></Div>Don’t have account <Div></Div>
        </h4>
        <Singupstyle>
          <button>
            Sign up{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
            >
              <path
                d="M3.625 10H17.375"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.75 4.375L17.375 10L11.75 15.625"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </Singupstyle>
      </MAinDiv>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: 210px;
  left: 54vw;
  transform: translate(30px, -70px);
  z-index: 10;
`;
const Div = styled.div`
  background: #e4e7e9;
  width: 100px;
  height: 1px;
`;
const MAinDiv = styled(motion.div)`
  box-shadow: 0 12px 48px rgba(0, 0, 0, 0.2);
  div {
    display: flex;
    justify-content: space-between;
  }
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-radius: 4px;
  border: 1px solid var(--Gray-100, #e4e7e9);
  background: var(--Gray-00, #fff);
  box-shadow: 0px 8px 40px 0px rgba(0, 0, 0, 0.12);
  padding: 32px;

  h1 {
    color: var(--Gray-900, #191c1f);
    text-align: center;
    font-family: "Public Sans";
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 28px;
    margin-bottom: 0px;
  }

  button {
    display: flex;
    width: 360px;
    padding: 0px 24px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 6px;
    background: #fa8232;
    color: #fff;
    border: none;
    font-family: "Public Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 48px;
    letter-spacing: 0.168px;
    text-transform: uppercase;
    transition: all 0.3s ease;

    &:hover {
      background: #e66d1e; /* deeper, richer orange for better contrast */
      box-shadow: 0px 4px 12px rgba(230, 109, 30, 0.4);
      transform: scale(1.02);
    }

    &:active {
      transform: scale(0.98);
      box-shadow: none;
    }
  }
  h4 {
    display: flex;
    align-items: center;
    color: var(--Gray-500, #77878f);
    font-family: "Public Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    justify-content: center;
  }
`;
const Singupstyle = styled.div`
  button {
    display: flex;
    width: 360px;
    padding: 0px 24px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 6px;
    background: #fff;
    color: #fa8232;
    border: 2px solid #fa8232;
    font-family: "Public Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 48px;
    letter-spacing: 0.168px;
    text-transform: uppercase;
    transition: all 0.3s ease;

    &:hover {
      background: #fa8232;
      color: #fff;
      box-shadow: 0px 4px 12px rgba(250, 130, 50, 0.3);
      transform: scale(1.02);
    }

    &:active {
      transform: scale(0.98);
      box-shadow: none;
    }
  }
`;
const InputWrapper = styled.div`
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
  }

  input {
    padding: 10px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
`;

const PasswordTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    color: var(--Gray-900, #191c1f);

    /* Body/Small/400 */
    font-family: "Public Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
  }

  h3 {
    color: var(--Secondary-500, #2da5f3);
    cursor: pointer;
    /* Body/Small/500 */
    font-family: "Public Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 142.857% */
  }
`;

const PasswordField = styled.div`
  position: relative;

  input {
    width: 100%;
    padding-right: 40px;
  }
`;

const ToggleIcon = styled.span`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;

export default SingupSmall;
