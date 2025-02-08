import './about.css';
import {React,useState} from 'react';
import myPicture from '../../assets/images/myPicture.jpg';
import fileEnding from '../../assets/images/fileending.png';
import minimize from '../../assets/images/minimize.png';
import closeButton from '../../assets/images/closeButton.png';
export const About = () => {
    const [isaboutpageActive, setisaboutpageActive] = useState(false);
    const aboutPageAction = (action) => {
        console.log("hello")
        // if (action == 'minimize'){

        // }else if (action == 'close'){
        //     setisaboutpageActive(!isaboutpageActive);
        // }
    }
    return (
        <div id="about" className="aboutMyPage">
            <div>
                <div className="pageTitle">
                    <div className="title">hello_world</div>
                    <div className="titleButtons">
                        <img src={minimize} alt="Minimise Button" onClick= {aboutPageAction('minimize')} className="windowButtons"/>
                        <img src={closeButton} alt="Close Button" onClick= {aboutPageAction('close')}className="windowButtons"/>
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
                            With a background in MEAN stack web development and hands-on experience with Machine Learning algorithms for text and image data, I enjoy solving complex problems with inventive solutions. 
                            <p></p>
                            Outside work, I explore nutrition science, write blogs on fasting, and practice yoga with aspirations of becoming a professional.
                        </div>
                        <br/>
                    </div>
                    <img src={myPicture} alt="Me having a laugh" className="sc-fzpkJw hctKJM"/>
                </div>
            </div>
            <div>
                <div className="sc-fzoNJl loPePV">
                    <div className="sc-fzpmMD enYpte">
                        <div class="sc-fzoXWK hnKkAN"> 1 object(s)</div>
                        <div>
                            <img src={fileEnding} className="sc-fznxKY kfRyXm"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
 export default About;