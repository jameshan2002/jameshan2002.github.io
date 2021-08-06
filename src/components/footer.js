import { Github, Linkedin, EnvelopeFill } from "react-bootstrap-icons";
import Fade from "react-reveal/Fade";

const sideWidth = {
  marginRight: "20px",
};

const footer = () => {
  return (
    <div className="footer-Full">
      <Fade bottom cascade>
        <h1 style={{ fontSize: "2.9em" }}>Contact</h1>
        <h2>I'd Love To Connect With You.</h2>
        <a
          href="mailto:James.Han2@UTDallas.edu"
          target="_blank"
          rel="noreferrer"
          className="footer-Link"
        >
          James.Han2@UTDallas.edu
        </a>
        <div className="site-wrapper">
          <a
            href="https://github.com/jameshan2002"
            target="_blank"
            rel="noreferrer"
          >
            <Github size={30} style={sideWidth} className="logos"></Github>
          </a>
          <a
            href="https://www.linkedin.com/in/jameshan-utd"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin size={30} style={sideWidth} className="logos" />
          </a>
          <a
            href="mailto:James.Han2@UTDallas.edu"
            target="_blank"
            rel="noreferrer"
          >
            <EnvelopeFill size={30} className="logos" />
          </a>
        </div>
      </Fade>
    </div>
  );
};

export default footer;
