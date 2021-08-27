import LinkedinIcon from '../../images/footer/linkedinIcon.svg';
import GithubIcon from '../../images/footer/githubIcon.svg';
import './footer.scss';

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="inner_footer container">
        <div className="copyright">Created By Arvind M</div>

        <div className="social_links">
          <div>Find me on:</div>
          <div className="linkedin_icon_div">
            <a
              href="https://www.linkedin.com/in/arvind-m-ab2a71148/"
              rel="noreferrer"
              target="_blank"
            >
              <img src={LinkedinIcon} alt="" />
            </a>
          </div>

          <div className="github_icon_div">
            <a
              href="https://github.com/Judis07"
              rel="noreferrer"
              target="_blank"
            >
              <img src={GithubIcon} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
