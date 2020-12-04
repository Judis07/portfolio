import { Link } from 'react-router-dom';
import ContactForm from '../../components/ContactForm/contactForm';
import ContactImg from '../../components/ContactImg/contactImg';
import Footer from '../../components/Footer/footer';

import './contact.scss';

const Contact = () => {
  return (
    <div className="contact_page_container">
      <div className="contact_header container">
        <Link to="/">&#8592; back to home</Link>
      </div>
      <div className="inner_content container">
        <ContactImg />
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
