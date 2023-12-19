import Header from "./components/header";
import Projects from "./components/projects";
import About from "./components/about";
import Skills from "./components/skills";
import Footer from "./components/footer";
import Experience from "./components/experience";
import { Element } from "react-scroll";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Element name="experiences"></Element>
      <Experience />
      <Element name="projects"></Element>
      <Projects />
      <Element name="skills"></Element>
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
