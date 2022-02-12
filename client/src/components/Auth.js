import React, { useState } from "react";
import styled from "styled-components";
import Login from "./Login";
import Signup from "./Signup";

const Auth = () => {
  const [index, setIndex] = useState(false);
  const toggleIndex = () => {
    setIndex((prevState) => !prevState);
  };
  return (
    <Mydiv>
    <div className="container">
      {!index ? <Login /> : <Signup />}
      <div>
        <p style={{marginTop: "1.4rem", fontSize: "3rem", textAlign: "center", fontWeight: "bold", cursor: "pointer"}} onClick={toggleIndex}>
          {!index ? "New user? Register here " : "Already have an acount?"}
        </p>
      </div>
    </div>
    </Mydiv>
  );
};

export default Auth;

const Mydiv = styled.div`
  height: 100vh;
  width: 100vw;
  margin: 0;
  background-image: url("https://wallpaperboat.com/wp-content/uploads/2019/06/medical-05.jpg");
`;
