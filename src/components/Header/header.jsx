import { Link } from 'react-router-dom';
import './header.scss';

const Header = () => {
  return (
    <div className="header_container">
      <div className="container">
        <nav className="nav_links">
          <div
            className="nav_link"
            onClick={() =>
              document
                .querySelector('.about_container')
                .scrollIntoView({ behavior: 'smooth' })
            }
          >
            About
          </div>
          <div
            className="nav_link"
            onClick={() =>
              document
                .querySelector('.projects_container')
                .scrollIntoView({ behavior: 'smooth' })
            }
          >
            Projects
          </div>
          <div
            className="nav_link"
            onClick={() =>
              document
                .querySelector('.skills_container')
                .scrollIntoView({ behavior: 'smooth' })
            }
          >
            Skills
          </div>
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
