import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/intro/intro";
import Skills from "./components/skills/skills";
import Works from "./components/Works/works";
import Contact from "./components/Contact/contact";
// import Footer from "./components/footer/footer";
import Slider from "./components/Slider/slider";
// import BlobCursor from "./components/BlobCursor/BlobCursor";
// import Main from "./components/Video/main";
import SplashCursor from './ReactBits/SplashCursor/SplashCursor'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <SplashCursor />
      <Intro/>
      <Skills/>
      <Slider/>
      <Works/>
      <Contact/>
      {/* <BlobCursor/> */}
      {/* <Footer/> */}
      
    </div>
  );
}

export default App;
