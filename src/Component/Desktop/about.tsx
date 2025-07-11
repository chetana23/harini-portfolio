import './about.css';
import React, { useState, useRef, useEffect } from 'react';
import myPicture from '../../assets/images/myPicture.jpg';
import fileEnding from '../../assets/images/fileending.png';
import minimize from '../../assets/images/minimize.png';
import closeButton from '../../assets/images/closeButton.png';

// Ensure a global z-index counter exists
if (typeof window.zIndexCounter === 'undefined') {
  window.zIndexCounter = 1000;
}

export const About = ({
    isAboutPageOpen, 
    setIsAboutPageOpen,
    isAboutMinimize,
    setIsAboutMinimize
}) => {
  // Set default position based on screen size
  const getDefaultPosition = () => {
    const nesthub = window.innerWidth >= 768 && window.innerWidth <= 1024;
    const isMobile = window.innerWidth >= 400 && window.innerWidth <= 768; // Define mobile breakpoint
    const applepro = window.innerWidth <= 390;
    const zflip = window.innerWidth >= 390 && window.innerWidth <= 400;
    // const isMobile = window.innerWidth <= 768;
    // const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      return {
        x: 40,  // Center horizontally on mobile
        y: 10// Center vertically on mobile
      };
    }if (zflip) {
      return {
        x: 10,  // Center horizontally on mobile
        y: 10// Center vertically on mobile
      };
    }if (applepro) {
      return {
        x: -10,  // Center horizontally on mobile
        y: 10// Center vertically on mobile
      };
    }if (nesthub) {
      return {
        x: 200,  // Center horizontally on mobile
        y: 10// Center vertically on mobile
      };
    }else {
      return { x: 450, y: 150 }; // Default position for desktop
    }
  };

  const [position, setPosition] = useState(getDefaultPosition());
  const [zIndex, setZIndex] = useState(window.zIndexCounter);

  // Refs for tracking dragging
  const dragging = useRef(false);
  const dragStart = useRef({ x: 0, y: 0 });

  // Function to bring the popup to the front
  const handleBringToFront = () => {
    window.zIndexCounter++;
    setZIndex(window.zIndexCounter);
  };

  // Start dragging
  const handleMouseDown = (e) => {
    handleBringToFront();
    dragging.current = true;
    dragStart.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
  };

  // Update position while dragging
  const handleMouseMove = (e) => {
    if (dragging.current) {
      setPosition({
        x: e.clientX - dragStart.current.x,
        y: e.clientY - dragStart.current.y,
      });
    }
  };

  // Stop dragging
  const handleMouseUp = () => {
    dragging.current = false;
  };

  // Attach global event listeners for dragging
  useEffect(() => {
    if (isAboutPageOpen) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('resize', handleResize); // Recalculate on resize
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('resize', handleResize);
    };
  }, [isAboutPageOpen]);

  // Adjust position on window resize
  const handleResize = () => {
    setPosition(getDefaultPosition());
  };

  // Close popup
  const handleClosePopup = () => {
    setIsAboutPageOpen(false);
    setIsAboutMinimize(false);
  };

  // Minimize popup
  const handleMinimizePopup = () => {
    setIsAboutMinimize(!isAboutMinimize);
  };

  // Open popup and reset position
  const handleOpenPopup = () => {
    setPosition(getDefaultPosition());
    window.zIndexCounter++;
    setZIndex(window.zIndexCounter);
    setIsAboutPageOpen(true);
  };

  return (
    <>
      {isAboutPageOpen ? (
        <div
          id="about"
          className="aboutMyPage"
          style={{
            position: 'fixed',
            top: `${position.y}px`,
            left: `${position.x}px`,
            zIndex: zIndex,
          }}
          onMouseDown={handleBringToFront}
        >
          <div>
            <div
              className="pageTitle"
              onMouseDown={handleMouseDown}
              style={{ cursor: 'grab' }}
            >
              <div className="title">hello_world</div>
              <div className="titleButtons">
                <img src={minimize} alt="Minimise Button" onClick={handleMinimizePopup} className="windowButtons" />
                <img src={closeButton} alt="Close Button" onClick={handleClosePopup} className="windowButtons" />
              </div>
            </div>
            <div className="titleOptions">
              <div className="titleOptionsDiv">
                <div className="titleOptionvalues"><u>F</u>ile</div>
                <div className="titleOptionvalues"><u>E</u>dit</div>
                <div className="titleOptionvalues"><u>V</u>iew</div>
                <div className="titleOptionvalues"><u>O</u>ptions</div>
                <div className="titleOptionvalues"><u>H</u>elp</div>
              </div>
            </div>
          </div>
          <div className="divider"></div>
          <div className="aboutMe">
            <div className="aboutMeDiv">
              <div className="sc-fzqBkg fCkJVF">
                <div className="sc-fzqPZZ gLiaon">hi! i'm Harini.</div>
                <div className="sc-fzoxKX craeZe">SOFTWARE DEVELOPER</div>
                <div className="sc-fzoKki kNKLJw">
                  I am a Software Developer from Phoenix, AZ, specializing in real-time Kafka streaming applications and creating data-driven, automated E2E solutions.
                  <p></p>
                  My passion for studying, analyzing, and visualizing data led me into tech, where I work across diverse business domains, leveraging cloud technologies, Kafka, and CI/CD automation.
                  <p></p>
                  Outside work, I explore nutrition science, write blogs on fasting, and practice yoga with aspirations of becoming a professional.
                </div>
                <br />
              </div>
              <img src={myPicture} alt="Me having a laugh" className="sc-fzpkJw hctKJM" />
            </div>
          </div>
          <div>
            <div className="sc-fzoNJl loPePV">
              <div className="sc-fzpmMD enYpte">
                <div className="sc-fzoXWK hnKkAN">1 object(s)</div>
                <div>
                  <img src={fileEnding} alt="File Icon" className="sc-fznxKY kfRyXm" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <button onClick={handleOpenPopup}>Open About Popup</button>
      )}
    </>
  );
};

export default About;
