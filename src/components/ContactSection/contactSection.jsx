import { Link } from 'react-router-dom';
import './contactSection.scss';

const ContactSection = () => {
  return (
    <div className="contact_section_container">
      <div className="inner_section container">
        <div className="section_title">Want to Get In Touch?</div>
        <div className="contact_cta">
          <Link to="/contact" className="contact_btn">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
