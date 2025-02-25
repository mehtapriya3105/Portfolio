import AboutMe from "./AboutMe";
import Education from "./Education";
import Experience from "./Experience";
import Me from "./Me";
import Navbar from "./NavBar";
import Projects from "./Projects";
import Skills from "./Skills";
import C1 from "./temp";

export default function HomePage() {
  return (
    <div>
      <div id="navbar"><Navbar /></div>
      <div id="AboutMe"><AboutMe /></div>
      <div id="Me"><Me /></div>
      <div id="Education"><Education /></div>
      <div id="Experience"><Experience /></div>
      <div id="Skills"><Skills /></div>
      <div id="Projects"><Projects /></div>
      <div id="Contact"><C1 /></div>
    </div>
  );
}
