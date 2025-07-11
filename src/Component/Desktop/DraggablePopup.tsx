import React, { useState, useRef, useEffect } from 'react';

const DraggablePopup = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const dragging = useRef(false);
  const dragStart = useRef({ x: 0, y: 0 });

  // Open the popup
  const handleOpenPopup = () => {
    setIsPopupVisible(true);
  };

  // Close the popup
  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  // Handle mouse down (start dragging)
  const handleMouseDown = (e) => {
    dragging.current = true;
    dragStart.current = { x: e.clientX - position.x, y: e.clientY - position.y };
  };

  // Handle mouse move (dragging)
  const handleMouseMove = (e) => {
    if (dragging.current) {
      setPosition({
        x: e.clientX - dragStart.current.x,
        y: e.clientY - dragStart.current.y,
      });
    }
  };

  // Handle mouse up (stop dragging)
  const handleMouseUp = () => {
    dragging.current = false;
  };

  // Attach mouse events when the popup is visible
  useEffect(() => {
    if (isPopupVisible) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isPopupVisible]);

  return (
    <div>
      <button onClick={handleOpenPopup}>Open Popup</button>

      {isPopupVisible && (
        <div
          style={{
            position: 'fixed',
            top: `${position.y}px`,
            left: `${position.x}px`,
            background: 'white',
            border: '1px solid #ccc',
            borderRadius: '10px',
            zIndex: 1000,
            padding: '10px',
            width: '250px',
          }}
        >
          <div
            style={{
              background: '#333',
              color: 'white',
              padding: '10px',
              cursor: 'grab',
              textAlign: 'center',
            }}
            onMouseDown={handleMouseDown}
          >
            Drag me!
          </div>
          <div style={{ padding: '10px' }}>
            <p>This is a draggable popup.</p>
            <button onClick={handleClosePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DraggablePopup;
