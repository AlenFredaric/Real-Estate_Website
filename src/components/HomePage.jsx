import React from 'react';
import Slider from 'react-slick'; 
import './HomePage.css';
import image1 from '../assets/image1.avif';
import image2 from '../assets/image2.avif';
import image3 from '../assets/image3.avif';
import sliderImage from '../assets/SliderImage.jpg'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaShieldAlt, FaHandshake, FaLeaf } from 'react-icons/fa';



const HomePage = () => {
    const handleBookAppointment = () => {
        const phoneNumber = '1234567890'; 
        const message = 'I would like to book an appointment.'; 
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024, 
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 768, 
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                },
            },
        ],
    };
    

    return (
            <div className="home-page">
              <div className="home-wrapper">
                <section className="carousel-section">
                  <Slider {...settings}>
                    <div>
                      <img src={image1} alt="Image 1" className="carousel-image" />
                    </div>
                    <div>
                      <img src={image2} alt="Image 2" className="carousel-image" />
                    </div>
                    <div>
                      <img src={image3} alt="Image 3" className="carousel-image" />
                    </div>
                    <div>
                      <img src={sliderImage} alt="Slider Image" className="carousel-image" />
                    </div>
                  </Slider>
                </section>

                <section className="hero-section">
                  <div className="hero-content">
                    <h1>WELCOME TO GLOBAL HABITAT</h1>
                    <p>
                      We are a new age real estate company with a vision to change the
                      landscape of emerging metropolises. Having considerable experience
                      in the construction and real estate industry, we have accrued the
                      best from every project we work on. This has helped us evolve our
                      own work philosophy: one that creates harmony of quality and
                      affordability.
                    </p>
                    <button className="our-projects-button">
                      <a href="/projects">Project</a>
                    </button>
                  </div>
                </section>
          
                <section className="appointment-section" id="appointment">
                  <div className="appointment-content">
                    <h2>Book an Appointment</h2>
                    <p>
                      Ready to explore your future home or investment opportunity? Schedule a personalized appointment with our real estate experts and get all your questions answered. We’re here to help you make confident property decisions.
                    </p>
                    <button className="book-appointment-button" onClick={handleBookAppointment}>
                      Book Now
                    </button>
                  </div>
                </section>
          
                <section className="promise-section">
                  <h2>Our Promise</h2>
                  <div className="promise-cards">
                    <div className="promise-card">
                      <FaShieldAlt size={32} color="#0a0a6e" />
                      <h3>Safety</h3>
                      <p>Safety is the most important of our core values. It is our first priority.</p>
                    </div>
                    <div className="promise-card">
                      <FaHandshake size={32} color="#0a0a6e" />
                      <h3>Community</h3>
                      <p>Involvement and support of the community are at the heart of us.</p>
                    </div>
                    <div className="promise-card">
                      <FaLeaf size={32} color="#0a0a6e" />
                      <h3>Sustainability</h3>
                      <p>Structure's commitment to green building and sustainability.</p>
                    </div>
                  </div>
                </section>
          
                <section className="testimonial-section">
                  <h2>What Our Clients Say</h2>
                  <div className="testimonial-card">
                    <p>
                      "Global Habitat exceeded our expectations. From the first interaction to the
                      final walkthrough, their team was professional, honest, and committed. Highly
                      recommend!"
                    </p>
                    <h4>— Priya Sharma</h4>
                  </div>
                </section>
              </div>
            </div>          
    );
};

export default HomePage;