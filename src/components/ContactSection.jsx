import './ContactSection.css';
import { useState } from 'react';

function ContactSection() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert("Thank you for contacting us!");
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div>
        <section id="contact" className="contact-section">
            <div className="contact-container">
                <h2>Contact Us</h2>
                <p>Have questions? We'd love to hear from you!</p>
                <form onSubmit={handleSubmit} className="contact-form">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        name="message"
                        rows="5"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                    <button type="submit">Send Message</button>
                </form>

                
            </div>
        </section>
        <section className="map-section">
        <h2>Find Us</h2>
        <div className="map-container">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d125211.36951083006!2d75.74009281456225!3d11.272045541063916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3ba65dcf07b7b67b%3A0xbca005964a65031e!2s2nd%20Floor%2C%20Onyx%2C%20Golf%20Link%20Rd%2C%20Chevayoor%2C%20Kozhikode%2C%20Kerala%20673017!3m2!1d11.272056899999999!2d75.8224947!5e0!3m2!1sen!2sin!4v1745085414148!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
        <div>
          <div className="footer-contact">
            <h4>Global Habitat</h4>
            <h4>
              2nd Floor, Onyx, Golf Link Rd, Chevayoor, Kozhikode, Kerala
            </h4>
            <h4>
              &#9990; +91 99468 30300 <br />
              &#9990; +91 95009 03100
            </h4>
            <h4>✉ helpdesk.calicut@globalhabitat.co.in</h4>
          </div>
        </div>
    </section>
    </div>
    );
}

export default ContactSection;
