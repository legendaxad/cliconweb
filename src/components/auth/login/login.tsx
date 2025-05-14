import axios from "axios";
import { useState } from "react";

import { Button } from "../../homepage/main/homapage.style";
import { PasswordInput, TextInput } from "@mantine/core";
import Google from "../../../assets/login/Google.png";
import Apple from "../../../assets/login/Apple.svg";
import { MainWrapper } from "./style.login";
const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8080/auth/signin", {
        email,
        password,
      });

      const { token, user } = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      alert("Login successful!");
      if (res) {
        window.location.href = "/";
      }

      // Optional: navigate to home or dashboard
    } catch (error: any) {
      alert(error.response?.data?.message || "Login failed.");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <MainWrapper>
        <h2>Email Address</h2>
        <TextInput
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
          required
        />

        <h1>
          <h2>Password</h2>
          <h3>Forget Password</h3>
        </h1>
        <PasswordInput
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
          required
        />

        <Button type="submit">
          <h5> Sign in</h5>
          <svg
            className="arrow-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="20"
            fill="none"
          >
            <path
              d="M3.625 10H17.375"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.75 4.375L17.375 10L11.75 15.625"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
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
    </form>
  );
};
export default LoginForm;
