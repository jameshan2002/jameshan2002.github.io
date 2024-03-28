import { Fade } from "react-awesome-reveal";

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
      </Fade>
    </div>
  );
};

export default footer;
