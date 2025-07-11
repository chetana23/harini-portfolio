import './App.css';
import TaskBar from './Component/ TaskBar/taskBar.tsx';
import Desktop from './Component/Desktop/desktop.tsx';
import About from './Component/Desktop/about.tsx';
import Contact from './Component/Desktop/contact.tsx';
import { useState, useEffect, useRef, React} from 'react';
import DraggablePopup from './Component/Desktop/DraggablePopup.tsx';
import Skills from './Component/Desktop/skills.tsx';

function App() {
  const [isAboutPageOpen, setIsAboutPageOpen] = useState(true);
  const [isAboutMinimize, setIsAboutMinimize] = useState(false);
  const [isContactPageOpen, setIsContactPageOpen] = useState(true);
  const [isContactMinimize, setIsContactMinimize] = useState(false);
  const [isSkillsPageOpen, setIsSkillsPageOpen] = useState(false);
  const [isContactActive, setIsContactActive] = useState(true);
  const [isSkillActive, setIsSkillActive] = useState(true);
  return (
    <div className = 'computerDesktop'>
      <TaskBar 
      isAboutPageOpen={isAboutPageOpen}
      setIsAboutPageOpen = {setIsAboutPageOpen}
      isAboutMinimize = {isAboutMinimize}
      setIsAboutMinimize={setIsAboutMinimize}
      isContactPageOpen={isContactPageOpen}
      setIsContactPageOpen = {setIsContactPageOpen}
      isContactMinimize = {isContactMinimize}
      setIsContactMinimize = {setIsContactMinimize}
      isSkillsPageOpen={isSkillsPageOpen}
      >
    </TaskBar>
      <Desktop></Desktop>
      {isAboutPageOpen && !isAboutMinimize &&
      <About 
        isAboutPageOpen={isAboutPageOpen}
        setIsAboutPageOpen = {setIsAboutPageOpen}
        isAboutMinimize = {isAboutMinimize}
        setIsAboutMinimize={setIsAboutMinimize}
        >
      </About>}
      {isContactPageOpen && !isContactMinimize &&
      <Contact
        isContactPageOpen={isContactPageOpen}
        setIsContactPageOpen = {setIsContactPageOpen}
        isContactMinimize = {isContactMinimize}
        setIsContactMinimize = {setIsContactMinimize}
      >
      </Contact>
      }
      {isContactPageOpen && !isContactMinimize &&
      <Skills
        isContactPageOpen={isContactPageOpen}
        setIsContactPageOpen = {setIsContactPageOpen}
        isContactMinimize = {isContactMinimize}
        setIsContactMinimize = {setIsContactMinimize}
      >
      </Skills>
      }
    </div>
  );
}

export default App;
