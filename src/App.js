import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/intro/intro";
import Skills from "./components/skills/skills";
import Works from "./components/Works/works";
import Contact from "./components/Contact/contact";
import Footer from "./components/footer/footer";
import Slider from "./components/Slider/slider";
// import Main from "./components/Video/main";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Slider/>
      <Works/>
      <Contact/>
      <Footer/>
      
    </div>
  );
}

export default App;
