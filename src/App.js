import Navbar from "./Components/NavBar/Navbar";
import './App.css'
import Intro from "./Components/Intro/Intro";
import Aboutme from "./Components/Aboutme/aboutme";
import Projects from "./Components/Projects/projects";
import Contact from "./Components/Contact/contact";
import { themeContext } from "./Context";

function App() {

  return (
    <div className="App">
    <Navbar/>
    <Intro/>
    <Aboutme/>
    <Projects/>
    <Contact/>
  

    
    
    </div>
  );
}

export default App;
