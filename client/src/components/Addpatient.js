import React from "react";
import './Addpatient.css'
import { useUserContext} from '../context/UserContext'
function Addpatient(){
  const {user}=useUserContext();

  const submitHandler = (e) => {
       e.preventDefault();
      
       fetch('http://localhost:5000/enterpatient', {
        method: 'POST', // or 'PUT'
        headers: {
           'Content-Type': 'application/json',
       },

        body: JSON.stringify(
         {"hid" : user.metadata.createdAt,
         "pid" : e.target[0].value,
         "ref" : "no",
         "name": e.target[1].value,
         "disease" :  e.target[4].value
         })
   })

    .then(response => response.json()) //Will get Success Response String/Array
    .then(alert("Patient Added Successfully")
    
   
)
.catch((error) => {
  //console.error('Error:', error);
});
  }

    return(
          <div className="container">
      <div className="w-75 mx-auto shadow p-5  myForm ">
        <h2 className="text-center mb-4 myHead">Add A Patient</h2>
        <form onSubmit= {submitHandler}>
          <div className="form-group myInput">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Patient Id"
              name="pid"
              
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
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Patient E-mail Address"
              name="patientEmail"
              
            />
          </div>
          <div className="form-group myInput">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Patient Phone Number"
              name="patientPhone"
              
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
          <button className="btn btn-primary btn-lg myBtn">Add User</button>
        </form>
      </div>
    </div>
    )
}

export default Addpatient