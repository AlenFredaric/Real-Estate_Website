import React from 'react';
import './AboutSection.css';
import aboutImage from '../assets/about.avif';
import aboutImg2 from '../assets/aboutImg2.avif';

function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="about-hero">
        <h2 className="about-subtitle">Our Story</h2>
        <h1 className="about-title">About Us</h1>
      </div>

      <div className="about-card">
        <div className="about-text">
          <p>
            At Global Habitat, we strive to create exceptional spaces that reflect our commitment to quality, sustainability, and innovation.
            Our journey began with a vision to redefine urban living, and over the years, we've grown into a leading real estate developer known for
            our distinctive designs and customer-centric approach.
          </p>
          <p>
            Our team of experienced architects, engineers, and designers works tirelessly to ensure that every project we undertake is executed
            to perfection, delivering value to our clients and communities. We believe in creating not just buildings, but vibrant ecosystems where
            people can thrive.
          </p>
          <p>
            We are committed to sustainable practices, integrating green technologies and eco-friendly materials into our projects.  From
            residential complexes to commercial spaces, we focus on creating environments that enhance quality of life and stand the test of time.
          </p>
        </div>
        <div className="about-image">
          <img src={aboutImage} alt="About Global Habitat" />
        </div>
      </div>

      <div className="about-card">
        <div className="about-image">
          <img src={aboutImg2} alt="About Global Habitat" />
        </div>
        <div className="about-text">
          <p>
            Global Habitat is more than a construction company; we are a collective of passionate individuals dedicated to shaping the future of
            urban landscapes.  We understand that a home is more than just four walls; it's where memories are made, and life unfolds.  That's why we
            pour our hearts into every detail, ensuring that your living space is both functional and inspirational.
          </p>
          <p>
            Our commitment to innovation drives us to constantly explore new construction techniques and design philosophies. We embrace challenges
            and view them as opportunities to push the boundaries of what's possible.  With a focus on transparency, integrity, and timely delivery,
            we aim to build lasting relationships with our customers and partners.
          </p>
        </div>
      </div>

      <div className="stats-section">
        <div className="stat-box">
          <h2>5</h2>
          <p>Launched</p>
        </div>
        <div className="stat-box">
          <h2>135</h2>
          <p>Project's Completed</p>
        </div>
        <div className="stat-box">
          <h2>4</h2>
          <p>Ready to Move In</p>
        </div>
        <div className="stat-box">
          <h2>4</h2>
          <p>Ongoing</p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
