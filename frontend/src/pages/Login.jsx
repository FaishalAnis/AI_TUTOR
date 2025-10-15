import { useState } from "react";
import { API } from "../api";
import { useNavigate, Link } from "react-router-dom";
import LogoImage from "../assets/logo.png"; // Update to match your assets path
import "./login.css";

export default function Login() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!email || !password) {
      setError("Please fill all the fields");
      setLoading(false);
      return;
    }
    try {
      const res = await API.post("/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      setLoading(false);
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.msg || "Login failed");
      setLoading(false);
    }
  };

  const handleGuestLogin = () => {
    setEmail("guest@example.com");
    setPassword("123456");
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img src={LogoImage} alt="App Logo" className="w-12 h-12 mb-1 mx-6" />        
        <h2>Welcome To SynapseAI!</h2>
        <p>Log in to continue your learning journey</p>
        {error && <p className="login-error">{error}</p>}
        <form onSubmit={submitHandler}>
          <div>
            <input
              id="email"
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <div className="password-wrapper">
              <input
                id="password"
                type={show ? "text" : "password"}
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShow(!show)}
                tabIndex={-1}
              >
                {show ? "Hide" : "Show"}
              </button>
            </div>
          </div>
          <button
            type="submit"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <button
        className="guest-btn"
        onClick={handleGuestLogin}
        >
          Get Guest User Credentials
        </button>
        <p className="login-redirect-text">
          Don’t have an account?{" "}
          <Link to="/register">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}
