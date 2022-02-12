import React from "react";
import PatientCard from "../cards/PatientCard";
import { useUserContext } from "../context/UserContext";

import './PatientPage.css'
  
function PatientPage() {

  const {user} = useUserContext();

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
      </div>
  )
}

export default PatientPage;