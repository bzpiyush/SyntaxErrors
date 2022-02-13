import React, {useState} from "react";
import {useUserContext} from "../context/UserContext"
import PatientCard from "../cards/PatientCard"

import "./Refered.css"

function Refered() {

  const {user} = useUserContext();

  const [patients, setPatients] = useState([]);

  

  const submitHandler=(e)=>{
    e.preventDefault();
    
  fetch('http://localhost:5000/showreferred', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },

  body: JSON.stringify({
    "hid" : user.metadata.createdAt
  })
})
.then((response) => {
  //console.log(response);
  response.json().then((data) => {
    setPatients(data)
  });
});
    
  }

    return(
        <div className="referedPage">
          <button className = "myBtn" onClick={submitHandler}>
              Show Refered Patients
          </button>
          <div className="patientCards">
        {patients.map((patient) => (
          <div key={patient.pid}>
            <PatientCard 
            patientId={patient.pid}
            patientName={patient.name}
            patientDisease={patient.disease}
          />
          </div>
        ))}
      </div>
        </div>
    )
}

export default Refered