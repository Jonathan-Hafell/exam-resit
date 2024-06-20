import { useState } from "react";
import Carousel from "../components/Carousel";
import "../styles/LandingPage.scss";
import { handleRegister } from "../events/handleRegister.js";
import { handleLogin } from "../events/handleLogin.js";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../api/auth/AuthContext.jsx";

const LandingPage = () => {
  const [activeTab, setActiveTab] = useState("register");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleRegisterSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    const registerSuccess = await handleRegister(username, email, password);
    if (registerSuccess) {
      setSuccessMessage("Registration successful!");
      setUsername("");
      setEmail("");
      setPassword("");
      setActiveTab("login");
    } else {
      setErrorMessage("Registration failed. Please try again.");
    }
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    const success = await handleLogin(loginEmail, loginPassword);
    if (success) {
      login();
      navigate("/browse");
    } else {
      setErrorMessage("Incorrect username or password");
    }
  };

  return (
    <div className="landing-page">
      <Carousel />
      <div className="overlay">
        <nav>
          <div className="nav nav-tabs w-100">
            <button
              className={`nav-item nav-link w-50 ${
                activeTab === "register" ? "active" : ""
              }`}
              onClick={() => setActiveTab("register")}
            >
              Register
            </button>
            <button
              className={`nav-item nav-link w-50 ${
                activeTab === "login" ? "active" : ""
              }`}
              onClick={() => setActiveTab("login")}
            >
              Login
            </button>
          </div>
        </nav>
        <div className="tab-content w-100">
          {activeTab === "login" && (
            <div className="tab-pane active">
              <form onSubmit={handleLoginSubmit}>
                {errorMessage && <p className="text-danger">{errorMessage}</p>}
                <div className="form-group">
                  <input
                    type="email"
                    id="loginEmail"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    placeholder="Email"
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    id="loginPassword"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    placeholder="Password"
                    className="form-control"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Login
                </button>
              </form>
            </div>
          )}
          {activeTab === "register" && (
            <div className="tab-pane active">
              <form onSubmit={handleRegisterSubmit}>
                {successMessage && (
                  <p className="text-success">{successMessage}</p>
                )}
                {errorMessage && <p className="text-danger">{errorMessage}</p>}
                <div className="form-group">
                  <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="form-control"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Register
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
