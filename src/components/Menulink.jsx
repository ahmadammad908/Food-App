import React, { useContext } from "react";
import { AuthContext } from "../Forms/AuthContext";
const Menulink = ({ text }) => {
  const { currentUser } = useContext(AuthContext);

  return (
    <>
      <div>
        <h2 style={{ cursor: "pointer" }}>{text}</h2>
        <span style={{ cursor: "pointer" }}>
          {""}
          {text === "Logout" && `( ${currentUser.displayName} )`}
        </span>
      </div>
    </>
  );
};

export default Menulink;
