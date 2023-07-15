import React, { useState } from "react";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { errorMessage, icon, onChange, ...inputProps } = props;
  const handleFocus = (e) => {
    setFocused(true);
  };
  return (
    <div>
      <div
        style={{
          position: "relative", // Added position relative to the container
        }}
      >
        <span
          style={{
            position: "absolute",
            left: "18px",
            paddingTop: "19px",
            alignItems: "center",
            display: "flex",
            color: "gray",
          }}
        >
          {icon}
        </span>{" "}
        {/* Added position absolute and left positioning */}
        <input
          style={{
            padding: "10px 30px",
            borderRadius: "50px",
            margin: "10px",
            outline: "none",
            border: "none",
            background: "linear-gradient(145deg, #E9E9E9, #ffff);",
            boxShadow:
              "inset 20px 20px 60px #bebebe, inset -20px -20px 60px #ffffff",
            paddingLeft: "30px",
          }}
          {...inputProps}
          onChange={onChange}
          onFocus={() =>
            inputProps.name === "confirmPassword" && setFocused(true)
          }
          onBlur={handleFocus}
          focused={focused.toString()}
        />
        <span
          className="errorMessage"
          style={{ fontSize: "9px", textAlign: "center" }}
        >
          {errorMessage}
        </span>
      </div>
    </div>
  );
};

export default FormInput;
