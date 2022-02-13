import React, {useState} from "react";
import PatientCard from "../cards/PatientCard";
import { useUserContext } from "../context/UserContext";

import './PatientPage.css'

function PatientPage() 
{
  const {user} = useUserContext();
  const [patients, setPatients] = useState([]);

  


  const submithandler=(e)=>{
    e.preventDefault();
    
  fetch('http://localhost:5000/showdatabase', {
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

    /*.then(response => response.json())
    .then(console.log(data))
    .catch((error) => {
  //console.error('Error:', error);
});*/
    
  }

  return(
    <div className="patientPage">
      <button onClick={submithandler} className="showBtn" >Show Patients</button>
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

export default PatientPage;