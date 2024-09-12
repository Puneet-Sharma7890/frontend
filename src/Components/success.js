import React, { useState, useEffect } from "react";
import jsPDF from "jspdf";
import axios from "axios";
import { Row, Container, Col, Button } from "react-bootstrap";

export function Success() {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Fetch total price from the server
    axios.get("http://localhost:8001/api/totalprice")
      .then(response => {
        setTotalPrice(response.data.totalprice);
      })
      .catch(error => {
        console.error("Error fetching total price:", error);
      });
  }, []);

  const generatePDF = () => {
    const doc = new jsPDF();

    // Add content to the PDF
    doc.text("Payment Successful!", 10, 10);
    doc.text("Thank you for your purchase.", 10, 20);
    doc.text("Your transaction was completed successfully.", 10, 30);

    // Add more details about the transaction if available
    doc.text("Transaction Details:", 10, 50);
    doc.text(`Total Amount: ₹${totalPrice}`, 10, 60);

    // Save the PDF
    doc.save("Payment_Receipt.pdf");
  };

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h1 style={{ textAlign: "center" }}>Thank You!</h1>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <p style={{ textAlign: "center" }}>
            Your payment was successful. Click the button below to download
            your receipt.
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={12} style={{ textAlign: "center" }}>
          <Button onClick={generatePDF} size="lg" variant="primary">
            Download PDF Receipt
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
