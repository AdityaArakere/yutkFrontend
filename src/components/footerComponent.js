import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-col">
          <h3>Customer Service</h3>
          <ul>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Returns & Refunds</a></li>
            <li><a href="#">Shipping & Delivery</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h3>Information</h3>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="https://www.instagram.com/the_yutk/?hl=en">Blog</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h3>Follow Us</h3>
          <ul className="social-links">
            <li><a href="#"><FaFacebook /></a></li>
            <li><a href="#"><FaTwitter /></a></li>
            <li><a href="https://www.instagram.com/the_yutk/?hl=en"><FaInstagram /></a></li>
            <li><a href="#"><FaLinkedin /></a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h3>Subscribe to our Newsletter</h3>
          <p>Get the latest news and special offers.</p>
          <form>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Yutk. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
