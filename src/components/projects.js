import data from "../myData.js";
//import Profile from "./images/weather.png";

const Card = ({ heading, paragraph, codeUsed, imgUrl, demoLink, codeLink }) => {
  return (
    <div className="content">
      <div
        className="card"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.2)), url("${imgUrl}")`,
        }}
      ></div>
      <div className="container">
        <h2 className="header">{heading}</h2>
        <p className="text">{paragraph}</p>
        <p className="used">{codeUsed}</p>
        <a
          href={demoLink ? demoLink : "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          View Demo
        </a>
        <a
          href={codeLink ? codeLink : "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="btn seperator"
        >
          View Code
        </a>
      </div>
    </div>
  );
};

const projects = () => {
  return (
    <div className="work-wrapper">
      <h1 style={{ fontSize: "2.5em" }}>Projects</h1>
      <div className="grid">
        {data.projects.map((project, index) => (
          <Card
            key={index}
            heading={project.title}
            paragraph={project.para}
            codeUsed={project.paraUsed}
            imgUrl={project.imageSrc}
            demoLink={project.urlDemo}
            codeLink={project.urlCode}
          ></Card>
        ))}
      </div>
    </div>
  );
};

export default projects;
