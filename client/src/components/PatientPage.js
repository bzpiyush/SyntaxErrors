import React, {useState} from "react";
import PatientCard from "../cards/PatientCard";
import { useUserContext } from "../context/UserContext";

import './PatientPage.css'

function PatientPage() 
{
  const {user} = useUserContext();
  const [patients, setPatients] = useState([]);

  const setData = ({ items }) => {
    setPatients(items);
  };


  const submithandler=(e)=>{
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
    <div className="patientPage">
      <button onClick={submithandler} className="btn btn-warning btn-lg showBtn" style={{fontSize: "1.6rem", marginBottom: "3rem"}}>Show Patients</button>
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

export default PatientPage;