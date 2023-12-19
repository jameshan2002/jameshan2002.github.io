import data from "../myData.js";
import { Fade } from "react-awesome-reveal";

const Card = ({ name, job, date, bulletpoints, imageSrc, url, skills }) => {
  return (
    <article className="content">
      {imageSrc.length > 0 && (
        <div className="cardList">
          {imageSrc.map((url, index) => (
            <img className="card" src={url} alt={name} key={index} />
          ))}
        </div>
      )}

      <div className="container">
        <div className="headerContainer">
          {url === "" ? (
            <>
              <h2 className="header">{name}</h2>
            </>
          ) : (
            <>
              <h2 className="header">{name} •</h2>
              <a
                href={url ? url : "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                View Website
              </a>
            </>
          )}
        </div>

        <h3 className="subHeader">{job}</h3>
        <p className="used">{date}</p>
        {bulletpoints.map((bulletpoint, index) => (
          <p className="text" key={index}>
            • {bulletpoint}
          </p>
        ))}

        {skills === "" || undefined || null ? (
          <></>
        ) : (
          <p className="skills">{skills}</p>
        )}
      </div>
    </article>
  );
};

const experience = () => {
  return (
    <div className="card-container">
      <Fade cascade triggerOnce>
        <h1>Experiences</h1>
      </Fade>
      <div className="grid">
        {data.experiences.map((experience, index) => (
          <Card
            key={index}
            name={experience.companyName}
            job={experience.jobTitle}
            date={experience.date}
            bulletpoints={experience.bulletpoints}
            imageSrc={experience.imageSrc}
            url={experience.url}
            skills={experience.skills}
          ></Card>
        ))}
      </div>
    </div>
  );
};

export default experience;
