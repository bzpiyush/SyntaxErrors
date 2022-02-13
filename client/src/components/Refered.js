import React, {useState} from "react";
import {useUserContext} from "../context/UserContext"
import PatientCard from "../cards/PatientCard"

import "./Refered.css"

function Refered() {

  const {user} = useUserContext();

  const [patients, setPatients] = useState([]);

  const setData = ({ items }) => {
    setPatients(items);
  };

  const submitHandler=(e)=>{
    e.preventDefault();
    
  fetch('http://localhost:5000/enterpatient', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },

  body: JSON.stringify({
    "hid" : user.metadata.createdAt
  })
})

    .then(response => response.json())
    .then((data) => setData(data))
    .catch((error) => {
  //console.error('Error:', error);
});
    
  }

    return(
        <div className="referedPage">
          <button className = "btn btn-warning btn-lg myBtn" onClick={submitHandler}>
              Show Refered Patients
          </button>
          <div className="patientCards">
        <PatientCard 
          patientName= "John Singh"
          patientId= "547869441235"
          patientDisease="Covid-190"
          />
        {patients.map((patient) => {
          <div key={patient.pid}>
            <PatientCard 
            patientId={patient.pid}
            patientName={patient.name}
            patientDisease={patient.disease}
          />
          </div>
        })}
      </div>
        </div>
    )
}

export default Refered