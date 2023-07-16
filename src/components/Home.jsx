import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaBell } from "react-icons/fa";
import useProducts from "../products/useProducts";
import { useSelector } from "react-redux";
import CategorieFilter from "../components/CategorieFilter";
import SearchFilter from "../components/SearchFilter";
import { Audio, Grid, InfinitySpin } from "react-loader-spinner";

const Home = () => {
  const { getProducts, getBrushers } = useProducts();
  const { brushers } = useSelector((state) => state.brushers);
  const { products } = useSelector((state) => state.products);
  const [category, setCategory] = useState("");
  const [internalSearch, setInternalSearch] = useState("");
  const productContainerRef = useRef(null);
  const brusherContainerRef = useRef(null);

  useEffect(() => {
    getProducts({
      category,
    });
  }, [category]);

  useEffect(() => {
    getBrushers({
      category,
    });
  }, [category]);

  useEffect(() => {
    const productContainer = productContainerRef.current;
    const brusherContainer = brusherContainerRef.current;

    const handleWheel = (event, container) => {
      event.preventDefault();

      container.scrollBy({
        left: event.deltaY < 0 ? -30 : 30,
      });
    };

    const handleProductContainerWheel = (event) => {
      handleWheel(event, productContainer);
    };

    const handleBrusherContainerWheel = (event) => {
      handleWheel(event, brusherContainer);
    };

    productContainer.addEventListener("wheel", handleProductContainerWheel);
    brusherContainer.addEventListener("wheel", handleBrusherContainerWheel);

    return () => {
      productContainer.removeEventListener(
        "wheel",
        handleProductContainerWheel
      );
      brusherContainer.removeEventListener(
        "wheel",
        handleBrusherContainerWheel
      );
    };
  }, []);

  useEffect(() => {
    const productContainer = productContainerRef.current;
    const brusherContainer = brusherContainerRef.current;

    productContainer.style.overflow = "scroll";
    productContainer.style.scrollbarWidth = "none";
    productContainer.style.msOverflowStyle = "none";
    productContainer.style["&::-webkit-scrollbar"] = {
      display: "none",
    };

    brusherContainer.style.overflow = "auto";
    brusherContainer.style.scrollbarWidth = "none";
    brusherContainer.style.msOverflowStyle = "none";
    brusherContainer.style["&::-webkit-scrollbar"] = {
      display: "none",
    };
  }, []);

  const color = "#FF3D00";
  const loading = products.length === 0;

  return (
    <div style={{ background: "#ffff", width: "100%", height: "105vh" }}>
      <div
        style={{
          height: "72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          position: "sticky",
          top: "0",
          zIndex: "2",
          background: "#ffff",
        }}
      >
        <div
          style={{
            background: "#FF3D00",
            padding: "8px",
            borderRadius: "10px",
          }}
        >
          <FaBars style={{ color: "white" }} />
        </div>
        <h1
          style={{
            textAlign: "center",
            letterSpacing: "1px",
            lineHeight: "20px",
            fontFamily: "'Pacifico', cursive",
            color: "#FF3D00",
          }}
        >
          Fast Taste
        </h1>
        <div
          style={{
            background: "#FF3D00",
            padding: "8px",
            borderRadius: "10px",
          }}
        >
          <FaBell style={{ color: "white" }} />
        </div>
      </div>

      <SearchFilter />
      <CategorieFilter
        category={category}
        onChangeCategory={(category) => setCategory(category)}
      />

      {loading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50vh",
          }}
        >
          <InfinitySpin width="200" color="#FF3D00" />
        </div>
      )}

      <div
        ref={productContainerRef}
        className="Scroll"
        style={{
          overflowX: "scroll",
          display: "flex",
          overflow: "hidden",
          flexWrap: "nowrap",
          padding: "10px",
          gap: "10px",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          overflowY: "hidden",
        }}
      >
        {products.map((product) => (
          <div key={product.id} style={{ minWidth: "250px" }}>
            <img
              src={product.img}
              width="250px"
              height="150px"
              style={{ borderRadius: "20px" }}
              alt={product.name}
            />
            <div style={{ paddingTop: "10px" }}>
              <h1 style={{ fontSize: "20px", fontFamily: "sans-serif" }}>
                {product.name}
              </h1>
            </div>
            <div style={{ paddingTop: "10px" }}>
              <h1 style={{ fontSize: "20px", fontFamily: "sans-serif" }}>
                Rs {product.price}
              </h1>
            </div>
          </div>
        ))}
      </div>

      <div
        ref={brusherContainerRef}
        className="Scroll"
        style={{
          display: "flex",
          flexWrap: "nowrap",
          padding: "10px",
          gap: "10px",
          overflowX: "auto",
          border: "none",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {brushers.map((brusher) => (
          <div key={brusher.id} style={{ minWidth: "250px" }}>
            <img
              src={brusher.brush}
              width="250px"
              height="100px"
              style={{
                borderRadius: "20px",
                objectFit: "cover",
              }}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
