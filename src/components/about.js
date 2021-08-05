import Fade from "react-reveal/Fade";

const about = () => {
  return (
    <div className="about-container">
      <div className="about-contents">
        <Fade cascade>
          <h1>About Me</h1>
        </Fade>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchangeddd.
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
