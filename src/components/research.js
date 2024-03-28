import data from "../myData.js";
//import Profile from "./images/weather.png";

const Card = ({
  heading,
  paragraph,
  codeUsed,
  imgUrl,
  demoLink,
  codeLink,
  date,
}) => {
  return (
    <article className="content">
      {imgUrl ? (
        <div className="cardList">
          {imgUrl.map((url, index) => (
            <img className="card" src={url} alt={heading} key={index} />
          ))}
        </div>
      ) : (
        <></>
      )}
      <div className="container">
        <div className="headerContainer">
          <h2 className="header">{heading} •</h2>
          {codeLink === "" ? (
            <></>
          ) : (
            <a
              href={codeLink ? codeLink : "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              View Code
            </a>
          )}
          {demoLink === "" ? (
            <></>
          ) : (
            <a
              href={demoLink ? demoLink : "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              View Demo
            </a>
          )}
        </div>
        <p className="used">{date}</p>
        <p className="text">{paragraph}</p>

        {codeUsed === "" || undefined || null ? (
          <></>
        ) : (
          <p className="skills">{codeUsed}</p>
        )}
      </div>
    </article>
  );
};

const researches = () => {
  return (
    <div className="card-container">
      <h1>Research</h1>
      <div className="grid">
        {data.researchProject.map((project, index) => (
          <Card
            key={index}
            heading={project.title}
            paragraph={project.para}
            codeUsed={project.paraUsed}
            imgUrl={project.imageSrc}
            demoLink={project.urlDemo}
            codeLink={project.urlCode}
            date={project.date}
          ></Card>
        ))}
      </div>
    </div>
  );
};

export default researches;
