import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Home from "./Home";
import Navbar from "./Navbar";
import PatientPage from "./PatientPage";

function MainScreen() {
    return(
       <Router>
           <Navbar/>
           <Routes>
               <Route path="/" element={<Home/>} />
               <Route path="/patient" element={<PatientPage/>}/>
           </Routes>
       </Router>
    );
}

export default MainScreen;