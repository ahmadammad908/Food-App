import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import useProducts from "../products/useProducts";
import { Audio, Grid, InfinitySpin } from "react-loader-spinner";
import { Box, Tabs, Tab, createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  components: {
    MuiTabs: {
      styleOverrides: {
        root: {
          "& .Mui-selected": {
            color: "#FF3D00", // Change the selected tab color here
          },
          "& .MuiTab-textColorPrimary.Mui-selected": {
            color: "#FF3D00", // Change the selected tab color here
          },
        },
        indicator: {
          backgroundColor: "#FF3D00", // Change the indicator color here
        },
      },
    },
  },
});

function TabPanel({ value, index, children }) {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "200px", // Set the desired height for the tab panel
            padding: "20px", // Add padding for the content
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
}

const ProductCard = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { getProducts } = useProducts();
  const [category, setCategory] = useState("");

  useEffect(() => {
    getProducts({
      category,
    });
  }, [category]);

  const { id } = useParams();
  const { products } = useSelector((state) => state.products);
  const product = products.find((product) => product.id === id);
  const loading = products.length === 0;

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
        {loading && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <InfinitySpin color="#FF3D00" />
          </div>
        )}
      </div>
    );
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <div style={{ width: "400px", margin: "0 auto" }}>
          <div
            style={{
              width: "100%",
              borderRadius: "8px",
              padding: "20px",
            }}
          >
            <img
              src={product.img}
              alt={product.name}
              style={{
                width: "100%",
                height: "auto",
                maxHeight: "200px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "20px",
              color: "",
            }}
          >
            <h1
              style={{
                color: "#FF3D00",
                fontFamily: "'Pacifico', cursive",
                fontSize: "30px",
              }}
            >
              {product.name}
            </h1>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box sx={{}}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  <Tab label="Description" />
                  <Tab label="Ingredients" />
                  <Tab label="Item Three" />
                </Tabs>
                <div style={{}}>
                  <TabPanel value={value} index={0}>
                    {product.des}
                  </TabPanel>
                  <TabPanel value={value} index={1}></TabPanel>
                  <TabPanel value={value} index={2}>
                    Instructions
                  </TabPanel>
                </div>
              </Box>
            </div>
          </div>
        </div>
      </ThemeProvider>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          style={{
            padding: "8px 40px",
            border: "none",
            borderRadius: "10px",
            background: "#FF3D00",
            color: "white",
          }}
        >
          Add to Cart
        </button>
      </div>
    </>
  );
};

export default ProductCard;
