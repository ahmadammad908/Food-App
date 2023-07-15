import React, { useContext } from "react";
import { AuthContext } from "../Forms/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import Menulink from "./Menulink";
const Profile = () => {
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
        <img
          src={
            currentUser.photoURL ||
            "https://images.pexels.com/photos/11775682/pexels-photo-11775682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          width={"200px"}
          style={{ borderRadius: "50px" }}
        ></img>
        <span onClick={handlelogout}>
          <Menulink text={"LogOut"} />
        </span>
        <Link to={"/cart"}>Cart</Link>
        <h1>Ahmad Ammad</h1>
      </div>
    </>
  );
};

export default Profile;
