import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Useful Links Section */}
        <div className="footer-column">
          <h4 className="footer-heading">HELPFUL RESOURCES</h4>
          <ul className="footer-links">
            <li><a href="/team">Our Team</a></li>
            <li><a href="/blogs">Blogs</a></li>
            <li><a href="/faq">FAQs</a></li>
            <li><a href="/support">Customer Support</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Our Services Section */}
        <div className="footer-column">
          <h4 className="footer-heading">OUR SERVICES</h4>
          <ul className="footer-links">
            <li><a href="/services/web-design">Web Design</a></li>
            <li><a href="/services/seo">SEO Optimization</a></li>
            <li><a href="/services/content-writing">Content Writing</a></li>
            <li><a href="/services/social-media">Social Media Management</a></li>
            <li><a href="/services/ecommerce">E-Commerce Solutions</a></li>
          </ul>
        </div>

        {/* Tools & Resources Section */}
        <div className="footer-column">
          <h4 className="footer-heading">TOOLS & RESOURCES</h4>
          <ul className="footer-links">
            <li><a href="/tools/website-builder">Website Builder</a></li>
            <li><a href="/tools/analytics">Analytics Dashboard</a></li>
            <li><a href="/tools/crm">CRM Tools</a></li>
            <li><a href="/tools/marketing-automation">Marketing Automation</a></li>
            <li><a href="/tools/api-docs">API Documentation</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-column">
          <h4 className="footer-heading">CONTACT US</h4>
          <div className="contact-in">
            <p className="contact-item">
              <i className="icon-location"></i>
              Address: 1234 Tech Park, Silicon Valley, CA 94043, USA
            </p>
            <p className="contact-item">
              <i className="icon-phone"></i>
              Phone: <a href="tel:+18001234567">+1-800-123-4567</a>
            </p>
            <p className="contact-item">
              <i className="icon-clock"></i>
              Hours: Mon-Fri: 8:00AM to 8:00PM
            </p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 TechWorld Inc. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
