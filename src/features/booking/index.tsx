import Section from '../../shared/components/Section';

const Booking = () => (
  <Section id="booking" eyebrow="Book A Consultation" title="Let's discuss how I can help your business.">
    <div className="booking-layout">
      <form className="form-grid">
        <input placeholder="Full Name" aria-label="Full name" />
        <input type="email" placeholder="Email Address" aria-label="Email address" />
        <input placeholder="Phone Number" aria-label="Phone number" />
        <select aria-label="Service needed">
          <option>Service Needed</option>
          <option>Website Development</option>
          <option>Digital Marketing</option>
          <option>SEO Optimization</option>
          <option>Branding Consultation</option>
        </select>
        <input type="date" aria-label="Preferred date" />
        <input type="time" aria-label="Preferred time" />
        <select aria-label="Project budget">
          <option>Project Budget</option>
          <option>Below KES 25,000</option>
          <option>KES 25,000 - 75,000</option>
          <option>KES 75,000+</option>
        </select>
        <textarea aria-label="Project description" placeholder="Project Description" />
        <button type="submit">Book Consultation</button>
      </form>
      <div className="calendar-art" aria-hidden="true">
        <span />
      </div>
    </div>
  </Section>
);

export default Booking;
