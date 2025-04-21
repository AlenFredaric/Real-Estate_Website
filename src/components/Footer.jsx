import React from 'react';
import './Footer.css';
import fblogo from '../assets/facebook-logo.png';
import instalogo from '../assets/instagram-logo.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <ul className="footer-links">
                    <li><a href="/">Home</a></li>
                    <br />
                    <li><a href="/about">About</a></li>
                    <br />
                    <li><a href="/why">Why Choose Us</a></li>
                    <br />
                    <li><a href="/projects">Projects</a></li>
                    <br />
                    <li><a href="/contact">Contact</a></li>
                </ul>

                <div className="footer-contact">
                    <p> +91 98765 43210</p>
                    <p> info@globalhabitat.in</p>
                </div>

                <div className="footer-socials">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><img src={fblogo} alt="Facebook logo" /></a>
                    &emsp;
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><img src={instalogo} alt="Facebook logo" /></a>
                </div>

                <div className="footer-copy">© 2025 Global Habitat. All rights reserved.</div>
            </div>
        </footer>
    );
};

export default Footer;
