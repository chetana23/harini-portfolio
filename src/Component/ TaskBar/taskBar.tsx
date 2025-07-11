import './taskBar.css';
import React from 'react';
import windowsimg from '../../assets/images/windowsImg.png';
import volumeImg from '../../assets/images/volume.png';
import aboutImg from '../../assets/images/aboutImg.png';
import projectsImg from '../../assets/images/projectsImg.png';
import skillsImg from '../../assets/images/skillsImg.png';
import contactsImg from '../../assets/images/contactsImg.png';
import restartImg from '../../assets/images/restartImg.png';
import htmlPage from '../../assets/images/htmlPage.png';
import { useState, useEffect, useRef} from 'react';

export const TaskBar = ({
  isAboutPageOpen,
  setIsAboutPageOpen,
  isAboutMinimize,
  setIsAboutMinimize, 
  isSkillsPageOpen, 
  isContactPageOpen,
  setIsContactPageOpen,
  isContactMinimize,
  setIsContactMinimize
}) => { 
  const [date, setDate] = useState(new Date());
  const [isNavOptions, setisNavOptions] = useState(false);
  const [isButtonActive, setIsButtonActive] = useState(false);

  const divRef = useRef(null);
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000)
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      clearInterval(intervalId);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [])

  const handleClickOutside = (event) => {
    if (divRef.current && !divRef.current.contains(event.target)) {
      setisNavOptions(false);
      setIsButtonActive(false);
    }
  };
  const openNavOptions = () => {
      setisNavOptions(!isNavOptions);
      setIsButtonActive(!isButtonActive);
  }
  const handleTab = (type?) => {
    if(type == 'about'){
      setIsAboutMinimize(!isAboutMinimize);
    }else if(type == 'contact'){
      setIsContactMinimize(!isContactMinimize);
    }
    
  }

  const openTab = (type?) => {
    if(type == 'about'){
      setIsAboutPageOpen(true);
      setIsAboutMinimize(false);
    }else if(type == 'contact'){
      setIsContactPageOpen(true);
      setIsContactMinimize(false);
    }
    
  }
    return (
        <nav>
          <div className = 'taskbarItems' ref={divRef}>
            <button className={`startButton ${isButtonActive ? "active" : ""}`} onClick= {openNavOptions}>
              <img src = {windowsimg} alt="A windows logo" className="startImg"/>
              Start
            </button>
            <div className='hXQgjp'>
              {isAboutPageOpen && <div className={`${isAboutMinimize ? "eOJBNPactive" : "eOJBNP"}`}>
                <img src = {htmlPage} alt="A windows logo" className = 'eSwYtm'/>
                <div className = 'fxWvv' onClick={()=> handleTab('about')}>hello_world.html</div>
              </div> }
              {isContactPageOpen && <div className={`${isContactMinimize ? "eOJBNPactive" : "eOJBNP"}`}>
                <img src = {windowsimg} alt="A windows logo" className="startImg"/>
                <div className = 'fxWvv' onClick={()=>handleTab('contact')}>say_hello.txt</div>
              </div> }
              {isSkillsPageOpen && <div className={`${isAboutMinimize ? "eOJBNPactive" : "eOJBNP"}`}>
                <img src = {windowsimg} alt="A windows logo" className="startImg"/>
                <div className = 'fxWvv'>skills</div>
              </div> } 
            </div>
            {isNavOptions && (
              <div className="startOptions">
                <div className="windows95">
                  <div id="windowsStyling">Windows</div>
                  <div id="windows95Styling">95</div>
                </div>
                <div className = 'mainNavOptionsDiv'>
                  <div className="navOptions" onClick = {()=> openTab('about')}>
                    <img src={aboutImg} alt = "a folder logo to depict about" className="navOptionsImg"/>
                    <div className="navOptionsName">About</div>
                  </div>
                  <div className="navOptions">
                    <img src={projectsImg} alt = "a folder and a file logo to depict projects"  className="navOptionsImg"/>
                    <div className="navOptionsName">Projects</div>
                  </div>
                  <div className="navOptions">
                    <img src={skillsImg} alt = "a skills logo"  className="navOptionsImg"/>
                    <div className="navOptionsName">Skills</div>
                  </div>
                  <div className="navOptions" onClick = {()=> openTab('contact')}>
                    <img src={contactsImg} alt = "computer networks logo for contact"  className="navOptionsImg"/>
                    <div className="navOptionsName">Contact</div>
                  </div>
                  <div className="lineDivider"></div>
                  <div className="navOptions">
                    <img src={restartImg} alt = "computer logo for restart"  className="navOptionsImg"/>
                    <div className="navOptionsName">Restart</div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="timeDiv">
            <img src= {volumeImg} alt = "a speakerphone logo for volume" className= "volumeImg"/> 
            {date.toLocaleTimeString()}
          </div>
        </nav>
      );
    
 };
 export default TaskBar;