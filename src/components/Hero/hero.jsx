import HeroImg from './heroImg';
import LinkedinIcon from '../../images/hero/linkedinIcon.svg';
import GithubIcon from '../../images/hero/githubIcon.svg';

import './hero.scss';

const Hero = () => {
  return (
    <section id="welcome-section">

    <div className="hero_container">
      <div className="container hero_intro_div">
        <div className="img_div">
          <HeroImg />
        </div>


      

        <div className="intro">
          <h1 className="title">Hi, I’m Arvind M.</h1>
          <div className="subtitle">
            <strong>Senior Frontend Developer.</strong>
          </div>
          <div className="social_links">
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
            id="profile-link"
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
    </div>
    </section>
  );
};

export default Hero;
