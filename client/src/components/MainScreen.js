import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Home from "./Home";
import Navbar from "./Navbar";

function MainScreen() {
    return(
       <Router>
           <Navbar/>
           <Routes>
               <Route path="/" element={<Home/>} />
           </Routes>
       </Router>
    );
}

export default MainScreen;