import React, { useContext } from "react";
import { AuthContext } from "../Forms/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import Menulink from "./Menulink";
const Home = () => {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const handlelogout = (e) => {
    dispatch({ type: "LOGOUT" });
    navigate("/main");
  };
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);

  return (
    <>
      <div>
        <h1>{currentUser.displayName}</h1>
        <span onClick={handlelogout}>
          <Menulink text={"LogOut"} />
        </span>
        <Link to={"/cart"}>Cart</Link>
      </div>
    </>
  );
};

export default Home;
