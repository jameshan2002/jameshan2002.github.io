import { Github, Linkedin, EnvelopeFill } from "react-bootstrap-icons";
import Fade from "react-reveal/Fade";

const sideWidth = {
  marginRight: "20px",
};

const footer = () => {
  return (
    <div className="footer-Full">
      <Fade bottom cascade>
        <h1 style={{ fontSize: "2.5em" }}>Contact</h1>
        <h2 style={{ fontSize: "1.35em" }}>I'd Love To Connect With You.</h2>
        <a
          href="mailto:contactJamesHan@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="footer-Link"
        >
          contactJamesHan@gmail.com
        </a>
        <div className="site-wrapper">
          <a
            href="https://github.com/notjameshan"
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
            href="mailto:contactJamesHan@gmail.com"
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
