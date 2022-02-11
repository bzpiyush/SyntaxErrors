import React, { useRef } from "react";
import { collection, addDoc } from "firebase/firestore";

import { useUserContext } from "../context/UserContext";
import { db } from "../firebase/firebase-config";

const Signup = () => {
  const emailRef = useRef();
  const nameRef = useRef();
  const psdRef = useRef();
  const { registerUser } = useUserContext();
  const usersCollectionRef = collection(db, "users");

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const password = psdRef.current.value;

    addDoc(usersCollectionRef, { Uname: name, Uemail: email });

    if (email && password && name) registerUser(email, password, name);
  };

  return (
    <div className="form">
      <div>Welcome To HospitalConnect</div>
      <div>
        <h2> New User</h2>
        <form onSubmit={onSubmit}>
          <input placeholder="Email" type="email" ref={emailRef} />
          <br />
          <input placeholder="Name" type="name" ref={nameRef} />
          <br />
          <input placeholder="Password" type="password" ref={psdRef} />
          <br />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;