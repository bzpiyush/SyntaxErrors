import React, {useState} from "react";
import {Modal, Button} from "react-bootstrap";

import "./PatientCard.css";

function PatientCard({ patientName, patientMobile, patientDisease, patientImg, patientAdd }) {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true)

  const submitHandler = (e) => {
    e.preventDefault();
   
    fetch('http://localhost:5000/enterpatient', {
     method: 'POST', // or 'PUT'
     headers: {
        'Content-Type': 'application/json',
    },

     body: JSON.stringify(
      {"hid" : e.target[0].value,
      "pid" : e.target[1].value,
      "ref" : "yes",
      "name": e.target[2].value,
      "disease" :  e.target[3].value
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
          <Modal.Title>Enter ID Of Hospital To Refer To</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit= {submitHandler}>
          <div className="form-group myInput">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Hospital ID"
              name="hospitalID"
              
            />
          </div>
          <div className="form-group myInput">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Patient ID"
              name="patientID"
              
            />
          </div>
          <div className="form-group myInput">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Patient Name"
              name="patientName"
              
            />
          </div>
          <div className="form-group myInput">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Patient Disease"
              name="patientDisease"
              
            />
          </div>

          <button className="btn btn-primary btn-lg myBtn">Save Changes</button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" size="lg" onClick={handleClose}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>
      </div>
    </>
  );
}

export default PatientCard;