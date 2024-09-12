// Login.js
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import LoginImage from "../Imagess/kedarnath2.jpg"; // Ensure the correct path

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [role, setRole] = useState("user"); // State for radio selec tion (admin/user)
  const [secretKey, setSecretKey] = useState(""); // State for secret key input
  const [secretKeyError, setSecretKeyError] = useState("");
  const navigate = useNavigate();
  console.log('role in login',role)

  async function loginUser(event) {
    event.preventDefault();

    // Validation checks
    if (email === "") {
      setEmailError("Email is required.");
    } else {
      setEmailError("");
    }

    if (password === "") {
      setPasswordError("Password is required.");
    } else {

      setPasswordError("");
    }

    // Check for secret key if admin role is selected
    if (role === "admin") {
      if (secretKey === "") {
        setSecretKeyError("Secret key is required for admin.");
        return;
      } else if (secretKey !== "puneet") {
        setSecretKeyError("Secret Key is not valid.");
        return;
      } else {
        setSecretKeyError(""); // Clear error if secret key is valid
      }
    }

    // Stop submission if there are errors
    if (emailError || passwordError || (role === "admin" && secretKeyError)) {
      return;
    }

    try {
      const response = await fetch("http://localhost:8001/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      if (data.user) {
        // Save the role in local storage
        localStorage.setItem("token", data.user);
        localStorage.setItem("role", role); // Save the role (user or admin)

        alert("Login successful");

        // Navigate based on the role
        if (role === "admin") {
          navigate("/admin"); // Redirect to Admin route
        } else {
          navigate("/payment"); // Redirect to Payment route for user
        }
      } else {
        alert("Please check your username and password");
      }
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      alert("An error occurred. Please try again later.");
    }
  }

  // Validation function
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function validate(e) {
    const { name, value } = e.target;

    if (name === "email") {
      setEmail(value);
      if (!emailRegex.test(value)) {
        setEmailError("Please enter a valid email address.");
      } else {
        setEmailError("");
      }
    }

    if (name === "password") {
      setPassword(value);
      if (value.trim().length < 8) {
        setPasswordError("Password must be at least 8 characters long.");
      } else {
        setPasswordError("");
      }
    }

    if (name === "secretKey") {
      setSecretKey(value);
      setSecretKeyError(""); // Clear any previous error when user types
    }
  }

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage: `url(${LoginImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          zIndex: 1,
        }}
      ></div>

      <form
        onSubmit={loginUser}
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          width: "90%",
          maxWidth: "400px",
        }}
      >
        <h1 style={{ textAlign: "center", color: "white" }}>Login</h1>
        <div style={{ display: "flex", gap: "10px" }}>
          <label style={{ color: "white" }}>
            <input
              type="radio"
              value="user"
              checked={role === "user"}
              onChange={() => {
                setRole("user");
                setSecretKeyError(""); // Clear secret key error when switching to user
              }}
            />
            Login as User
          </label>
          <label style={{ color: "white" }}>
            <input
              type="radio"
              value="admin"
              checked={role === "admin"}
              onChange={() => setRole("admin")}
            />
            Login as Admin
          </label>
        </div>
        {role === "admin" && (
          <input
            value={secretKey}
            type="text"
            placeholder="Enter secret key"
            name="secretKey"
            onChange={validate}
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              marginBottom: "10px",
              width:'100%'
            }}
          />
        )}
        {secretKeyError && (
          <p style={{ color: "red", marginBottom: "10px" }}>{secretKeyError}</p>
        )}
        <input
          value={email}
          onChange={validate}
          type="email"
          placeholder="Email"
          name="email"
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            marginBottom: "10px",
            width:'100%'
          }}
        />
        {emailError && <p style={{ color: "red" }}>{emailError}</p>}
        <input
          value={password}
          onChange={validate}
          type="password"
          placeholder="Password"
          name="password"
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            marginBottom: "10px",
            width:'100%'
          }}
        />
        {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "#007bff",
            color: "white",
            cursor: "pointer",
            width:'100%'
          }}
        >
          Login
        </button>
        <p style={{ marginTop: "10px", color: "white" }}>
          Don't have an account?{" "}
          <Link to="/register" style={{ color: "#3A7DD4" }}>
            Register here
          </Link>
        </p>
      </form>
    </div>
  );
}
