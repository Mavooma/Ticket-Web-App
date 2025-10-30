import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Auth.css";

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) return setError("Please fill in all fields.");

    // Get registered users from localStorage
    const storedUsers = JSON.parse(localStorage.getItem("registered_users")) || [];

    // Find the matching user
    const user = storedUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) return setError("Invalid email or password.");

    // Save session data
    localStorage.setItem(
      "ticketapp_session",
      JSON.stringify({
        token: "mock-token-" + Date.now(),
        user,
      })
    );

    navigate("/dashboard");
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="btn-primary">
            Login
          </button>
        </form>
        <p className="signup-text">
          Don’t have an account? <Link to="/auth/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}
