import "./App.css";
import React, { useContext, useNavigate } from "react";
import { useLocation } from "react-router-dom";
import BottomNavigation from "./components/BottomNavigation";
import Login from "./Forms/Login";
import SignUp from "./Forms/SignUp";
import Home from "./components/Home";
import Main from "../src/main/Main";
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";
import { AuthContext } from "./Forms/AuthContext";
import Cart from "./components/Cart";
const App = () => {
  const { currentUser } = useContext(AuthContext);

  const AuthRoute = ({ children }) => {
    return currentUser ? children : <Navigate to="/main" />;
  };
  const HeaderConditional = () => {
    const { pathname } = useLocation();

    if (
      pathname === "/login" ||
      pathname === "/signup" ||
      pathname === "/main"
    ) {
      return null;
    } else {
      return <BottomNavigation />;
    }
  };
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AuthRoute>
                  <Home />
                </AuthRoute>
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/login1" element={<Login />} />
          <Route path="/main" element={<Main />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signup1" element={<SignUp />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <HeaderConditional />
      </Router>
    </>
  );
};

export default App;

// import React, { useContext, useNavigate } from "react";
// import "./App.css";
// import {
// BrowserRouter as Router,
// Route,
// Navigate,
// Routes,
// Outlet,
// } from "react-router-dom";
// import { useLocation } from "react-router-dom";

// import Sidebar from "./components/Sidebar";
// import SignUp from "./Forms/SignUp";
// import Login from "./Forms/Login";
// import Cart from "./Cart";
// import Header from "./Header";
// import { AuthContext } from "./Forms/AuthContext";

// const App = () => {
// const { currentUser } = useContext(AuthContext);

// const AuthRoute = ({ children }) => {
// return currentUser ? children : <Navigate to="/login" />;
// };

// const HeaderConditional = () => {
//     const { pathname } = useLocation();

//     if (pathname === "/login" || pathname === "/signup") {
//       return null;
//     } else {
//       return <Header />;
//     }
//   };

// return (
// <>
// <Router>
// <HeaderConditional />

// <Routes>
// <Route
// path="/"
// element={
// <>
// <AuthRoute>
// <Sidebar />
// </AuthRoute>
// </>
// }
// />
// <Route path="/login" element={<Login />} />
// <Route path="/cart" element={<Cart />} />
// <Route path="/signup" element={<SignUp />} />
// </Routes>
// </Router>
// </>
// );
// };

// export default App;
