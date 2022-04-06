import { Github, Linkedin, EnvelopeFill } from "react-bootstrap-icons";
import { Link, animateScroll as scroll } from "react-scroll";
import Fade from "react-reveal/Fade";

const sideWidth = {
  marginRight: "20px",
};

const Header = () => {
  return (
    <div className="full-Header">
      <div className="navbar-wrapper">
        <div className="name" onClick={() => scroll.scrollToTop()}>
          James Han.
        </div>
        <div className="links-wrapper">
          <Link
            className="header-links"
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Projects
          </Link>
          <Link
            className="header-links"
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={50}
            duration={700}
          >
            About
          </Link>
          <button
            className="header-links"
            onClick={() => scroll.scrollToBottom()}
          >
            Contact
          </button>
        </div>
      </div>
      <div className="headings">
        <Fade bottom>
          <h2>Hi, I'm James 👋</h2>
          <h1>Software Developer with</h1>
          <h1>a cool portfolio.</h1>
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
    </div>
  );
};

export default Header;
