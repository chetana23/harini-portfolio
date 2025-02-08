import './desktop.css';
import { useState, useEffect, useRef, React} from 'react';
import myComputer from '../../assets/images/myComputer.png';
import trash from '../../assets/images/trash.png';

export const Desktop = () => { 
    return (
        <div className="desktopDiv">
            <div className="desktopIcon">
                <img src={myComputer} alt="PC Icon" className="desktopIconImg"/>
                <div>My Computer</div>
            </div>
            <div className="desktopIcon">
                <img src= {trash} alt="Bin Icon" className="desktopIconImg"/>
                <div>Bin</div>
            </div>
        </div>
    );
    
 };
 export default Desktop;