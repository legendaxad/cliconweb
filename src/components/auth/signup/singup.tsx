import axios from "axios";
import { useState } from "react";
import { MainWrapper } from "../login/style.login";

import { PasswordInput, TextInput } from "@mantine/core";

import { Button } from "../../homepage/main/homapage.style";

import Google from "../../../assets/login/Google.png";
import Apple from "../../../assets/login/Apple.svg";
import { Checkbox } from "@mui/material";
const SignupForm: React.FC = () => {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreed, setAgreed] = useState(false);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!agreed) {
      return alert("You must agree to the terms and privacy policy.");
    }

    if (password !== confirmPassword) {
      return alert("Passwords do not match.");
    }

    try {
      const res = await axios.post("http://localhost:8080/auth/sign-up", {
        first_name,
        last_name,
        email,
        phone,
        password,
      });

      const { token, user } = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      alert("Signup successful!");
    } catch (error: any) {
      alert(error.response?.data?.message || "Signup failed.");
    }
  };

  return (
    <form onSubmit={handleSignup}>
      <MainWrapper>
        <h2>Full Name</h2>
        <TextInput
          type="text"
          placeholder="First Name"
          value={first_name}
          onChange={(e) => setFirstName(e.currentTarget.value)}
          required
        />
        <TextInput
          type="text"
          placeholder="Last Name"
          value={last_name}
          onChange={(e) => setLastName(e.currentTarget.value)}
          required
        />

        <h2>Email Address</h2>
        <TextInput
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
          required
        />

        <h2>Phone</h2>
        <TextInput
          type="tel"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.currentTarget.value)}
          required
        />

        <h2>Password</h2>
        <PasswordInput
          placeholder="8+ characters"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
          required
        />

        <h2>Confirm Password</h2>
        <PasswordInput
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.currentTarget.value)}
          required
        />

        <div className="Privecy">
          <Checkbox
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
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
export default SignupForm;
