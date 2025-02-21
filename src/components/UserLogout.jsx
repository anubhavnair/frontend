import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserLogout = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  if (!token) {
    navigate("/login");
  }

  axios
    .get(`${import.meta.env.VITE_BASE_URL}/api/user/logout`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      if (response.status == 200) {
        localStorage.removeItem("token");
        return navigate("/login");
      }
    });
  return <>Logout</>;
};

export default UserLogout;
