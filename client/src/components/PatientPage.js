import React from "react";
import PatientCard from "../cards/PatientCard";
import { useUserContext } from "../context/UserContext";

import './PatientPage.css'

function PatientPage() 
{
  const {user} = useUserContext();

  const submithandler=(e)=>{
    e.preventDefault();
    
  fetch('http://localhost:5000/enterpatient', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },

  body: JSON.stringify({
    "hid" : "abcd"
  })
})

    .then(response => response.json())
    .then(data => {
    
    console.log("HI HELLO");
})
.catch((error) => {
  //console.error('Error:', error);
});
    
  }

  return(
      <div className="patientCards">
        <PatientCard 
          patientName= {`userid : ${user.metadata.createdAt}`}
          patientMobile="9718983031"
          patientDisease="Covid-190"
          patientImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0J7o0aDt2GZe5jbCzS3HGdOa5CuNTEC8rQUgOxQFEjIqRUPotvVrV2od1czizKpeTuzA&usqp=CAU"
          patientAdd="India"/>
        <PatientCard 
          patientName= "John Singh"
          patientMobile="9718983031"
          patientDisease="Covid-190"
          patientImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0J7o0aDt2GZe5jbCzS3HGdOa5CuNTEC8rQUgOxQFEjIqRUPotvVrV2od1czizKpeTuzA&usqp=CAU"
          patientAdd="India"/>
        <PatientCard 
          patientName= "John Singh"
          patientMobile="9718983031"
          patientDisease="Covid-190"
          patientImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0J7o0aDt2GZe5jbCzS3HGdOa5CuNTEC8rQUgOxQFEjIqRUPotvVrV2od1czizKpeTuzA&usqp=CAU"
          patientAdd="India"/>
        <PatientCard 
          patientName= "John Singh"
          patientMobile="9718983031"
          patientDisease="Covid-190"
          patientImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0J7o0aDt2GZe5jbCzS3HGdOa5CuNTEC8rQUgOxQFEjIqRUPotvVrV2od1czizKpeTuzA&usqp=CAU"
          patientAdd="India"/>
        <PatientCard 
          patientName= "John Singh"
          patientMobile="9718983031"
          patientDisease="Covid-190"
          patientImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0J7o0aDt2GZe5jbCzS3HGdOa5CuNTEC8rQUgOxQFEjIqRUPotvVrV2od1czizKpeTuzA&usqp=CAU"
          patientAdd="India"/>
        <PatientCard 
          patientName= "John Singh"
          patientMobile="9718983031"
          patientDisease="Covid-190"
          patientImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0J7o0aDt2GZe5jbCzS3HGdOa5CuNTEC8rQUgOxQFEjIqRUPotvVrV2od1czizKpeTuzA&usqp=CAU"
          patientAdd="India"/>
        <PatientCard 
          patientName= "John Singh"
          patientMobile="9718983031"
          patientDisease="Covid-190"
          patientImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0J7o0aDt2GZe5jbCzS3HGdOa5CuNTEC8rQUgOxQFEjIqRUPotvVrV2od1czizKpeTuzA&usqp=CAU"
          patientAdd="India"/>
          <PatientCard 
          patientName= "John Singh"
          patientMobile="9718983031"
          patientDisease="Covid-190"
          patientImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0J7o0aDt2GZe5jbCzS3HGdOa5CuNTEC8rQUgOxQFEjIqRUPotvVrV2od1czizKpeTuzA&usqp=CAU"
          patientAdd="India"/>
          <button onClick={submithandler}>Hello</button>
      </div>
  )
}

export default PatientPage;