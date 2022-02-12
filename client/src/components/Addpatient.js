import React from "react";
import './Addpatient.css'

function Addpatient(){
    return(
          <div className="container">
      <div className="w-75 mx-auto shadow p-5  myForm">
        <h2 className="text-center mb-4 myHead">Add A Patient</h2>
        <form>
          <div className="form-group myInput">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Patient Id"
              name="pid"
            //   value={name}
            //   onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group myInput">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Patient Name"
              name="patientName"
            //   value={username}
            //   onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group myInput">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Patient E-mail Address"
              name="patientEmail"
            //   value={email}
            //   onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group myInput">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Patient Phone Number"
              name="patientPhone"
            //   value={phone}
            //   onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group myInput">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Patient Disease"
              name="patientDisease"
            //   value={website}
            //   onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-primary btn-lg myBtn">Add User</button>
        </form>
      </div>
    </div>
    )
}

export default Addpatient