import HeroImg from './heroImg';
import './hero.scss';

const Hero = () => {
  return (
    <div className="hero_container">
      <div className="container hero_intro_div">
        <div className="img_div">
          <HeroImg />
        </div>

        <div className="intro">
          <h1 className="title">Hi, I’m Arvind M.</h1>
          <div className="subtitle">
            I’m a <strong>Frontend </strong>Developer.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
