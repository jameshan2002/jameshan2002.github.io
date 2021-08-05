import Header from "./components/header";
import Projects from "./components/projects";
import About from "./components/about";
import Skills from "./components/skills";
import Footer from "./components/footer";
import { Element } from "react-scroll";

function App() {
  return (
    <div className="App">
      <Header />
      <Element name="projects"></Element>
      <Projects />
      <Element name="about"></Element>
      <About />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
