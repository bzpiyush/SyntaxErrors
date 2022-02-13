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
  background-size:cover;
  background-position:top;
  background-repeat:no-repeat;
  background-image: url("https://images.unsplash.com/photo-1587370560942-ad2a04eabb6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWVkaWNpbmV8ZW58MHx8MHx8&w=1000&q=80");
`;
