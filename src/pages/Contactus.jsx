import React from "react";
import "./Contactus.css";

const Contactus = () => {
  return (
    <div className="contact-container">
      <div className="contact-info">
        <h2>CONTACT INFORMATION</h2>
        <p>
          Write to us or call us, get quick responses powered by our advanced
          customer support team.
        </p>
        <div className="contact-details">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci quas autem optio eum nulla 
          </p>
          <p> Call: +91-9999999999</p>
          <p>Whatsapp: +91-999999999</p>
        </div>
        <div className="social-media">
          <h3>GET IN TOUCH</h3>
          <div className="social-icons">
            <a href="#" className="facebook">
              Facebook
            </a>
            <a href="#" className="youtube">
              YouTube
            </a>
            <a href="#" className="instagram">
              Instagram
            </a>
          </div>
        </div>
      </div>
      <div className="contact-form">
        <h2>WE WANT TO HEAR FROM YOU!</h2>
        <form>
          <input type="text" placeholder="Full Name*" required />
          <input type="email" placeholder="Email ID*" required />
          <div className="phone-location">
            <select>
              <option value="+91">+91</option>
              <option value="+1">+1</option>
              <option value="+44">+44</option>
            </select>
            <input type="tel" placeholder="Phone No*" required />
          </div>
          <input type="text" placeholder="Location*" required />
          <textarea placeholder="Comments Here*" required></textarea>
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
  );
};

export default Contactus;
