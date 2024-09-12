import React, { useState } from "react";
import { Footer } from "./Footer";
import axios from "axios";

const Booking = () => {
  const [booking, setBooking] = useState([]);
  const [inputEmail, setInputEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState('');

  // Handle changes to the email input field
  const handleChange = (e) => {
    setInputEmail(e.target.value);
    setError(''); // Clear error message on input change
    setNotFound('');
  };

  // Validate email format
  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  // Function to get booking details
  const getBookingDetails = async () => {
    // Input validation before fetching data
    if (!inputEmail) {
      setError("Please enter your email.");
      setBooking([]); // Clear previous bookings if input is empty
      return;
    }

    if (!isValidEmail(inputEmail)) {
      setError("Please enter a valid email address.");
      setBooking([]); // Clear previous bookings if email format is incorrect
      return;
    }

    setLoading(true); // Set loading to true when fetching starts
    try {
      const response = await axios.get("http://localhost:8001/api/getbooking"); // Ensure correct URL
      if (response.data && response.data.length > 0) {
        // Filter bookings for the input email
        const filteredBookings = response.data.filter(
          (item) => item.email === inputEmail
        );

        if (filteredBookings.length === 0) {
          setNotFound('Bookings are not present with this email id');
          setBooking([]); // Clear booking state if no bookings are found
        } else {
          setBooking(filteredBookings); // Store filtered booking details in state
          alert("Details fetched successfully");
        }
      } else {
        setNotFound('Bookings are not present with this email id');
        setBooking([]); // Clear booking state if no data is present
      }
    } catch (error) {
      console.error("Error fetching booking details:", error);
      alert("Failed to get booking details");
    } finally {
      setLoading(false); // Set loading to false after fetching data
    }
  };

  // Function to remove a specific booking detail
  const removeBookingDetail = (indexToRemove) => {
    setBooking((prevBooking) => prevBooking.filter((_, index) => index !== indexToRemove));
  };

  return (
    <>
      <div className="container">
        <h1 className="heading text-center my-4">Booking Details</h1>
        <p className="privacy-info text-center">
          Welcome! Enter your email to view your booking details. We value your trust and privacy—your data is safe with us. 🌟
        </p>

        <div className="steps-section mb-5">
          <h2 className="text-center">How to Book a Tour</h2>
          <ol>
            <li><strong>Click the "Book Tour" Button:</strong> Start your journey by clicking the "Book Tour" button on our homepage.</li>
            <li><strong>Register or Login:</strong> Create a new account or log in to your existing account to proceed.</li>
            <li><strong>Choose the Number of Persons:</strong> Select the number of people for your tour.</li>
            <li><strong>Complete the Payment:</strong> Proceed to our secure payment gateway and complete the transaction.</li>
            <li><strong>Download Your PDF:</strong> After booking, download your confirmation PDF for your records.</li>
          </ol>
        </div>

        <div className="form-group d-flex justify-content-center mt-3">
          <input
            type="email"
            placeholder="Enter your email to fetch your booking details"
            value={inputEmail}
            onChange={handleChange}
            className="form-control w-50"
            style={{ borderRadius: '5px' }}
          />
          {error && <div className="error-message text-danger mt-2">{error}</div>}
        </div>

        <div className="d-flex justify-content-center mt-3">
          <button
            type="button"
            className="btn btn-primary mt-3"
            onClick={getBookingDetails}
            style={{ borderRadius: '20px', padding: '10px 20px' }}
          >
            {loading ? 'Fetching Details...' : 'Get Details'}
          </button>
        </div>

        {/* Display booking details in a table */}
        {booking.length > 0 ? (
          <div className="booking-table mt-5">
            <table className="table table-hover">
              <thead className="thead-dark">
                <tr>
                  <th>Email</th>
                  <th>Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {booking.map((item, index) => (
                  <tr key={index}>
                    <td>{item.email}</td>
                    <td>{new Date(item.currentDate).toLocaleString('en-IN', {
                      timeZone: 'Asia/Kolkata',
                      year: 'numeric',
                      month: '2-digit',
                      day: '2-digit',
                      hour: '2-digit',
                      minute: '2-digit',
                      second: '2-digit',
                      hour12: false,
                    })}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => removeBookingDetail(index)}
                        style={{ borderRadius: '20px' }}
                      >
                        Cancel
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : loading ? (
          <div className="text-center mt-5">
            <span>Loading...</span>
          </div>
        ) : notFound && (
          <div className="text-center mt-5">
            <span style={{ color: 'red' }}>{notFound}</span>
          </div>
        )}

        <div className="faq-section mt-5">
          <h2 className="text-center mb-4">Frequently Asked Questions (FAQs)</h2>
          <div className="faq-item mb-4">
            <h4>1. How can I book a tour?</h4>
            <p>To book a tour, click the "Book Tour" button on our homepage, register or log in, choose the number of persons, complete the payment, and then download your confirmation PDF.</p>
          </div>
          <div className="faq-item mb-4">
            <h4>2. What should I do if I forget my password?</h4>
            <p>If you forget your password, click on the "Forgot Password" link on the login page, and follow the instructions to reset it.</p>
          </div>
          <div className="faq-item mb-4">
            <h4>3. Can I cancel my booking?</h4>
            <p>Yes, you can cancel your booking. Please contact our support team or use the "Cancel" button next to your booking details to initiate the cancellation process.</p>
          </div>
          <div className="faq-item mb-4">
            <h4>4. How will I receive my booking confirmation?</h4>
            <p>After booking, you will receive a confirmation email with your booking details and a downloadable PDF. You can also view and download your confirmation from your account dashboard.</p>
            
          </div>
          <div className="faq-item mb-4">
            <h4>5. How do I contact customer support?</h4>
            <p>You can contact our customer support team via email at support@example.com or through our contact form on the website. We're here to assist you with any questions or issues.</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Booking;
