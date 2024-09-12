import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-3">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <h5>Contact Us</h5>
            <p style={{marginRight:'190px'}}>Email: <a href="mailto:info@chardham.com" className="text-white">info@chardham.com</a></p>
            <p style={{marginRight:'210px'}}>Phone: <a href="tel:+911234567890" className="text-white">+91 12345 67890</a></p>
            <p style={{marginRight:'150px'}}>Address: Haridwar, Uttarakhand, India</p>
          </div>
          <div className="col-md-4 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white">Home</a></li>
              <li><a href="/about" className="text-white">About</a></li>
              <li><a href="/tours" className="text-white">Tours</a></li>
              <li><a href="/contact" className="text-white">Contact Us</a></li>
              <li><a href="/blogs" className="text-white">Blogs</a></li>
              <li><a href="/booking" className="text-white">Booking</a></li>
            </ul>
          </div>
          <div className="col-md-4 mb-4">
            <h5>Follow Us</h5>
            <div className="d-flex">
              <a href="https://facebook.com" className="text-white me-3" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" className="text-white me-3" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" className="text-white me-3" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" className="text-white" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center py-3">
          <p className="text-white mb-2">&copy; 2024 Chardham Yatra. All rights reserved.</p>
          <a href="/subscribe" className="btn btn-light">Subscribe to Our Travellers</a>
        </div>
      </div>
    </footer>
  );
}
