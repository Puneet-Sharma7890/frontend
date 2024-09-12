import { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import LoginImage from "../Imagess/kedarnath2.jpg"; // Correctly import the image
import { useNavigate } from "react-router-dom";

export const VerifyEmail = () => {
  const location = useLocation();
  const { email } = location.state || {}; // Destructure email from the state
  const [error, setError] = useState(""); // State to handle errors
  const [success, setSuccess] = useState(""); // State to handle success messages
  const [otp, setOtp] = useState(""); // State to store received OTP
  const [inputOtp, setInputOtp] = useState(""); // State to store user input OTP
  const navigate = useNavigate();

  // Function to send email to the backend
  const sendEmail = async (e) => {
    e.preventDefault();

    // Check if email is available
    if (!email) {
      setError("Email not provided. Please register first.");
      return;
    }

    try {
      // Send email to the backend
      const response = await axios.post("http://localhost:8001/api/send-email", {
        email,
      });

      if (response.data.status === "ok") {
        setOtp(response.data.otp);
        console.log("OTP received from backend:", response.data.otp); // Display OTP received from backend
        setSuccess("OTP sent successfully!");
        setError(""); // Clear any previous errors
      } else {
        setError(response.data.message || "Failed to send email.");
        setSuccess(""); // Clear any previous success messages
      }
    } catch (error) {
      console.error("Error sending the email:", error);
      setError("An error occurred while sending the email. Please try again.");
      setSuccess(""); // Clear any previous success messages
    }
  };

  // Function to verify the entered OTP
  const verifyOtp = (e) => {
    e.preventDefault();

    // Check if the OTP field is empty
    if (!inputOtp) {
      setError("Please enter the OTP.");
      setSuccess("");
      return;
    }

    // Compare input OTP with received OTP
    if (inputOtp === otp) {
      console.log("OTP verified successfully");
      setSuccess("OTP verified successfully");
      setError("");
      navigate("/payment");
    } else {
      setError("Invalid OTP");
      setSuccess("");
    }
  };

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
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          width: "90%",
          maxWidth: "400px",
        }}
      >
        <input
          type="password"
          placeholder="Enter OTP here"
          value={inputOtp}
          onChange={(e) => setInputOtp(e.target.value)} // Handle user input for OTP
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <div className="form-group row">
          <div className="col">
            <button
              type="button"
              onClick={sendEmail}
              className="btn btn-primary w-100"
              style={{ cursor: "pointer" ,marginRight:'40px'}}
            >
              Send OTP
            </button>
          </div>
          <div className="col">
            <button
              type="button"
              className="btn btn-success w-100"
              onClick={verifyOtp}
              style={{ cursor: "pointer" }}
            >
              Verify OTP
            </button>
          </div>
        </div>
        {success && (
          <span style={{ color: "green", fontSize: "14px" }}>{success}</span>
        )}
        {error && (
          <span style={{ color: "red", fontSize: "14px" }}>{error}</span>
        )}
      </form>
    </div>
  );
};
