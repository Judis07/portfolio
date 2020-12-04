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
            I am self taught front end web developer currently working as a
            frontend developer for an edTech company called Kraftshala in Delhi.
            I am strongly passionate about making fast, easy to use , responsive
            web experience for the users both on the web and mobile.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
