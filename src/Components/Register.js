import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginImage from "../Imagess/kedarnath2.jpg"; // Correctly import the image
import ReCAPTCHA from "react-google-recaptcha";

export function Register() {
  const [recaptchaValue, setRecaptchaValue] = useState("");
  const captchaRef = useRef();
  const navigate = useNavigate();

  const onChange = (value) => {
    setRecaptchaValue(value);
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Regex for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Handle input change for all fields
  const handleChange = (e) => {
    const { name, value } = e.target;

    let errorMessage = "";

    // Validation logic
    if (name === "name" && value.trim() === "") {
      errorMessage = "Name is required.";
    }

    if (name === "email" && !emailRegex.test(value)) {
      errorMessage = "Please enter a valid email address.";
    }

    if (name === "password") {
      if (value.trim().length < 8) {
        errorMessage = "Password must be at least 8 characters long.";
      }
    }

    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: errorMessage,
    });
  };

  // Handle form submission
  async function registerUser(event) {
    event.preventDefault();
    const recaptchaToken = recaptchaValue;

    // Reset captcha after form submission
    captchaRef.current.reset();

    // Check if any field has an error before submitting
    if (errors.name || errors.email || errors.password) {
      alert("Please fix the errors before submitting.");
      return;
    }

    // Check if reCAPTCHA token is available
    if (!recaptchaToken) {
      alert("Please complete the reCAPTCHA.");
      return;
    }

    // Create a new object that includes recaptchaValue
    const requestBody = {
      ...formData,
      recaptcha: recaptchaToken,
    };

    try {
      const response = await fetch("http://localhost:8001/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody), // Correct usage
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      if (data.status === "ok") {
        // alert("User registered successfully");
        alert('Verify the OTP from Mail')
        console.log(data.user)
       
        navigate("/verifyemail", { state: { email: formData.email } });
      } else {
        alert(data.error || "Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("There was a problem with the registration:", error);

      
      alert("An error occurred. Please try again later.");
    }
  }

  return (
    <div
      style={{
        position: "relative", // Needed for the overlay to position correctly
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage: `url(${LoginImage})`, // Use the imported image
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
          backgroundColor: "rgba(0, 0, 0, 0.4)", // black overlay with 40% opacity
          zIndex: 1, // Ensure the overlay is behind the form
        }}
      ></div>

      <form
        onSubmit={registerUser}
        style={{
          position: "relative", // Ensures form is above the overlay
          zIndex: 2, // Keep the form above the overlay
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
          backgroundColor: "rgba(0, 0, 0, 0.7)", // semi-transparent background
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          width: "90%",
          maxWidth: "400px",
        }}
      >
        <h1 style={{ color: "white" }}>Register</h1>
        <input
          name="name" // name attribute must match the key in formData
          value={formData.name}
          type="text"
          placeholder="Name"
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }} // Add width style
        />
        {errors.name && (
          <span style={{ color: "red", fontSize: "20px" }}>{errors.name}</span>
        )}
        <br />
        <input
          name="email"
          value={formData.email}
          type="email"
          placeholder="Email"
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }} // Add width style
        />
        {errors.email && (
          <span style={{ color: "red", fontSize: "20px" }}>{errors.email}</span>
        )}
        <br />
        <input
          name="password"
          value={formData.password}
          type="password"
          placeholder="Password"
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }} // Add width style
        />
        {errors.password && (
          <span style={{ color: "red", fontSize: "20px" }}>
            {errors.password}
          </span>
        )}
        <br />
        <div className="mb-3 py-1">
          <ReCAPTCHA
            sitekey="6Le2VDEqAAAAAD0M8PWqLMG3QCYatybnw9T5gqMs"
            ref={captchaRef}
            onChange={onChange}
          />
        </div>
        
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "#3A7DD4",
            color: "white",
            cursor: "pointer",
            width: "100%",
          }}
          
        >
          Register
        </button>
        <Link to="/login" style={{ color: "#3A7DD4", textDecoration: "none" }}>
          <span style={{color:'white',fontSize:'17px'}}>Already Registered?  </span>Login
        </Link>
      </form>
    </div>
  );
}
