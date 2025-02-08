import './App.css';
import TaskBar from './Component/ TaskBar/taskBar.tsx';
import Desktop from './Component/Desktop/desktop.tsx';
import About from './Component/Desktop/about.tsx';
import Contact from './Component/Desktop/contact.tsx';
import { useState, useEffect, useRef, React} from 'react';

function App() {
  return (
    <div className = 'computerDesktop'>
      <TaskBar></TaskBar>
        <Desktop></Desktop>
        <About></About>
        <Contact></Contact>
    </div>
  );
}

export default App;
