import React, { useState } from "react";
import { MainDiv, MainWrapper, TopButton, Wrapper } from "./style.login";
import { PasswordInput, TextInput } from "@mantine/core";
import { Navigated } from "../../compare/compare.style";
import Home from "../../../assets/shop/House.svg";
import { Button } from "../../homepage/main/homapage.style";
import { Image } from "react-bootstrap";
import Google from "../../../assets/login/Google.png";
import Apple from "../../../assets/login/Apple.svg";
import { Checkbox, Radio } from "@mui/material";
const AuthPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <Navigated
        style={{ marginLeft: "-48rem" }}
        onClick={() => window.history.back()}
      >
        <img src={Home} alt="" />
        <h2>Home</h2>
        <h2>{">"}</h2>
        <h2>User Account</h2> <h2>{">"}</h2>
        <h3>Sign In</h3>
      </Navigated>
      <MainDiv>
        <Wrapper>
          <TopButton isLogin={isLogin}>
            <button
              className={isLogin ? "active" : ""}
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>
            <button
              className={!isLogin ? "active" : ""}
              onClick={() => setIsLogin(false)}
            >
              Sign Up
            </button>
            <div className="underline" />
          </TopButton>

          {isLogin ? <LoginForm /> : <SignupForm />}
        </Wrapper>
      </MainDiv>
    </>
  );
};

const LoginForm: React.FC = () => {
  return (
    <MainWrapper>
      <h2>Email Address</h2>
      <TextInput type="email" placeholder="Email" required />
      <h1>
        {" "}
        <h2>Password</h2>
        <h3>Forget Password</h3>
      </h1>
      <PasswordInput type="password" placeholder="Password" required />

      <Button type="submit">
        <h5> Sign in</h5>
        <svg
          className="arrow-icon"
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
      </Button>

      <h1>
        <div className="line"></div>
        <h6>OR</h6>
        <div className="line"></div>
      </h1>
      <div className="Google">
        <img src={Google} alt="" />
        <p>Login with Google</p>
      </div>
      <div className="Google">
        <img src={Apple} alt="" />
        <p>Login with Apple</p>
      </div>
    </MainWrapper>
  );
};

const SignupForm: React.FC = () => {
  return (
    <MainWrapper>
      <h2>Full Name</h2>
      <TextInput type="text" placeholder="Name" required />
      <h2>Email Address</h2>
      <TextInput type="email" placeholder="Email" required />
      <h2>Password</h2>
      <PasswordInput type="password" placeholder="8+ characters" required />
      <h2>Confirm Password</h2>
      <PasswordInput type="password" placeholder="" required />
      <div className="Privecy">
        <Checkbox
          sx={{
            color: "#FA8232",
            "&.Mui-checked": {
              color: "#FA8232",
            },
          }}
        />
        <h2>
          Are you agree to <span>Clicon Terms of Condition</span> and{" "}
          <span>Privacy Policy.</span>
        </h2>
      </div>
      <Button type="submit">
        <h5> Sign up</h5>
        <svg
          className="arrow-icon"
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
      </Button>

      <h1>
        <div className="line"></div>
        <h6>OR</h6>
        <div className="line"></div>
      </h1>
      <div className="Google">
        <img src={Google} alt="" />
        <p>Login with Google</p>
      </div>
      <div className="Google">
        <img src={Apple} alt="" />
        <p>Login with Apple</p>
      </div>
    </MainWrapper>
  );
};

export default AuthPage;
