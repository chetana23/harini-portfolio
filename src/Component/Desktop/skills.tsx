import './contact.css';
import React, { useState, useRef, useEffect } from 'react';
import linkedin from '../../assets/images/linkedin.png';
import github from '../../assets/images/github.png';
import email from '../../assets/images/emailimg.png';
import minimize from '../../assets/images/minimize.png';
import closeButton from '../../assets/images/closeButton.png';
import fileEnding from '../../assets/images/fileending.png';
import commandPrompt from '../../assets/images/commandPrompt.png';

// Ensure a global z-index counter exists
if (typeof window.zIndexCounter === 'undefined') {
  window.zIndexCounter = 1000;
}

export const Skills = ({
    isContactPageOpen,
    setIsContactPageOpen,
    isContactMinimize,
    setIsContactMinimize
}) => {
  // Fixed default position for the popup.
  const defaultPosition = { x: 86, y: 193 };

  // Manage popup visibility, position, and z-index.
  const [isPopupVisible, setIsPopupVisible] = useState(true);
  const [position, setPosition] = useState(defaultPosition);
  const [zIndex, setZIndex] = useState(window.zIndexCounter);

  // Refs for tracking dragging.
  const dragging = useRef(false);
  const dragStart = useRef({ x: 0, y: 0 });

  // Function to bring the popup to the front.
  const handleBringToFront = () => {
    window.zIndexCounter++;
    setZIndex(window.zIndexCounter);
  };

  // Start dragging when mouse is pressed.
  const handleMouseDown = (e) => {
    // Bring popup to front on mousedown.
    handleBringToFront();
    dragging.current = true;
    dragStart.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
  };

  // Update the popup's position while dragging.
  const handleMouseMove = (e) => {
    if (dragging.current) {
      setPosition({
        x: e.clientX - dragStart.current.x,
        y: e.clientY - dragStart.current.y,
      });
    }
  };

  // Stop dragging.
  const handleMouseUp = () => {
    dragging.current = false;
  };

  // Attach global mouse event listeners.
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  // Close the popup.
  const handleClosePopup = () => {
    setIsContactPageOpen(false);
    setIsContactMinimize(false);

  };

  // Close the popup.
  const handleMinimizePopup = () => {
    setIsContactMinimize(!isContactMinimize);
  }

  // Open the popup and reset its position and bring it to the front.
  const handleOpenPopup = () => {
    setPosition(defaultPosition);
    window.zIndexCounter++;
    setZIndex(window.zIndexCounter);
    setIsContactPageOpen(true);
  };

  return (
    <>
      {isContactPageOpen ? (
        <div
          id="contact"
          className="sc-fznLxA gQRraV"
          style={{
            position: 'fixed',
            top: `${position.y}px`,
            left: `${position.x}px`,
            zIndex: zIndex,
          }}
          // Also bring the popup to the front if any area of it is clicked.
          onMouseDown={handleBringToFront}
        >
          <div>
            {/* Draggable header */}
            <div
              className="ssc-fzoJus bPIkEp"
              onMouseDown={handleMouseDown}
              style={{ cursor: 'grab' }}
            >
            <div className="sc-fznyYp kdOAmQ">
                {/* <img src={commandPrompt} alt="cmd logo" className="sc-fzpisO jHQZJv"></img> */}
                <div className="sc-fzoVTD Atfvz">D:\WIN\system32\cmd.exe</div>
            </div>
              <div className="sc-fznxsB cUWXFh">
                <img
                  src={minimize}
                  alt="Minimise Button"
                  className="sc-fznJRM bTIjTR"
                  onClick={handleMinimizePopup}
                />
                <img
                  src={closeButton}
                  alt="Close Button"
                  className="sc-fznJRM bTIjTR"
                  onClick={handleClosePopup}
                />
              </div>
            </div>
          </div>

          <div className="sc-AxgMl cVmQYF"></div>

          <div className="sc-fzomuh gHzJiR">
            <div className="sc-fzoaKM hNuJKS">
              <a
                href="https://www.linkedin.com/in/hariniashok/"
                target="_blank"
                rel="noopener noreferrer"
                className="sc-fzqAui eoGDzK"
              >
                <img src={linkedin} alt="LinkedIn" className="sc-fzowVh equHBw" />
                <div className="sc-fzqMdD fZQoNm">LinkedIn</div>
              </a>
              <a
                href="https://github.com/harini-ashok"
                target="_blank"
                rel="noopener noreferrer"
                className="sc-fzqAui eoGDzK"
              >
                <img src={github} alt="GitHub" className="sc-fzowVh equHBw" />
                <div className="sc-fzqMdD fZQoNm">GitHub</div>
              </a>
              <a
                href="mailto:aharini2008@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="eoGDzK"
              >
                <img src={email} alt="Email" className="equHBw" />
                <div className="sc-fzqMdD fZQoNm">Email</div>
              </a>
            </div>
          </div>

          <div>
            <div className="sc-fzoNJl loPePV">
              <div className="sc-fzpmMD enYpte">
                <div className="sc-fzoXWK hnKkAN">3 object(s)</div>
                <div>
                  <img
                    src={fileEnding}
                    alt="File Icon"
                    className="sc-fznxKY kfRyXm"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <button onClick={handleOpenPopup}>Open Contact Popup</button>
      )}
    </>
  );
};

export default Skills;
