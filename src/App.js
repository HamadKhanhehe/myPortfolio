import { useEffect, useState } from "react";
import useMediaQuery from './hooks/useMediaQuery'
import { DotGroup } from "./scenes/DotGroup";
import { Landing } from "./scenes/Landing";
import MySkills from "./scenes/MySkills";
import { motion } from "framer-motion";
import Projects from "./components/Projects";
import LineGradient from "./components/LineGradient";
import Navbar from "./scenes/Navbar";
import { Contact } from "./components/Contact";
import Footer from "./components/Footer";



function App() {
 
const [selectedPage, setSelectedPage] = useState('home');
const aboveMdScreen =  useMediaQuery("(min-width: 1060px)");
const [isTopOfPage, setIsTopOfPage] = useState(true);

useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY === 0) setIsTopOfPage(true)
    if (window.scrollY !== 0) setIsTopOfPage(false)
  }
window.addEventListener('scroll', handleScroll )
return () => window.removeEventListener('scroll', handleScroll)
} , [])

  return (
    <div className="app bg-deep-blue">
  <Navbar
   selectedPage={selectedPage} 
  setSelectedPage={setSelectedPage} 
  isTopOfPage={isTopOfPage}
  />
  <div className="w-5/6 mx-auto md:h-full">
{aboveMdScreen && (
  <DotGroup
  selectedPage={selectedPage}
  setSelectedPage={setSelectedPage}
  />
)}
  <Landing  setSelectedPage={setSelectedPage}/>
  </div>
  <linearGradient />
      <div className="w-5/6 mx-auto md:h-full ">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("skills")}
        >
          <MySkills />
        </motion.div>
      </div>
      <linearGradient />
  
      <div className="w-5/6 mx-auto">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("projects")}
        >
          <Projects />
        </motion.div>
      </div>
      <LineGradient />

          <Contact />
<Footer />s
    </div>
    
  );
}

export default App;
