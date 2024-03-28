import Header from "./components/header";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Researches from "./components/research";
import Footer from "./components/footer";
import Experience from "./components/experience";
import { Element } from "react-scroll";

function App() {
  return (
    <div className="App">
      <Header />
      <Element name="experiences"></Element>
      <Experience />
      <Element name="projects"></Element>
      <Projects />
      <Researches />
      <Element name="skills"></Element>
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
