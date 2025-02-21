import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserSignUp from "./pages/UserSignUp";
import UserLogin from "./pages/UserLogin";
import CaptainLogin from "./pages/CaptainLogin";
import CaptainSignUp from "./pages/CaptainSignUp";
import Start from "./pages/Start";
import Home from "./pages/Home";
import UserProtectectWrapper from "./components/UserProtectectWrapper";
import UserLogout from "./components/UserLogout";
import CaptainHome from "./pages/CaptainHome";
import CaptainProtectWrapper from "./components/CaptainProtectWrapper";
import CaptainLogout from "./components/CaptainLogout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/signup" element={<UserSignUp />} />
      <Route path="/login" element={<UserLogin />} />
      <Route path="/captain-login" element={<CaptainLogin />} />
      <Route path="/captain-signup" element={<CaptainSignUp />} />
      <Route
        path="/home"
        element={
          <UserProtectectWrapper>
            <Home />
          </UserProtectectWrapper>
        }
      />
      <Route
        path="/user/logout"
        element={
          <UserProtectectWrapper>
            <UserLogout />
          </UserProtectectWrapper>
        }
      />
      <Route
        path="/captain/logout"
        element={
          <CaptainProtectWrapper>
            <CaptainLogout />
          </CaptainProtectWrapper>
        }
      />
      <Route
        path="/captain-home"
        element={
          <CaptainProtectWrapper>
            <CaptainHome />
          </CaptainProtectWrapper>
        }
      />
    </Routes>
  );
};

export default App;
