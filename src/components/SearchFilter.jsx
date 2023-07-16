import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = ({ internalSearch, onChangeSearch }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "20px",
      }}
    >
      <div style={{ position: "relative" }}>
        <input
          type="text"
          placeholder="Search"
          name="search"
          id="search"
          value={internalSearch}
          onChange={(e) => onChangeSearch(e.target.value)}
          style={{
            padding: "10px",
            borderRadius: "20px",
            width: "300px",
            border: "none",
            fontSize: "16px",
            background: "#f5f5f5",
            outline: "none",
            paddingLeft: "40px",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
          }}
        />
        <AiOutlineSearch
          size={20}
          style={{
            position: "absolute",
            marginLeft: "15px",
            zIndex: "1",
            top: "50%",
            left: "1",
            transform: "translateY(-50%)",
            color: "#888",
          }}
        />
      </div>
    </div>
  );
};

export default SearchBar;
