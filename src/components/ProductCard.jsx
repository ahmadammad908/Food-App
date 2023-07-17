import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import useProducts from "../products/useProducts";
import {
  Box,
  Tabs,
  Tab,
  createTheme,
  ThemeProvider,
  CircularProgress,
} from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";

const theme = createTheme({
  palette: {
    mode: "light", // Add this line to set the mode (light or dark)
    primary: {
      main: "#FF3D00",
    },
  },
});

function TabPanel({ value, index, children }) {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <div style={{ padding: "20px" }}>{children}</div>}
    </div>
  );
}

const ProductCard = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { getProducts } = useProducts();
  const { id } = useParams();
  const { products } = useSelector((state) => state.products);
  const product = products.find((product) => product.id === id);
  const loading = products.length === 0;

  useEffect(() => {
    getProducts({
      category: "",
    });
  }, []);

  if (!product) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        {loading && <CircularProgress style={{ color: "#FF3D00" }} />}
      </div>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <div style={{ maxWidth: "400px", margin: "0 auto" }}>
        <div
          style={{ borderRadius: "8px", padding: "20px", marginBottom: "20px" }}
        >
          <img
            src={product.img}
            alt={product.name}
            style={{
              width: "100%",
              height: "auto",
              maxHeight: "400px",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            color: "#FF3D00",
            fontFamily: "'Pacifico', cursive",
            fontSize: "30px",
            marginTop: "-20px",
          }}
        >
          {product.name}
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Box sx={{ width: "100%" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="Product Tabs"
              centered
            >
              <Tab label="Description" />
              <Tab label="Ingredients" />
              <Tab label="Instructions" />
            </Tabs>
            <div style={{ marginTop: "0px" }}>
              <TabPanel value={value} index={0}>
                {product.des}
              </TabPanel>
              <TabPanel value={value} index={1}>
                {product.ingredients}
              </TabPanel>
              <TabPanel value={value} index={2}>
                {product.instructions}
              </TabPanel>
            </div>
          </Box>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            style={{
              padding: "8px 40px",
              border: "none",
              borderRadius: "10px",
              background: "#FF3D00",
              color: "white",
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <AddShoppingCart />
            Add to Cart
          </button>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default ProductCard;
