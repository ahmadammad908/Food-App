import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../products/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();

  const { cart, state } = useSelector((state) => state.cart);
  let totalPrice = 0;
  cart.forEach((card) => {
    totalPrice += card.quantity * card.price;
  });

  return (
    <>
      <div style={{ width: "100%", height: "100vh" }}>
        <div>
          {cart.length === 0 && (
            <>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  height: "100vh",
                }}
              >
                <img src="https://micro-assets.foodora.com/img/no-restaurant-search-fp.svg"></img>
                <div>
                  <h2
                    style={{
                      fontFamily: "sans-serif",
                      color: "#FF3D00",
                    }}
                  >
                    No Items are added
                  </h2>
                </div>
                <div>
                  <h2
                    style={{
                      fontFamily: "sans-serif",
                      color: "#FF3D00",
                      marginTop: "30px",
                    }}
                  >
                    <Link
                      to={"/"}
                      style={{
                        textDecoration: "none",
                        backgroundColor: "#FF3D00",
                        padding: "10px 30px",
                        borderRadius: "30px",

                        color: "white",
                      }}
                    >
                      Browse
                    </Link>
                  </h2>
                </div>
              </div>
            </>
          )}
        </div>
        {cart.map((card) => (
          <div key={card.id} style={styles.cartItem}>
            <img src={card.img} style={styles.image} alt={card.name} />
            <div style={styles.details}>
              <h1 style={styles.name}>{card.name}</h1>
              <div style={styles.quantity}>
                <button
                  style={styles.quantityButton}
                  onClick={() => dispatch(addToCart(card))}
                >
                  +
                </button>
                <span style={styles.quantityValue}>{card.quantity}</span>
                <button
                  style={styles.quantityButton}
                  onClick={() => dispatch(removeFromCart(card))}
                >
                  -
                </button>
              </div>
              <div style={styles.price}>
                <span>{card.quantity} * </span>
                <span style={styles.priceValue}>{card.price}</span>
              </div>
            </div>
          </div>
        ))}
        {cart.length != 0 && (
          <>
            <h1
              style={{
                position: "sticky",
                bottom: 40,
                padding: "40px",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                background: "#FFF",
                background: "#FF3D00",

                boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h1
                style={{
                  flexDirection: "column",
                  display: "flex",
                  fontSize: "30px",
                  fontFamily: "sans-serif",
                  color: "white",
                }}
              >
                <div style={{ display: "flex", justifyContent: "center" }}>
                  Total Price : {totalPrice}
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    paddingTop: "20px",
                  }}
                >
                  <Link
                    style={{
                      textDecoration: "none",
                      paddingTop: "10px",
                      color: "white",
                      background: "white",
                      color: "#FF3D00",
                      padding: "10px",
                      border: "none",
                      borderRadius: "20px",
                    }}
                  >
                    CheckOut
                  </Link>
                </div>
              </h1>
            </h1>
          </>
        )}
      </div>
    </>
  );
};

const styles = {
  cartItem: {
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    padding: "16px",
  },
  image: {
    width: "100px",
    height: "100px",
    marginRight: "20px",
    padding: "10px",
    borderRadius: "20px",
    margin: "10px",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  name: {
    fontSize: "18px",
    fontFamily: "sans-serif",
    marginBottom: "10px",
  },
  quantity: {
    display: "flex",
    alignItems: "center",
    fontFamily: "sans-serif",
    marginBottom: "10px",
  },
  quantityButton: {
    width: "30px",
    height: "30px",
    fontSize: "16px",
    marginRight: "5px",
    padding: "0",
    border: "none",
    borderRadius: "50%",
    background: "#eee",
    cursor: "pointer",
    background: "#FF3D00",
    color: "white",
  },
  quantityValue: {
    fontSize: "16px",
    fontWeight: "bold",
    fontFamily: "sans-serif",
    margin: "0 5px",
  },
  price: {
    fontSize: "16px",
    display: "flex",
    alignItems: "center",
    paddingLeft: "15px",
    letterSpacing: "1px",
    fontFamily: "sans-serif",
  },
  priceValue: {
    marginLeft: "5px",
    fontFamily: "sans-serif",
    fontWeight: "bold",
  },
};

export default Cart;

// import React from "react";
// // import { useSelector } from "react-redux";
// // import { useDispatch } from "react-redux";
// // import { addToCart, removeFromCart } from "../products/cartSlice";

// // const Cart = () => {
// //   const dispatch = useDispatch();

// //   const { cart, state } = useSelector((state) => state.cart);

// //   return (
// //     <>
// //       {cart.map((card) => (
// //         <div key={card.id} style={styles.cartItem}>
// //           <img src={card.img} style={styles.image} alt={card.name} />
// //           <div style={styles.details}>
// //             <h1 style={styles.name}>{card.name}</h1>
// //             <div style={styles.quantity}>
// //               <button
// //                 style={styles.quantityButton}
// //                 onClick={() => dispatch(addToCart(card))}
// //               >
// //                 +
// //               </button>
// //               <span style={styles.quantityValue}>{card.quantity}</span>
// //               <button
// //                 style={styles.quantityButton}
// //                 onClick={() => dispatch(removeFromCart(card))}
// //               >
// //                 -
// //               </button>
// //             </div>
// //             <span style={styles.price}>
// //               {card.quantity} * {card.price}
// //             </span>
// //           </div>
// //         </div>
// //       ))}
// //     </>
// //   );
// // };

// // const styles = {
// //   cartItem: {
// //     display: "flex",
// //     alignItems: "center",
// //     marginBottom: "20px",
// //   },
// //   image: {
// //     width: "100px",
// //     height: "100px",
// //     marginRight: "20px",
// //     padding: "10px",
// //     borderRadius: "20px",
// //     margin: "10px",
// //   },
// //   details: {
// //     display: "flex",
// //     flexDirection: "column",
// //   },
// //   name: {
// //     fontSize: "20px",
// //     marginBottom: "10px",
// //   },
// //   quantity: {
// //     display: "flex",
// //     alignItems: "center",
// //     marginBottom: "10px",
// //   },
// //   quantityButton: {
// //     width: "30px",
// //     height: "30px",
// //     fontSize: "20px",
// //     marginRight: "10px",
// //     padding: "0",
// //     border: "none",
// //     borderRadius: "50%",
// //     background: "#eee",
// //     cursor: "pointer",
// //   },
// //   quantityValue: {
// //     fontSize: "16px",
// //     fontWeight: "bold",
// //   },
// //   price: {
// //     fontSize: "18px",
// //   },
// // };

// // export default Cart;
