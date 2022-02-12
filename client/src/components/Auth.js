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
        <p style={{marginTop: "1.4rem", fontSize: "3rem", textAlign: "center", fontWeight: "bold", cursor: "pointer"}} onClick={toggleIndex}>
          {!index ? "New user? Register here " : "Already have an acount?"}
        </p>
      </div>
    </div>
  );
};

export default Auth;