import React, { useEffect } from "react";
import useProducts from "../products/useProducts";
import { useSelector } from "react-redux";

const CategorieFilter = ({ category, onChangeCategory }) => {
  const { getCategories } = useProducts();
  const { categories, state } = useSelector((state) => state.categories);
  useEffect(() => {
    getCategories({});
  }, []);
  console.log();
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "20px",
          padding: "10px 0",
        }}
      >
        <button
          style={{
            marginLeft: "10px",
            backgroundColor: category === "" ? "#FF3D00" : "#FFF",
            color: category === "" ? "#FFF" : "#000",
            padding: "8px 16px",
            fontSize: "16px",
            borderRadius: "20px",
            border: "none",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
          }}
          id="search"
          name="categories"
          value={category}
          onClick={() => onChangeCategory("")}
        >
          All
        </button>
        {categories.map((categoryItem) => (
          <button
            style={{
              backgroundColor:
                categoryItem.name === category ? "#FF3D00" : "#FFF",
              color: categoryItem.name === category ? "#FFF" : "#000",
              padding: "8px 16px",
              fontSize: "16px",
              borderRadius: "20px",
              border: "none",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
              marginLeft: "10px",
            }}
            key={categoryItem.name}
            value={categoryItem.name}
            onClick={() => onChangeCategory(categoryItem.name)}
          >
            {categoryItem.name}
          </button>
        ))}
      </div>
    </>
  );
};

export default CategorieFilter;
