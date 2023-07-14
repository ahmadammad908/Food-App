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
            padding: "10px 40px",
            background: "#E9E9E9",
            borderRadius: "50px",
            margin: "10px",
            outline: "none",
            border: "none",

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
