import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import './AdminDashboard.css'; // Import the custom CSS

const AdminDashboard = () => {
  return (
    <Container fluid>
      <Row>
        {/* Sidebar */}
        <Col xs={12} md={3} lg={2} className="sidebar">
          <Nav className="flex-column">
            <Nav.Link as={Link} to="/admin/user-details" className="tab">
              User Details
            </Nav.Link>
            <Nav.Link as={Link} to="/admin/booking" className="tab">
              Booking
            </Nav.Link>
            <Nav.Link as={Link} to="/admin/contact-details" className="tab">
              Contact Details
            </Nav.Link>
          </Nav>
        </Col>
        {/* Content Area */}
        <Col xs={12} md={9} lg={10} className="content-area">
          <Container>
            <Outlet />
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminDashboard;
