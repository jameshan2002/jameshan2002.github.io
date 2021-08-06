import Fade from "react-reveal/Fade";

const about = () => {
  return (
    <div className="about-container">
      <div className="about-contents">
        <Fade cascade>
          <h1>About Me</h1>
        </Fade>
        <p>
          I'm currently an undergraduate looking to improve my knowledge in
          software and web development. I attend the University of Texas at
          Dallas and majoring in Computer Science. My journey in programming
          started by making my first simple HTML website and motivated me to
          become a better developer.
        </p>
      </div>
      <div
        className="about-img"
        style={{
          backgroundImage: "url(profile.PNG)",
        }}
      ></div>
    </div>
  );
};

export default about;
