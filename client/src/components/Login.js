import React, { useRef } from "react";
import styled from 'styled-components'
import { useUserContext } from "../context/UserContext";

const Login = () => {
  const emailRef = useRef();
  const psdRef = useRef();
  const { signInUser, forgotPassword } = useUserContext();

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = psdRef.current.value;
    if (email && password) signInUser(email, password);
  };

  const forgotPasswordHandler = () => {
    const email = emailRef.current.value;
    if (email)
      forgotPassword(email).then(() => {
        emailRef.current.value = "";
      });
    alert("Password Reset Instructions sent to your email");
  };

  return (
    <>
      <WebName>Welcome To Hospital Connect</WebName>
      <div className="form">
        <Form>
          <h2> Login </h2>
          <form onSubmit={onSubmit}>
            <input placeholder="Email" type="email" ref={emailRef} />
            <br />
            <input placeholder="Password" type="password" ref={psdRef} />
            <br />
            <button type="submit">Sign In</button>
            <p onClick={forgotPasswordHandler}>Forgot Password?</p>
          </form>
        </Form>
      </div>
    </>
  );
};

export default Login;

const WebName = styled.div`
  padding-top: 2rem;
  font-size: 7rem;
  font-family:fantasy;
  text-align: center;
  text-decoration: none;
`;

const Form = styled.div`
   
   padding: 0 0rem 0.5rem 0rem;
   margin-left: 30%;
   margin-right: 30%;
   margin-top: 8rem;
   
   border-radius: 2rem;
   background-color:darkgrey;

   text-align : center; 

   >h2{
     background-color:;
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
          margin-bottom: 0.5rem;
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

        >p{
          padding-top: 1rem;
          padding-bottom: 1.3rem;
          font-weight: bold;
          font-size: 20px;
          font-family: cursive;
          colr: grey;
          :hover{
            cursor: pointer;
            color: black;
          }
        }
      }
    }
`;