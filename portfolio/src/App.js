import Navbar from "./Navbar";
import Home from "./Home";
import Skills from "./Skills"
import Projects from "./Projects";
import Contact from "./Contact";
import Profiles from "./Profiles";
import Intro from "./Intro";
import {useState,useEffect} from 'react';
function App() {
  const [loading,setloading]=useState(false);
  useEffect(()=>{
    setloading(true);
    setTimeout(()=>{
     setloading(false);
    },9000)
  },[])
  return (
  <>
  {loading?<Intro/>:
  <>
   <Navbar/>
   <Home/>
   <Profiles/>
   <Skills/>
   <Projects/>
   <Contact/>
   </>
  }
  </>
  
  );
}

export default App;
