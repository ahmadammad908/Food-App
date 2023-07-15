import React, { useState } from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { FaHome, FaShoppingCart, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const BottomNavigations = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleIconClick = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div style={{ position: "fixed", bottom: 0, width: "100%" }}>
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
