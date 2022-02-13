import React from "react";
import {NavLink} from 'react-router-dom';
import {useUserContext} from '../context/UserContext'

import './Navbar.css'

function Navbar() {

  const {logoutUser } = useUserContext();

  return(
      <div>
          <div className="Navbar">
          <div className="NavbarLeft">
            Hospital Connect
            
          </div>

           <div className="NavbarRight">
           <NavLink
          className="Home Links"
          exact="true"
          style={isActive => ({
            color: isActive ? "#000060" : "000060"
            
          })}
         
          to="/"
          
        >
          About
        </NavLink>
        <NavLink
          className="Predict Links"
          style={isActive => ({
            color: isActive ? "#000060" : "000060"
          
          })}
          to="/refered"
          
        >
          Refered
        </NavLink>
        <NavLink 
        to="/patient" 
        className= "Login Links"
        style={isActive => ({
          color: isActive ? "#000060" : "000060"
        
        })}
        >Patients
        </NavLink>
        <NavLink 
        to="/addpatient" 
        className= "Login Links"
        style={isActive => ({
          color: isActive ? "#000060" : "000060"
        
        })}
        >Add
        </NavLink>
        <button style={{color: "white", fontSize: "1.4rem"}} type="button" className="btn btn-warning btn-lg" onClick={logoutUser}>Log out</button>
           </div>
        </div>
      </div>
  )
}

export default Navbar;