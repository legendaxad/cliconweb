import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const SignupSmall = ({ onClose }: { onClose: () => void }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState<{ name?: string; email: string } | null>(
    null
  );
  const navigate = useNavigate();

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
      toast.success("Login successful!");
      setUser(user);
      navigate("/");
    } catch (error: any) {
      const errorMessage =
        error?.response?.data?.message || "Login failed. Please try again.";
      toast.error(errorMessage);
    }
  };

  const fetchUser = async () => {
    const token = localStorage.getItem("token");
    const localUser = localStorage.getItem("user");

    if (!token) return setUser(null);

    try {
      const res = await axios.get("http://localhost:8080/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.data?.user) {
        setUser(res.data.user);
      }
    } catch (err) {
      console.error("Auth check failed:", err);
      // Fallback to local user if available
      if (localUser) {
        setUser(JSON.parse(localUser));
      } else {
        setUser(null);
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    toast.success("Logged out");
  };

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    fetchUser();
  }, []);

  return (
    <Container>
      <MAinDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <TopBar>
          <h1>{user ? `Welcome, ${user.name || user.email}` : "Sign in"}</h1>
          <h1 onClick={onClose} style={{ cursor: "pointer" }}>
            ✕
          </h1>
        </TopBar>

        {user ? (
          <button onClick={handleLogout}>Log out</button>
        ) : (
          <>
            <form onSubmit={handleLogin}>
              <InputWrapper>
                <h2>Email Address</h2>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.currentTarget.value)}
                  required
                />
              </InputWrapper>
              <InputWrapper>
                <PasswordTop>
                  <h2>Password</h2>
                  <h3>Forgot Password</h3>
                </PasswordTop>
                <PasswordField>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.currentTarget.value)}
                    required
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                  />
                  <ToggleIcon onClick={() => setShowPassword((prev) => !prev)}>
                    {showPassword ? "🙈" : "👁️"}
                  </ToggleIcon>
                </PasswordField>
              </InputWrapper>
              <br />
              <button type="submit">Sign in</button>
            </form>
            <h4>
              <Div></Div>Don’t have an account? <Div></Div>
            </h4>
            <Singupstyle>
              <NavLink style={{ textDecoration: "none" }} to={"/login"}>
                <button onClick={onClose}>Sign up</button>
              </NavLink>
            </Singupstyle>
          </>
        )}
      </MAinDiv>
      <ToastContainer />
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: 210px;
  left: 54vw;
  transform: translate(30px, -70px);
  z-index: 99;
`;
const Div = styled.div`
  background: #e4e7e9;
  width: 100px;
  height: 1px;
`;
const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
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

export default SignupSmall;
