import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../homepage/main/homapage.style";
import { PasswordInput, TextInput } from "@mantine/core";
import Google from "../../../assets/login/Google.png";
import Apple from "../../../assets/login/Apple.svg";
import { MainWrapper } from "./style.login";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // for redirection

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/auth/signin", {
        email,
        password,
      });

      const { token, user } = response.data;

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      alert("Login successful!");

      navigate("/");
    } catch (error: any) {
      console.error("Login error:", error);
      const errorMessage =
        error?.response?.data?.message || "Login failed. Please try again.";
      alert(errorMessage);
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
          {" "}
          <h2>Password</h2>
          <h4 style={{ color: "#007BFF", cursor: "pointer", fontSize: "14px" }}>
            Forget Password?
          </h4>
        </h1>

        <PasswordInput
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
          required
        />

        <Button type="submit">
          <span>Sign in</span>
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

        <div className="Google">
          <img src={Google} alt="Google logo" />
          <p>Login with Google</p>
        </div>
        <div className="Google">
          <img src={Apple} alt="Apple logo" />
          <p>Login with Apple</p>
        </div>
      </MainWrapper>
    </form>
  );
};

export default LoginForm;
