import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserProtectectWrapper = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);
  return <>{children}</>;
};

export default UserProtectectWrapper;
