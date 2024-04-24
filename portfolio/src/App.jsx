import "./App.css";
import Navbar from "./components/navbar/navbar.jsx";
import Intro from "./components/intro/intro.jsx";
import About from "./components/about/about.jsx";
import Skill from "./components/skill/skill.jsx";
import MySkills from "./components/myskills/myskills.jsx";
import ContactForm from "./components/contact/contact.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <About />
      <Skill />
      <MySkills />
      <ContactForm />
    </>
  );
}

export default App;
