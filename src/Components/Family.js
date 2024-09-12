// src/components/FamilyTours.js

import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./Cultural.css"; // Reuse the same CSS file for consistency
import { Footer } from "./Footer";

const familyTourPackages = [
  {
    name: "Family Chardham Yatra Package",
    duration: "5 Days / 4 Nights",
    highlights: [
      "Yamunotri Temple",
      "Gangotri Temple",
      "Kedarnath Temple",
      "Badrinath Temple",
    ],
    inclusions: [
      "Comfortable family accommodation",
      "All meals (breakfast, lunch, dinner)",
      "Transportation (car, bus, or helicopter as per package)",
      "Family-friendly guided tours at each site",
      "Assistance with temple rituals and pujas",
    ],
  },
  {
    name: "Family Chardham Yatra Package",
    duration: "7 Days / 6 Nights",
    highlights: [
      "Yamunotri Temple",
      "Gangotri Temple",
      "Kedarnath Temple",
      "Badrinath Temple",
    ],
    inclusions: [
      "Comfortable family accommodation",
      "All meals (breakfast, lunch, dinner)",
      "Transportation (car, bus, or helicopter as per package)",
      "Family-friendly guided tours at each site",
      "Assistance with temple rituals and pujas",
    ],
  },
  {
    name: "Family Chardham Yatra Package",
    duration: "9 Days / 8 Nights",
    highlights: [
      "Yamunotri Temple",
      "Gangotri Temple",
      "Kedarnath Temple",
      "Badrinath Temple",
    ],
    inclusions: [
      "Comfortable family accommodation",
      "All meals (breakfast, lunch, dinner)",
      "Transportation (car, bus, or helicopter as per package)",
      "Family-friendly guided tours at each site",
      "Assistance with temple rituals and pujas",
    ],
  },
];

export function Family() {
  return (
    <>
      <Container
        fluid
        style={{ fontFamily: "Times New Roman", backgroundColor: 'aliceblue' }}
      >
        <Row>
          <Col md={12} className="mt-3">
            <h1>Welcome to the Family Chardham Yatra</h1>
            <p className="text-center">
              Enjoy a Memorable Family Journey through the Sacred Chardham
            </p>
          </Col>
        </Row>
        <Row className="ml-4">
          <Col md={12}>
            <h2>Why Choose Family Chardham Yatra?</h2>
            <ul>
              <li>
                <strong>Family Bonding:</strong> Strengthen family ties while
                exploring the sacred sites of Yamunotri, Gangotri, Kedarnath, and
                Badrinath.
              </li>
              <li>
                <strong>Comfort and Convenience:</strong> Enjoy comfortable
                accommodations and hassle-free transportation, making your family
                trip smooth and enjoyable.
              </li>
              <li>
                <strong>Kid-Friendly Activities:</strong> Engage in activities
                suitable for all ages, ensuring that every family member has a
                memorable experience.
              </li>
            </ul>
          </Col>
        </Row>
        <Row className="mt-3 ml-4">
          <Col md={12}>
            <h1>Our Exclusive Family Packages</h1>
          </Col>
        </Row>
        <Row className="ml-3">
          <Col md={12}>
            <Row>
              {familyTourPackages.map((pkg, index) => (
                <Col key={index} md={4} className="mb-4">
                  <div className="package">
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
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <h2>Explore Together</h2>
            <p>
              <strong>Yamunotri:</strong> Begin your family journey at
              Yamunotri, enjoying the natural beauty and serene environment,
              perfect for family relaxation.
            </p>
            <p>
              <strong>Gangotri:</strong> Visit Gangotri, where you can
              participate in the evening aarti ceremony, a captivating experience
              for the entire family.
            </p>
            <p>
              <strong>Kedarnath:</strong> Pay your respects at the Kedarnath
              Temple, dedicated to Lord Shiva, amidst the beautiful Kedarnath
              range, with family-friendly activities available.
            </p>
            <p>
              <strong>Badrinath:</strong> Conclude your pilgrimage at
              Badrinath, and immerse your family in the divine ambiance and
              rich cultural heritage of this sacred site.
            </p>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md={4}>
            <h3>5 Days/ 4 Nights</h3>
            <ul>
              <li>
                <strong>1 Person</strong> ₹4,000
              </li>
              <li>
                <strong>4 Persons</strong> ₹15,000
              </li>
              <li>
                <strong>6 Persons</strong> ₹22,500
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <h3>7 Days/ 6 Nights</h3>
            <ul>
              <li>
                <strong>1 Person</strong> ₹6,000
              </li>
              <li>
                <strong>4 Persons</strong> ₹18,000
              </li>
              <li>
                <strong>6 Persons</strong> ₹25,500
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <h3>9 Days/ 8 Nights</h3>
            <ul>
              <li>
                <strong>1 Person</strong> ₹8,000
              </li>
              <li>
                <strong>4 Persons</strong> ₹20,000
              </li>
              <li>
                <strong>6 Persons</strong> ₹28,500
              </li>
            </ul>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md={12}>
            <h4 className="text-dark">
              <strong>Note:</strong> For larger family groups, please contact us
              for personalized pricing and arrangements. We offer customized
              options and special discounts for families to make your trip as
              enjoyable and memorable as possible. Feel free to reach out for
              further details and assistance.
            </h4>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
