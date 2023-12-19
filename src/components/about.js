import { Fade } from "react-awesome-reveal";
import profile from "../photo/profile.PNG";

const about = () => {
  return (
    <div className="about-container">
      <div className="about-contents">
        <Fade cascade triggerOnce>
          <h1>About Me</h1>
        </Fade>
        <p>
          I am a Senior with a degree in Computer Science at UT Dallas and a
          passion for pushing the boundaries of software engineering and
          artificial intelligence. I interned at two prestigious companies as a
          Software Developer, where I focused on crafting effective solutions.
          Currently, I'm exploring PyTorch to delve into the latest developments
          in deep learning.
        </p>
      </div>
      <img className="about-img" src={profile} alt="Profile" />
    </div>
  );
};

export default about;
