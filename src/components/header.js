import { Github, Linkedin, EnvelopeFill } from "react-bootstrap-icons";
import { Link, animateScroll as scroll } from "react-scroll";

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
        <h2>Hi, I'm James 👋</h2>
        <h1>Software Developer with</h1>
        <h1>big boi energy.</h1>
        <div className="site-wrapper">
          <a
            href="https://github.com/jameshan2002"
            target="_blank"
            rel="noreferrer"
          >
            <Github size={40} style={sideWidth} className="logos"></Github>
          </a>
          <a
            href="https://www.linkedin.com/in/jameshan-utd"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin size={40} style={sideWidth} className="logos" />
          </a>
          <a
            href="mailto:James.Han2@UTDallas.edu"
            target="_blank"
            rel="noreferrer"
          >
            <EnvelopeFill size={40} className="logos" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
