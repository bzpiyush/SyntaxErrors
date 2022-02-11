import React, { useRef } from "react";
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
      <p>Welcome To Hospital Connect</p>
      <div className="form">
        <div>
          <h2> Login </h2>
          <form onSubmit={onSubmit}>
            <input placeholder="Email" type="email" ref={emailRef} />
            <br />
            <input placeholder="Password" type="password" ref={psdRef} />
            <br />
            <button type="submit">Sign In</button>
            <p onClick={forgotPasswordHandler}>Forgot Password?</p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;