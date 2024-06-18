import { useState } from "react";
import Carousel from "../components/Carousel";
import "../styles/LandingPage.scss";

const LandingPage = () => {
  const [activeTab, setActiveTab] = useState("register");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
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
