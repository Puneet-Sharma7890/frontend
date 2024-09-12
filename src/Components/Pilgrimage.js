// src/components/Pilgrimage.js

import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./Cultural.css"; // Reuse the same CSS file for consistency
import { Footer } from "./Footer";

const pilgrimagePackages = [
  {
    name: "Pilgrimage Chardham Yatra Package",
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
    name: "Pilgrimage Chardham Yatra Package",
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
    name: "Pilgrimage Chardham Yatra Package",
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

export function Pilgrimage() {
  return (
    <>
      <Container
        fluid
        style={{ fontFamily: "Times New Roman", backgroundColor: 'aliceblue' }}
      >
        <Row>
          <Col md={12} className="mt-3">
            <h1>Welcome to the Pilgrimage Chardham Yatra</h1>
            <p className="text-center">
              Embark on a Divine Pilgrimage through the Sacred Chardham
            </p>
          </Col>
        </Row>
        <Row className="ml-4">
          <Col md={12}>
            <h2>Why Choose Pilgrimage Chardham Yatra?</h2>
            <ul>
              <li>
                <strong>Spiritual Journey:</strong> Experience the spiritual
                essence of the Chardham temples, each holding immense religious
                significance.
              </li>
              <li>
                <strong>Serene Environment:</strong> Enjoy the tranquil and
                peaceful surroundings of the Himalayan region.
              </li>
              <li>
                <strong>Traditional Experience:</strong> Engage in traditional
                rituals and immerse yourself in the rich religious practices.
              </li>
            </ul>
          </Col>
        </Row>
        <Row className="mt-3 ml-4">
          <Col md={12}>
            <h1>Our Exclusive Pilgrimage Packages</h1>
          </Col>
        </Row>
        <Row className="ml-3">
          <Col md={12}>
            <Row>
              {pilgrimagePackages.map((pkg, index) => (
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
            <h2>Experience the Sacred Sites</h2>
            <p>
              <strong>Yamunotri:</strong> Begin your spiritual journey at
              Yamunotri, the source of the Yamuna River, surrounded by the serene
              beauty of the Himalayas.
            </p>
            <p>
              <strong>Gangotri:</strong> Visit Gangotri, the origin of the holy
              Ganges River, and participate in the evening aarti ceremony.
            </p>
            <p>
              <strong>Kedarnath:</strong> Pay your respects at the Kedarnath
              Temple, dedicated to Lord Shiva, amidst the stunning Kedarnath
              range.
            </p>
            <p>
              <strong>Badrinath:</strong> Conclude your pilgrimage at Badrinath,
              a revered site dedicated to Lord Vishnu, and experience the divine
              ambiance.
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
              <strong>Note:</strong> For groups larger than 6 people, please
              contact us for personalized pricing and arrangements. We offer
              customized options and special discounts for larger groups to
              enhance your experience. Feel free to reach out for more details
              and assistance.
            </h4>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
