import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section">
      <h2>Contact Us</h2>
      <p>Feel free to reach out to us with any questions or concerns.</p>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
