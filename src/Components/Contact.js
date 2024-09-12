import { Container, Row, Col } from "react-bootstrap";
import "./Contact.css";
import { Footer } from "./Footer";
import axios from "axios";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Handle input changes
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  // Handle form submission
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      // Await the axios call to ensure data is sent correctly
      const response = await axios.post(
        "http://localhost:8001/api/contact",
        formData
      );

      // Success message
      alert("Form submitted successfully!");

      // Log the response from the backend
      console.log("Response from server:", response.data);

      // Reset form data
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      // Error handling
      console.error("Error submitting form:", error);
      alert("There was an error submitting the form. Please try again later.");
    }
  }

  return (
    <>
      <Container>
        <Row>
          <Col md={12}>
            <h1>Contact Us</h1>
            <p>
              Your Journey begins with a conversation. Reach out to us today!
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <h2>Our Contact Information</h2>
            <p>
              We're here to help and answer any questions you might have. We
              look forward to hearing from you.
            </p>
            <div style={{ display: "flex", gap: "10px" }}>
              <FaPhone className="icon" />
              <p>Phone: +91-123-456-7890</p>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <FaEnvelope className="icon" />
              <p>Email: info@chardhamyatra.com</p>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <FaMapMarkerAlt className="icon" />
              <p>Address: 123 Yatra Road, Haridwar, Uttarakhand, India</p>
            </div>
          </Col>
          <Col md={6}>
            <h2>Follow Us</h2>
            <p>Stay connected with us through social platforms</p>
            <div
              style={{
                display: "flex",
                fontSize: "1.7rem",
                gap: "10px",
                justifyContent: "center",
                marginLeft: "0",
              }}
            >
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.instagram.com/divinechardham/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <h1>Send Us a Message</h1>
            <p>
              If you have any questions, please don't hesitate to send us a
              message. We reply within 24 hours!
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <form onSubmit={handleSubmit}>
              <Row className="mb-3">
                <label className="labels">Name:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="inputs"
                  required
                />
              </Row>
              <Row className="mb-3">
                <label className="labels">Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="inputs"
                  required
                />
              </Row>
              <Row className="mb-3">
                <label className="labels">Subject:</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="inputs"
                  required
                />
              </Row>
              <Row className="mb-3">
                <label className="labels">Message:</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  className="inputs"
                  required
                />
              </Row>
              <button
                type="submit"
                className="btn btn-primary btn-lg"
                style={{ marginTop: "20px", marginBottom: "20px" }}
              >
                Submit
              </button>
            </form>
          </Col>
          <Col md={6}></Col>
        </Row>
        <Row>
          <Col md={12}>
            <h2>Find Us Here</h2>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.943104879844!2d78.16392981464952!3d30.317425381708923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390a05c9c1b0d6f7%3A0x5b5a142d65b7d80f!2sHaridwar%2C%20Uttarakhand%2C%20India!5e0!3m2!1sen!2sus!4v1696281031668!5m2!1sen!2sus"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Haridwar Map"
              ></iframe>
            </div>
          </Col>
        </Row>
        <Row style={{ marginTop: "40px",marginBottom:'40px' }}>
        <Col md={12}>
          <h2 className="text-center">Frequently Asked Questions (FAQ)</h2>

          <div className="faq-item">
            <div className="faq-question">
              <h4>Q: What is the best time to visit Chardham?</h4>
            </div>
            <div className="faq-answer">
              <span>A: The best time to visit Chardham is between May and October, avoiding the monsoon season.</span>
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-question">
              <h4>Q: How can I book a tour?</h4>
            </div>
            <div className="faq-answer">
              <span>A: You can book a tour by contacting us through the form above or calling us directly.</span>
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-question">
              <h4>Q: Are there any special requirements for the Chardham pilgrimage?</h4>
            </div>
            <div className="faq-answer">
              <span>A: Yes, it is advisable to be physically fit and prepared for high altitudes.</span>
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-question">
              <h4>Q: What is included in the tour package?</h4>
            </div>
            <div className="faq-answer">
              <span>A: Our tour packages generally include transportation, accommodation, and guided tours.</span>
            </div>
          </div>
        </Col>
      </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Contact;
