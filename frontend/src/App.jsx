
import { useState } from "react";
import "./App.css";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setMessage("");
    setError("");

    if (isLogin) {
      setError("Login API abhi implement nahi hui hai.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "/api/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Registration failed.");
      }

      setMessage("Registration successfully completed.");

      setName("");
      setEmail("");
      setPassword("");
    } catch (err) {
      setError(
        err.message === "Failed to fetch"
          ? "Backend nahi chal raha. Terminal check karo."
          : err.message
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="page">
      <div className="card">
        <h1>FitTrack</h1>
        <p className="subtitle">
          Your journey to a healthier lifestyle.
        </p>

        <div className="tabs">
          <button
            type="button"
            className={!isLogin ? "active" : ""}
            onClick={() => {
              setIsLogin(false);
              setMessage("");
              setError("");
            }}
          >
            Register
          </button>

          <button
            type="button"
            className={isLogin ? "active" : ""}
            onClick={() => {
              setIsLogin(true);
              setMessage("");
              setError("");
            }}
          >
            Login
          </button>
        </div>

        <h2>{isLogin ? "Welcome Back!" : "Create Account"}</h2>

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <label>
              Full Name
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>
          )}

          <label>
            Email Address
            <input
              type="email"
              placeholder="Enter Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>

          <label>
            Password
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              minLength={8}
              required
            />
          </label>

          <button
            className="submit-btn"
            type="submit"
            disabled={loading}
          >
            {loading
              ? "Please wait..."
              : isLogin
                ? "Login"
                : "Create Account"}
          </button>
        </form>

        {message && (
          <p role="status" style={{ color: "green" }}>
            {message}
          </p>
        )}

        {error && (
          <p role="alert" style={{ color: "crimson" }}>
            {error}
          </p>
        )}

        <p className="footer">
          Secure access. Healthier habits.
        </p>
      </div>
    </div>
  );
}

export default App;
