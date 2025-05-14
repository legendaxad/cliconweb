import React, { useState } from "react";
import { MainDiv, TopButton, Wrapper } from "./style.login";

import { Navigated } from "../../compare/compare.style";
import Home from "../../../assets/shop/House.svg";

import LoginForm from "./login";
import SignupForm from "../signup/singup";
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

export default AuthPage;
