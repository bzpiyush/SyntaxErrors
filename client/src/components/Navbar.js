import React from "react";
import {useUserContext} from '../context/UserContext'

function Navbar() {

  const {logoutUser } = useUserContext();

  return(
      <div>
          Navbar
          <button onClick={logoutUser}>Log out</button>
      </div>
  )
}

export default Navbar;