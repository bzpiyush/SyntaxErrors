import React from "react";

import "./PatientCard.css";

function PatientCard({ patientName, patientMobile, patientDisease, patientImg, patientAdd }) {
  return (
    <>
      <div className="patientCard">
        <img className="patientImg" src={patientImg} alt="patient"></img>
        <p className="patientName">{patientName}</p>
        <p className="patientDisease">Disease: {patientDisease}</p>
        <p className="patientMobile">Mobile: {patientMobile}</p>
        <p className="patientAdd">Addres: {patientAdd}</p>
        <button className="myButton">Refer</button>
      </div>
    </>
  );
}

export default PatientCard;