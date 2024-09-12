import React, { useEffect, useState } from "react";
import { Navbar, Nav, Image } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../Imagess/Logo5.png"; // Path to your logo image

export function Nav1() {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);
  // Check if the user is admin
  useEffect(() => {
    const role = localStorage.getItem("role"); // Assuming the role is stored in localStorage during login
    console.log('in navigation',role)
    if (role === "admin") {
      setIsAdmin(true);
    }
    else{
      setIsAdmin(false)
    }
  }, []);

  return (
    <Navbar
      expand="lg"
      style={{ backgroundColor: "#003366", height: "15vh", padding: "0 15px" }} // Added padding to prevent overflow
      className="sticky-top"
    >
      <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
        <Image
          src={Logo}
          style={{ width: "50px", height: "auto", borderRadius: "50%" }}
          alt="Logo"
        />
        <span
          style={{
            fontSize: "1.8rem",
            color: "#f0f0f0",
            fontFamily: "Times New Roman",
            marginLeft: "10px",
          }}
        >
          Divine Chardham
        </span>
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="navbarNav"
        style={{ borderColor: "#f0f0f0" }}
      />
      <Navbar.Collapse id="navbarNav" className="justify-content-between">
        <Nav className="mx-auto" style={{ gap: "15px" }}>
          <Nav.Link
            as={Link}
            to="/"
            style={{
              color: "#f0f0f0",
              fontFamily: "Times New Roman",
              fontSize: "20px",
            }}
          >
            Home
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/tours"
            style={{
              color: "#f0f0f0",
              fontFamily: "Times New Roman",
              fontSize: "20px",
            }}
          >
            Tours
          </Nav.Link>
          {/* <Nav.Link
            as={Link}
            to="/blogs"
            style={{
              color: "#f0f0f0",
              fontFamily: "Times New Roman",
              fontSize: "20px",
            }}
          >
            Blogs
          </Nav.Link> */}
          <Nav.Link
            as={Link}
            to="/booking"
            style={{
              color: "#f0f0f0",
              fontFamily: "Times New Roman",
              fontSize: "20px",
            }}
          >
            Booking
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/about-us"
            style={{
              color: "#f0f0f0",
              fontFamily: "Times New Roman",
              fontSize: "20px",
            }}
          >
            About Us
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/contact"
            style={{
              color: "#f0f0f0",
              fontFamily: "Times New Roman",
              fontSize: "20px",
            }}
          >
            Contact Us
          </Nav.Link>
          {isAdmin && (
            <Nav.Link
              as={Link}
              to="/admin"
              style={{
                color: "#f0f0f0",
                fontFamily: "Times New Roman",
                fontSize: "20px",
              }}
            >
              Admin
            </Nav.Link>
          )}
        </Nav>
        <div className="d-flex align-items-center">
          <button
            type="button"
            className="btn btn-light btn-sm"
            style={{ marginLeft: "10px" }}
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </button>
          <button
            type="button"
            className="btn btn-outline-light btn-sm"
            style={{ marginLeft: "10px" }}
            onClick={() => {
              navigate("/register");
            }}
          >
            Register
          </button>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}
