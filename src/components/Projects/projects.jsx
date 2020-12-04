import Card from './Card/card';
import data from '../../projects';
import TruncatedPreview from '../../images/truncatedPreview.svg';
import './projects.scss';

const Projects = () => {
  return (
    <div className="projects_container">
      <div className="container">
        <div className="section_title">Projects</div>

        <div className="cards">
          {data.map((info, index) => (
            <Card key={index} data={info} previewImg={TruncatedPreview} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
