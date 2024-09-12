// src/App.js
import "./App.css";
import React, { Suspense, lazy, useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Nav1 } from "./Components/Navbar1";
import { Chardhamhistory } from "./Components/Chardhamhistory";
import { Family } from "./Components/Family";
import { Pilgrimage } from "./Components/Pilgrimage";
import { Cultural } from "./Components/Cultural";
import { Register } from "./Components/Register";
import { Login } from "./Components/Login";
import { Success } from "./Components/success";
import { Payment } from "./Components/Payment";
import { VerifyEmail } from "./Components/VerifyEmail";
import UserDetails from "./Components/Userdetails";
import BookingDetails from "./Components/Bookingdetails";
import ContactDetails from "./Components/Contactdetails";
import AdminDashboard from "./Components/Admin";

// Lazy loading components
const Home = lazy(() => import("./Components/Home"));
const About = lazy(() => import("./Components/About"));
const Blogs = lazy(() => import("./Components/Blogs"));
const Contact = lazy(() => import("./Components/Contact"));
const Tours = lazy(() => import("./Components/Tours"));
const Booking = lazy(() => import("./Components/Booking"));

function App() {
  const [role, setRole] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check the user's role from localStorage
    const savedRole = localStorage.getItem("role");
    setRole(savedRole);

    // Redirect to login if no role is found
    if (!savedRole) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <>
      <Nav1 />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chardhamhistory" element={<Chardhamhistory />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/verifyemail" element={<VerifyEmail />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/cultural" element={<Cultural />} />
          <Route path="/family-tours" element={<Family />} />
          <Route path="/pilgrimage-tours" element={<Pilgrimage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/success" element={<Success />} />
          {/* Conditionally render Admin route only for admin role */}
          {role === "admin" && (
            <Route path="/admin" element={<AdminDashboard />}></Route>
          )}
          {role === "admin" && (
            <Route path="/admin/user-details" element={<UserDetails />} />
          )}
          {role === "admin" && (
            <Route path="/admin/booking" element={<BookingDetails />} />
          )}{" "}
          {role === "admin" && (
            <Route path="/admin/contact-details" element={<ContactDetails />} />
          )}
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
