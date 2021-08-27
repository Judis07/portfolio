import './card.scss';

const Card = (props) => {
  const { title, languages, link, previewImg } = props.data;
  return (
    <div className="card project-tile">
      <div className="card_img">
        <img src={previewImg} alt="" />
      </div>

      <div className="card_about">
        <div className="card_header">
          <div className="card_title">{title}</div>

          <div className="card_link">
            <a href={link} rel="noreferrer" target="_blank">
              Visit Site
            </a>
          </div>
        </div>

        <div className="card_languages">
          {languages.map((lang) => {
            return (
              <div key={lang} className="card_tech">
                {lang}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
