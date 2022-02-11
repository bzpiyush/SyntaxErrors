import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

const Auth = () => {
  const [index, setIndex] = useState(false);
  const toggleIndex = () => {
    setIndex((prevState) => !prevState);
  };
  return (
    <div className="container">
      {!index ? <Login /> : <Signup />}
      <div>
        <p onClick={toggleIndex}>
          {!index ? "New user? Register here " : "Already have an acount?"}
        </p>
      </div>
    </div>
  );
};

export default Auth;