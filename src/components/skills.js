const skills = () => {
  return (
    <div className="card-container">
      <h1>Skills</h1>
      <div className="grid">
        <article className="content">
          <div className="container">
            {/* <div className="headerContainer">
              <h2 className="header">head</h2>
            </div> */}
            <h3 className="subHeader">Language</h3>
            <span className="text">
              Python, Java, TypeScript, JavaScript, C++, C, HTML/CSS
            </span>
            <h3 className="subHeader">Frameworks and Libraries</h3>
            <p className="text">React.js, Node.js, Jest</p>
            <h3 className="subHeader">Platforms and Technologies</h3>
            <p className="text">
              AWS, GCP, Docker, Git, MongoDB, Heroku, Vercel
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default skills;
