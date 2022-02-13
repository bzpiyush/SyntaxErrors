import React, { useRef } from "react";
import { collection, addDoc } from "firebase/firestore";
import { useUserContext } from "../context/UserContext";
import styled from "styled-components"
import { db } from "../firebase/firebase-config";

const Signup = () => {
  const emailRef = useRef();
  const nameRef = useRef();
  const psdRef = useRef();
  const { registerUser } = useUserContext();
  const usersCollectionRef = collection(db, "hospitals");

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const password = psdRef.current.value;

    const date = Date.now();

    if (email && password && name) 
    {
      registerUser(email, password, name);
      addDoc(usersCollectionRef, { HospitalName: name, HospitalEmail: email, id: date});
    }
  };

  return (
    <div className="form">
      <WebName>Welcome To Hospital Connect</WebName>
      <SignUp>
        <h2>Register</h2>
        <form onSubmit={onSubmit}>
          <input placeholder="Email" type="email" ref={emailRef} />
          <br />
          <input placeholder="Name" type="name" ref={nameRef} />
          <br />
          <input placeholder="Password" type="password" ref={psdRef} />
          <br />
          <button type="submit">Register</button>
        </form>
      </SignUp>
    </div>
  );
};

export default Signup;

const WebName = styled.div`
padding-top: 2rem;
font-size: 4rem;
font-family: fantasy;
text-align: center;
text-decoration: none;
`;

const SignUp = styled.div`
padding: 0 0rem 1rem 0rem;
margin-left: 30%;
margin-right: 30%;
margin-top: 8rem;

border-radius: 2rem;
background-color: darkgrey;
text-align : center; 

  >h2{
    background-color: darkgrey;
    border-top-left-radius: 2rem;
    border-top-right-radius: 2rem;
    padding: 1rem;
    font-size : 35px;
    text-align: center;
   }
    
    >form{
      margin-top: 2rem;
      >input{
        font-size: 1.4rem;
        color: black;
        height: 3rem;
        width: 70%;
        margin: 1rem;        
        padding: 2px 4px;
        outline: none;
        border: 0.1rem grey solid;
        border-radius: 0.5rem;
        }

        >button{
          padding: 0.5rem;
          margin-top: 1.5rem ;
          margin-bottom: 1.7rem;
          width: 40%;
          background-color: white;
          font-size: 1.7rem;
          font-weight: bold;
          font-family: monospace;
          color: black;
          border: 0.1rem grey solid;
          border-radius: 1rem;
          :hover{
            cursor: pointer;
            background-color: grey;
          }
        }


`;