import React from "react";
import { Link } from "react-router-dom";

import './Home.css';

function Home() {
    return(
        <div>
          <div className="HomeTop">
           <div className="upper">
               <div className="textBox">
              <p className="upperBig1"><span>Caring__</span><span>Collaboration__</span><span>Connection</span></p>
              <p className="upperSmall">Improving the lives of our patient and their families</p>
              <div className="topButtons">
                 <span>
                     <Link to="/consult">
                     <button className="btn consultBtn">Refer</button>
                     </Link>
                 </span>
                 <span>
                     <Link to="/predict">
                     <button className="btn predictBtn">Register</button>
                     </Link>
                 </span>
              </div>
              </div>
           </div>
           <div className="lower">
           <img className="topImage" alt = "doctors" src="https://wallpapercave.com/wp/wp2469685.jpg"/>
            
           </div>
           </div>
           <div className="Quote">
               <div className="QuoteText">
                   <p className="QuoteTextBig"> “The best way to find yourself is to lose yourself in service to others.”</p>
                   <p className="QuoteTextSmall">Mahatma Gandhi</p>
                </div>
            </div>



           
          <div className="Features">
               <div className="FeatureText">
                   <p className="FeatureTextBig">FEATURES</p>
                   <p className="FeatureTextSmall"></p>
                </div>
     
               <div className="FeaturesContainer">
               <span>
                  <div className="card">
                  <i class="fa-solid fa-comment-medical icon"></i>
                  <p className="CardHead">Easy-to-Use</p>
                  <p className="CardText"></p>
                  </div>
               </span>
               <span>
                  <div className="card">
                  <i class="fa-solid fa-capsules icon"></i>
                  <p className="CardHead">Seamless Connectivity</p>
                  <p className="CardText"></p>
                  </div>
               </span>
               <span>
                  <div className="card">
                  <i class="fa-solid fa-hospital-user icon"></i>
                  <p className="CardHead">Record Maintainence</p>
                  <p className="CardText"></p>
                  </div>
               </span>
               </div>
           </div>
          <div className="Footer">
              <div className="brand column">
                  <p className="brandName">DoCall</p>
                  <p className="brandCopy">&copy; Docall 2022</p>
              </div>
              <div className="column">
                  <p className="FootHead">Contact Us</p>
                  <p className="FootItem">Instagram</p>
                  <p className="FootItem">Facebook</p>
                  <p className="FootItem">Twitter</p>
                  <p className="FootItem">Quora</p>
              </div>
              <div className="column">
                  <p className="FootHead">Resources</p>
                  <p className="FootItem">First</p>
                  <p className="FootItem">Second</p>
                  <p className="FootItem">Third</p>
              </div>
              <div className="column">
                  <p className="FootHead">About</p>
                  <p className="FootItem">Team</p>
                  <p className="FootItem">Location</p>
                  <p className="FootItem">Terms</p>
                  <p className="FootItem">Privacy</p>
              </div>
          </div>
           
        </div>
    );
}   

export default Home;