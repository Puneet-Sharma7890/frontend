// src/components/Cultural.js

import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./Cultural.css";
import { Footer } from "./Footer";

const packages = [
  {
    name: "Cultural Chardham Yatra Package",
    duration: "5 Days / 4 Nights",
    highlights: [
      "Yamunotri Temple",
      "Gangotri Temple",
      "Kedarnath Temple",
      "Badrinath Temple",
    ],
    inclusions: [
      "Comfortable accommodation",
      "All meals (breakfast, lunch, dinner)",
      "Transportation (car, bus, or helicopter as per package)",
      "Guided tours at each site",
      "Assistance with temple rituals and pujas",
    ],
  },
  {
    name: "Cultural Chardham Yatra Package",
    duration: "7 Days / 6 Nights",
    highlights: [
      "Yamunotri Temple",
      "Gangotri Temple",
      "Kedarnath Temple",
      "Badrinath Temple",
    ],
    inclusions: [
      "Comfortable accommodation",
      "All meals (breakfast, lunch, dinner)",
      "Transportation (car, bus, or helicopter as per package)",
      "Guided tours at each site",
      "Assistance with temple rituals and pujas",
    ],
  },
  {
    name: "Cultural Chardham Yatra Package",
    duration: "9 Days / 8 Nights",
    highlights: [
      "Yamunotri Temple",
      "Gangotri Temple",
      "Kedarnath Temple",
      "Badrinath Temple",
    ],
    inclusions: [
      "Comfortable accommodation",
      "All meals (breakfast, lunch, dinner)",
      "Transportation (car, bus, or helicopter as per package)",
      "Guided tours at each site",
      "Assistance with temple rituals and pujas",
    ],
  },
];

export function Cultural() {
  return (
    <>
      <Container
        fluid
        style={{ fontFamily: "Times New Roman",backgroundColor:'aliceblue' }}
      >
        <Row >
          <Col md={12} style={{marginTop:'30px'}}>
            <h1>Welcome to the Chardham Yatra</h1>
            <p style={{ textAlign: "center" }}>
              Embark on a Spiritual Journey through the Sacred Chardham
            </p>
          </Col>
        </Row>
        <Row className="marginleft">
          <Col md={12}>
            <h2>Why Choose Chardham Yatra?</h2>
            <ul style={{ marginLeft: "40px" }}>
              <li>
                <strong>Sacred Significance:</strong> Explore the revered sites
                of Yamunotri, Gangotri, Kedarnath, and Badrinath, each holding
                deep spiritual significance.
              </li>
              <li>
                <strong>Scenic Beauty:</strong> Witness the breathtaking beauty
                of the Himalayas with lush valleys, snow-capped peaks, and
                pristine rivers.
              </li>
              <li>
                <strong>Cultural Immersion:</strong> Experience the rich
                cultural heritage of Uttarakhand, including traditional rituals,
                local cuisine, and vibrant festivals.
              </li>
            </ul>
          </Col>
        </Row>
        <Row style={{ marginTop: "30px" }} className="marginleft">
          <Col md={12}>
            <h1>Our Exclusive Packages</h1>
          </Col>
        </Row>
        <Row style={{ marginLeft: "15px" }}>
          <Col md={12}>
            <Row>
              {packages.map((pkg, index) => (
                <div className="package" key={index}>
                  <h3>{pkg.name}</h3>
                  <p>
                    <strong>Duration:</strong> {pkg.duration}
                  </p>
                  <h4>Highlights:</h4>
                  <ul>
                    {pkg.highlights.map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                  <h4>Inclusions:</h4>
                  <ul>
                    {pkg.inclusions.map((inclusion, idx) => (
                      <li key={idx}>{inclusion}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>Experience the Divine</h2>
            <p>
              <strong>Yamunotri:</strong> Begin your journey at Yamunotri, the
              source of the sacred Yamuna River, surrounded by lush green
              meadows and breathtaking views.
            </p>
            <p>
              <strong>Gangotri:</strong> Visit Gangotri, the origin of the holy
              Ganges, and take part in the evening aarti ceremony on the banks
              of the river.
            </p>
            <p>
              <strong>Kedarnath:</strong> Pay homage at the Kedarnath Temple,
              dedicated to Lord Shiva, and enjoy the serene landscape of the
              Kedarnath range.
            </p>
            <p>
              <strong>Badrinath:</strong> Conclude your pilgrimage at Badrinath,
              dedicated to Lord Vishnu, and immerse yourself in the divine
              atmosphere of this sacred site.
            </p>
          </Col>
        </Row>
        <Row style={{ marginTop: "20px" }}>
          <Col md={12}>
            <h1 style={{ fontSize: "50px" }}>Pricing List</h1>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <h3>5 Days/ 4 Nights</h3>
            <ul>
              <li>
                <strong>1 Persons</strong>₹4,000
              </li>
              <li>
                <strong>4 Persons</strong>₹15,000
              </li>
              <li>
                <strong>6 Persons</strong>₹22,500
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <h3>7 Days/ 6 Nights</h3>
            <ul>
              <li>
                <strong>1 Persons</strong>₹6,000
              </li>
              <li>
                <strong>4 Persons</strong>₹18,000
              </li>
              <li>
                <strong>6 Persons</strong>₹25,500
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <h3>9 Days/ 8 Nights</h3>
            <ul>
              <li>
                <strong>1 Persons</strong>₹8,000
              </li>
              <li>
                <strong>4 Persons</strong>₹20,000
              </li>
              <li>
                <strong>6 Persons</strong>₹28,500
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <h4 style={{color:'black'}}>
              <strong>Note:</strong>If your group consists of more than 6
              people, please reach out to us directly for personalized pricing
              and arrangements. We are happy to offer customized options and
              special discounts for larger groups to ensure your experience is
              as enjoyable and seamless as possible. Feel free to contact us for
              further details and assistance.
            </h4>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
