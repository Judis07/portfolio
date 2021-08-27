import MyImg from './MyImg.svg';

import './about.scss';

const About = () => {
  return (
    <div className="about_container">
      <div className="container">
        <div className="section_title">About Me</div>

        <div className="section_about">
          <div className="img_div">
            <img src={MyImg} alt="" />
          </div>
          <div className="infro_div">
            A linux fan boy with great passion for software development. Likes
            to think out of the box and loves using React JS to make amazing
            user interfaces. Can work well in teams. Furthermore, likes to
            listen to music and play video games.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
