import './WhyChooseUsSection.css';

function WhyChooseUsSection() {
  return (
    <section id="why" className="why-section">
      <div className="why-container">
        <div className='why-hero'>
          <h2>Why Choose Us</h2>
          <p className="why-intro">
            We bring value, reliability, and experience to every project we touch.
          </p>
        </div>

        <div className="why-cards">
          <div className="why-card">
            <h3>Quality Construction</h3>
            <p>We use premium materials and skilled labor to ensure top-notch build quality.</p>
          </div>
          <div className="why-card">
            <h3>Timely Delivery</h3>
            <p>Our projects are delivered on schedule with efficient planning and execution.</p>
          </div>
          <div className="why-card">
            <h3>Client-Centric Approach</h3>
            <p>We listen, adapt, and deliver tailored solutions for each client's needs.</p>
          </div>
          <div className="why-card">
            <h3>Sustainable Designs</h3>
            <p>We prioritize eco-friendly designs that are future-ready and cost-effective.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUsSection;
