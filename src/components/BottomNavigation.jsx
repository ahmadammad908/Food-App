import React, { useState } from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { FaHome, FaShoppingCart, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const BottomNavigations = () => {
  const { cart } = useSelector((state) => state.cart);

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleIconClick = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div
        style={{
          position: "fixed",
          bottom: 0,
          width: "100%",
        }}
      >
        <BottomNavigation showLabels value={value} onChange={handleChange}>
          <BottomNavigationAction
            label="Recents"
            style={{ color: value === 0 ? "#FF3D00" : "gray" }}
            icon={
              <FaHome style={{ color: value === 0 ? "#FF3D00" : "gray" }} />
            }
            component={Link}
            to="/"
          />
          <BottomNavigationAction
            label="Cart"
            style={{ color: value === 1 ? "#FF3D00" : "gray" }}
            icon={
              <FaShoppingCart
                style={{ color: value === 1 ? "#FF3D00" : "gray" }}
              />
            }
            component={Link}
            to="/cart"
          />
          <span
            style={{
              fontSize: "10px",
              position: "absolute",
              background: "#FF3D00",
              padding: "2px 6px",
              borderRadius: "20PX",
              color: "white",
              marginLeft: "15px",
            }}
          >
            {/* {!!cart.length && cart.length } */}
            {cart.length ? cart.length : 0}
          </span>
          <BottomNavigationAction
            label="Profile"
            style={{ color: value === 2 ? "#FF3D00" : "gray" }}
            icon={
              <FaUser style={{ color: value === 2 ? "#FF3D00" : "gray" }} />
            }
            component={Link}
            to="/profile"
          />
        </BottomNavigation>
      </div>
    </>
  );
};

export default BottomNavigations;
