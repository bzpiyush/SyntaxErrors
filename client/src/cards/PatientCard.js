import React, {useState} from "react";
import {Modal, Button} from "react-bootstrap";

import "./PatientCard.css";

function PatientCard({ patientName, patientMobile, patientDisease, patientImg, patientAdd }) {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true)

  return (
    <>
      <div className="patientCard">
        <img className="patientImg" src={patientImg} alt="patient"></img>
        <p className="patientName">{patientName}</p>
        <p className="patientDisease">Disease: {patientDisease}</p>
        <p className="patientMobile">Mobile: {patientMobile}</p>
        <p className="patientAdd">Addres: {patientAdd}</p>
        <button className="myButton" onClick={handleShow}>Refer</button>

        <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Enter Name Of Hospital To Refer To</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input style={{width:"100%", fontSize: "1.7rem", padding: "1rem", outline: "none"}} placeholder="Hospital Name">
          </input>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" size="lg" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" size="lg"onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    </>
  );
}

export default PatientCard;