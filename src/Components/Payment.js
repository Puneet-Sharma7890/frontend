import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { loadStripe } from "@stripe/stripe-js";
import { Row, Col, Container } from "react-bootstrap";

export function Payment() {
  const [numPersons, setNumPersons] = useState(1); // State to manage the number of persons

  const Tour = {
    name: "Explore India Tours",
    description: "Your Gateway to Incredible India",
    price: 5000, // Price per person
  };

  const makePayment = async () => {
    const stripe = await loadStripe("pk_test_51PqcTy09PFyuOsY3eqVCptGkDeCX2hKGa3jiUAXheljnI6mDNrMb1dh728tXHrozc7jogbwmYV6RyHwDI3TSb4Zq00y0pYhQNB");

    const totalPrice = Tour.price * numPersons;
    const body = {
      tour: { ...Tour, totalPrice }, // Include totalPrice in the body
    };
    const headers = {
      
      "Content-Type": "application/json",
    };

    const response = await fetch("http://localhost:8001/api/create-checkout-session", {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body),
    });

    const session = await response.json();

    const result = await stripe.redirectToCheckout({ sessionId: session.id });

    
    if (result.error) {
      console.log(result.error);
    }
  };

  const handleNumPersonsChange = (e) => {
    setNumPersons(parseInt(e.target.value, 10)); // Update number of persons
  };

  return (
    <>
      <Container>
        <Row>
          <Col md={12}>
            <h1>Thank you for choosing our Chardham Yatra Tour!</h1>
            <p>We are delighted to offer you an unforgettable journey through the sacred shrines of Yamunotri, Gangotri, Kedarnath, and Badrinath. Our tour is designed to provide you with a spiritual and enriching experience, immersing you in the beauty and serenity of these holy places.</p>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <label>Select Number of Persons:</label>
            <select
              id="numPersons"
              value={numPersons}
              onChange={handleNumPersonsChange}
              className="form-select"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(number => (
                <option key={number} value={number}>{number}</option>
              ))}
            </select>
            <p className="total-price">Total Price: ₹{Tour.price * numPersons}</p>
          </Col>
        </Row>
        <Row style={{ textAlign: "center" }}>
          <Col md={12}>
            <button
              type="button"
              className="btn btn-primary btn-lg"
              onClick={makePayment}
            >
              <i className="fas fa-credit-card"></i> Pay Now
            </button>
          </Col>
        </Row>
      </Container>
    </>
  );
}
