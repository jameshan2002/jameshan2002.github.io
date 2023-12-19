import { Github, Linkedin, EnvelopeFill } from "react-bootstrap-icons";
import { Fade } from "react-awesome-reveal";

const sideWidth = {
  marginRight: "20px",
};

const footer = () => {
  return (
    <div className="footer-Full">
      <Fade cascade triggerOnce>
        <h3>I'd Love To Talk With You.</h3>
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
