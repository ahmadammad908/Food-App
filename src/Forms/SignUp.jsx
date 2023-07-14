import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormInput from "./FormInput";
import { auth } from "../Server/FirebaseServer";
import { FaEnvelope, FaLock, FaGoogle, FaFacebook } from "react-icons/fa";
import { provider } from "../Server/FirebaseServer";
import { AuthContext } from "./AuthContext";
import {
  updateProfile,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

const SignUp = () => {
  const { dispatch } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      icon: <FaEnvelope />,
      placeholder: "Enter Email",
      errorMessage: "It should be a Valid email address",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "text",
      icon: <FaLock />,
      placeholder: "Enter Password",
      errorMessage: "8-20 characters 1 letter , 1 number, 1 Special character",
      pattern: `(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+])[A-Za-z0-9!@#$%^&^*()_+]{8,20}$`,
      required: true,
    },
    {
      id: 3,
      name: "Confirm password",
      type: "text",
      icon: <FaLock />,
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't Match",
      pattern: inputValues.password,
      required: true,
    },
  ];
  const handleChange = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };
  ///////Firebase authentication
  const handleRegister = async (e) => {
    setError("");
    e.preventDefault();

    /////// Firebase password authenticationn

    try {
      await createUserWithEmailAndPassword(
        auth,
        inputValues.email,
        inputValues.password
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
          updateProfile(user, {
            displayName: inputValues.email,
          });
          navigate("/");
        })
        .catch((error) => {
          if (error.message == "Firebase: Error (auth/email-already-in-use).") {
            setError("Email already exists try another Email");
          }
        });
    } catch (error) {}
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
  // console.log(inputValues);

  return (
    <>
      <div
        className="box"
        style={{ width: "100%", background: "#ffff", height: "100vh" }}
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
            <form className="form" style={{}}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <h1
                  style={{
                    fontSize: "33px",
                    fontFamily: "sans-serif",
                    padding: "10px",
                  }}
                >
                  Sign Up
                </h1>
              </div>
              <div className="form-container">
                {inputs.map((input) => (
                  <FormInput
                    key={input.id}
                    {...input}
                    value={inputValues[input.name]}
                    onChange={handleChange}
                  />
                ))}
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  paddingTop: "20px",
                }}
              >
                <button
                  type="submit"
                  onClick={handleRegister}
                  style={{
                    padding: "10px 80px",
                    borderRadius: "50px",
                    border: "none",
                    width: "240px",
                    background: "#FF3D00",
                    color: "white",
                    outline: "none",
                    cursor: "pointer",
                  }}
                >
                  Sign up
                </button>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  paddingTop: "20px",
                }}
              >
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
                  <span style={{ color: "#FF3D00" }}>terms and conditions</span>
                </p>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <p style={{ fontSize: "10px" }}>or sign up with</p>
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
                  Already have an account?{" "}
                  <span>
                    <Link
                      style={{ textDecoration: "none", color: "red" }}
                      to={"/login"}
                    >
                      Login
                    </Link>
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
