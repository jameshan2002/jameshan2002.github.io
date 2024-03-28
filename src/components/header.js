import { Github, Linkedin, EnvelopeFill } from "react-bootstrap-icons";
import { Link, animateScroll as scroll } from "react-scroll";
import { Fade } from "react-awesome-reveal";
import profile from "../photo/profile.PNG";
import data from "../myData.js";

const sideWidth = {
  marginRight: "20px",
};

const Header = () => {
  return (
    <div className="full-Header">
      <div className="padding-wrapper">
        <div className="navbar-wrapper">
          <div className="name" onClick={() => scroll.scrollToTop()}>
            James Han.
          </div>
          <div className="links-wrapper">
            <Link
              className="header-links"
              activeClass="active"
              to="experiences"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Experience
            </Link>
            <Link
              className="header-links"
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={50}
              duration={700}
            >
              Project
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
          <img className="about-img" src={profile} alt="Profile" />
          <Fade triggerOnce>
            <h1>Hi 👋, I'm James.</h1>
            <h1>I'm a Software Developer & AI Researcher.</h1>
            <p>
              I love building software 💻, exploring new researches 🔬, and
              solving problems 💡.
              <br /> <br />I have been prevliged to work at prestigous companies
              such as{" "}
              <a
                href="https://sra.samsung.com/"
                target="_blank"
                rel="noreferrer"
                className="underline-text"
              >
                @samsung
              </a>{" "}
              and{" "}
              <a
                href="https://www.amazon.jobs/en/teams/people-technology"
                target="_blank"
                rel="noreferrer"
                className="underline-text"
              >
                @amazon
              </a>{" "}
              as a software engineer.
              <br /> <br />I am currently working at{" "}
              <a
                href="https://sra.samsung.com/"
                target="_blank"
                rel="noreferrer"
                className="underline-text"
              >
                @samsung
              </a>{" "}
              as a SWE and Undergraduate Reseacher at The University of Texas at
              Dallas.
              <br /> <br />
              If you're interested, let's chat.
              <br /> <br />
              contactjameshan [at] gmail.com.
            </p>
          </Fade>
          <div className="site-wrapper">
            <a
              href="https://github.com/notjameshan"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={23} style={sideWidth} className="logos"></Github>
            </a>
            <a
              href="https://www.linkedin.com/in/jameshan-utd"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={23} style={sideWidth} className="logos" />
            </a>
            <a
              href="mailto:contactJamesHan@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <EnvelopeFill size={23} className="logos" />
            </a>
          </div>
        </div>
      </div>
      <div className="cardList-about">
        {data.headerPictures.map((url, index) => (
          <img
            className="card"
            src={url}
            alt="My Experiece Pictures"
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Header;
