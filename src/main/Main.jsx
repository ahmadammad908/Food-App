import React from "react";
import "./Main.css";
import { Link } from "react-router-dom";
const Main = () => {
  return (
    <>
      <div className="container">
        <div className="wrapper">
          <h1>Fast Taste</h1>
        </div>
        <div className="link1">
          <Link to={"/login1"}>Login</Link>
        </div>
        <div className="link2">
          <Link to={"/signup1"}>Sign Up</Link>
        </div>
      </div>
    </>
  );
};

export default Main;
