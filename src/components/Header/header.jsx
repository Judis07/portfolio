import { Link } from 'react-router-dom';
import './header.scss';

const Header = () => {
  return (
    <div className="header_container">
      <div className="container">
        <nav className="nav_links">
          <div className="nav_link">About</div>
          <div className="nav_link">Projects</div>
          <div className="nav_link">Skills</div>
          <div className="contact_cta">
            <Link to="/contact" className="contact-btn">
              Contact
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
