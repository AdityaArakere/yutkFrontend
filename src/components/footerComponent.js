import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top d-flex justify-content-around">
        <div className="footer-col">
          <h3>Customer Service</h3>
          <ul>
            <li><Link to="/contactus">Contact Us</Link></li>
            {/* <li><a href="#">FAQ</a></li>
            <li><a href="#">Returns & Refunds</a></li>
            <li><a href="#">Shipping & Delivery</a></li> */}
          </ul>
        </div>
        <div className="footer-col">
          <h3>Information</h3>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            {/* <li><a href="#">About Us</a></li> */}
            <li><a href="https://www.instagram.com/the_yutk/?hl=en">Blog</a></li>
          </ul>
        </div>
        <div className="footer-col d-flex flex-column align-items-center">
          <h3>Follow Us</h3>
          <ul className="social-links">
            <li><a href="https://www.facebook.com/theyutk?mibextid=LQQJ4d"><FaFacebook /></a></li>
            <li><a href="https://www.instagram.com/the_yutk/?hl=en"><FaInstagram /></a></li>
          </ul>
        </div>
        {/* <div className="footer-col">
          <h3>Subscribe to our Newsletter</h3>
          <p>Get the latest news and special offers.</p>
          <p className='subscribe'>Coming Soon</p>

          <form>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div> */}
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Yutk. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
