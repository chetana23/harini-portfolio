import './contact.css';
import {React} from 'react';
import linkedin from '../../assets/images/linkedin.png';
import github from '../../assets/images/github.png';
import email from '../../assets/images/emailimg.png';
import minimize from '../../assets/images/minimize.png';
import closeButton from '../../assets/images/closeButton.png';
import fileEnding from '../../assets/images/fileending.png';

export const Contact = () => { 
    return (
        <div id="contact" class="sc-fznLPX dtmoaU react-draggable react-draggable-dragged" Style={{'transform': 'translate(86px, 193px);'}}>
            <div>
                <div class="sc-fzqNqU kikdAh">
                    <div class="sc-fzoyTs jZUSDr">say_hello.txt</div>
                    <div class="sc-fznxsB cUWXFh">
                        <img src={minimize} alt="Minimise Button" class="sc-fznJRM bTIjTR"/>
                        <img src={closeButton} alt="Close Button" class="sc-fznJRM bTIjTR"/>
                    </div>
                </div>
                <div class="sc-fzqARJ eLpUJW">
                    <div class="sc-fznWqX dAkvW">
                        <div class="sc-fzoiQi ozSmQ"><u>F</u>ile</div>
                        <div class="sc-fzoiQi ozSmQ"><u>E</u>dit</div>
                        <div class="sc-fzoiQi ozSmQ"><u>V</u>iew</div>
                        <div class="sc-fzoiQi ozSmQ"><u>O</u>ptions</div>
                        <div class="sc-fzoiQi ozSmQ"><u>H</u>elp</div>
                    </div>
                </div>
            </div>
            <div class="sc-AxgMl cVmQYF"></div>
            <div class="sc-fzomuh gHzJiR">
                <div class="sc-fzoaKM hNuJKS">
                    <a href="https://www.linkedin.com/in/hariniashok/" target="_blank" class="sc-fzqAui eoGDzK">
                        <img src={linkedin} alt="linkedin" class="sc-fzowVh equHBw"/>
                        <div class="sc-fzqMdD fZQoNm">LinkedIn</div>
                    </a>
                    <a href="https://github.com/harini-ashok" target="_blank" class="sc-fzqAui eoGDzK">
                        <img src={github} alt="GitHub" class="sc-fzowVh equHBw"/>
                        <div class="sc-fzqMdD fZQoNm">GitHub</div>
                    </a>
                    <a href="mailto: aharini2008@gmail.com" target="_blank" class="eoGDzK">
                        <img src={email} alt="Email" class="equHBw"/>
                        <div class="sc-fzqMdD fZQoNm">Email</div>
                    </a>
                </div>
            </div>
            <div>
                <div class="sc-fzoNJl loPePV">
                    <div class="sc-fzpmMD enYpte">
                        <div class="sc-fzoXWK hnKkAN">3 object(s)</div>
                        <div>
                            <img src={fileEnding} class="sc-fznxKY kfRyXm"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    
 };
 export default Contact;