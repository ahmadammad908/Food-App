import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../Server/FirebaseServer";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { AuthContext } from "./AuthContext";
import { provider } from "../Server/FirebaseServer";
import { FaEnvelope, FaLock, FaGoogle, FaFacebook } from "react-icons/fa";

const Login = () => {
  const [error, setError] = useState("");
  const [inputs, setInputs] = useState({
    email: "INvalid Email",
    password: "invalid Passwp",
  });
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const navigate = useNavigate();

  const { dispatch } = useContext(AuthContext);

  const handlelogin = (e) => {
    setError("");
    e.preventDefault();

    dispatch({ type: "LOGIN_START" });
    try {
      signInWithEmailAndPassword(auth, inputs.email, inputs.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          dispatch({ type: "LOGIN_SUCCESS", payload: user });
          // ...
          navigate("/");
        })
        .catch(() => {
          setError("User Not Found");
        });
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };
  const signInWithGoogle = (e) => {
    dispatch({ type: "LOGIN_START" });
    signInWithPopup(auth, provider)
      .then((result) => {
        // console.log(result);
        const user = result.user;
        dispatch({ type: "LOGIN_SUCCESS", payload: user });
        navigate("/");
      })
      .catch((error) => {
        dispatch({ type: "LOGIN_FAILURE" });
      });
  };
  console.log(inputs);
  return (
    <>
      <div>
        <div
          className="box"
          style={{
            width: "100%",
            background: "#ffff",
            minHeight: "100vh",
          }}
        >
          <div
            className="container"
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "100px",
            }}
          >
            <div
              className="form-box"
              style={{
                maxWidth: "300px",
                overflow: "hidden",
              }}
            >
              <form
                className="form"
                style={{
                  borderRadius: "20px",
                  padding: "20px",
                  background: "linear-gradient(145deg, #cacaca, #f0f0f0);",
                  boxShadow:
                    "inset 20px 20px 60px #bebebe, inset -20px -20px 60px #ffffff",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <h1
                    style={{
                      fontSize: "33px",
                      fontFamily: "sans-serif",
                      padding: "10px",
                      color: "#FF3D00",
                    }}
                  >
                    Login
                  </h1>
                </div>
                <div className="form-container" style={{ textAlign: "center" }}>
                  <div style={{ position: "relative" }}>
                    <FaEnvelope
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "21px",
                        color: "gray",
                        transform: "translateY(-50%)",
                      }}
                    />
                    <input
                      style={{
                        padding: "10px 40px",
                        borderRadius: "50px",
                        margin: "10px",
                        outline: "none",
                        border: "none",
                        paddingLeft: "30px",
                        background: "linear-gradient(145deg, #E9E9E9, #ffff);",
                        boxShadow:
                          "inset 20px 20px 60px #bebebe, inset -20px -20px 60px #ffffff",
                      }}
                      type={"email"}
                      name="email"
                      id="email"
                      className="input"
                      placeholder="Email"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div style={{ position: "relative" }}>
                    <FaLock
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "20px",
                        color: "gray",
                        transform: "translateY(-50%)",
                      }}
                    />
                    <input
                      style={{
                        padding: "10px 40px",
                        borderRadius: "50px",
                        margin: "10px",
                        outline: "none",
                        border: "none",
                        background: "linear-gradient(145deg, #E9E9E9, #ffff);",
                        boxShadow:
                          "inset 20px 20px 60px #bebebe, inset -20px -20px 60px #ffffff",
                        paddingLeft: "30px",
                      }}
                      type={"password"}
                      name="password"
                      id="password"
                      onChange={handleChange}
                      className="input"
                      placeholder="Enter Password"
                      required
                    />
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    padding: "5px",
                  }}
                >
                  <p style={{ fontSize: "10px", color: "#FF3D00" }}>
                    Forgot Password ?
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    paddingTop: "10px",
                    padding: "10px",
                  }}
                >
                  <button
                    type="submit"
                    onClick={handlelogin}
                    style={{
                      width: "230px",
                      padding: "8px",
                      borderRadius: "50px",
                      border: "none",
                      color: "white",
                      background: "#FF3D00",
                    }}
                  >
                    Login
                  </button>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  {error && <span style={{ color: "red" }}>{error}</span>}
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <input
                    type="checkbox"
                    style={{
                      margin: "20px",
                      accentColor: " #FF3D00",
                      border: "2px solid #FF3D00 ",
                    }}
                  ></input>
                  <p style={{ fontSize: "10px", letterSpacing: "0.8px" }}>
                    I agree with the{" "}
                    <span style={{ color: "#FF3D00" }}>
                      terms and conditions
                    </span>
                  </p>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <p style={{ fontSize: "10px" }}>or login with</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    paddingTop: "17px",
                  }}
                >
                  <span>
                    <FaGoogle
                      style={{
                        color: "red",
                        fontSize: "20px",
                        cursor: "pointer",
                      }}
                      onClick={signInWithGoogle}
                    />
                  </span>
                  <div
                    style={{
                      display: "flex",
                      marginLeft: "10px",
                      justifyContent: "center",
                    }}
                  >
                    <span>
                      <FaFacebook style={{ color: "blue", fontSize: "20px" }} />
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    paddingTop: "10px",
                  }}
                >
                  <p style={{ fontSize: "10px" }}>
                    Dont Have an account?{" "}
                    <span>
                      <Link
                        style={{ textDecoration: "none", color: "red" }}
                        to={"/signup"}
                      >
                        Sign Up
                      </Link>
                    </span>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
