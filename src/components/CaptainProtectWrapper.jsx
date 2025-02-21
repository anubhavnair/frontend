import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { CaptainDataContext } from "../context/CaptainContext";
import { useNavigate } from "react-router-dom";

const CaptainProtectWrapper = ({ children }) => {
  const navigate = useNavigate();
  const { captainData, setCaptainData } = useContext(CaptainDataContext);
  const [isLoading, setIsLoading] = useState(true);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const validateToken = async () => {
      if (!token) {
        navigate("/captain-login");
        return;
      }

      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/api/captain/profile`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 200) {
          setCaptainData(response.data.captain);
          setIsLoading(false);
        }
      } catch (err) {
        console.error("Error getting captain profile:", err);
        navigate("/captain-login");
      }
    };

    validateToken();
  }, [token, navigate, setCaptainData]);

  if (isLoading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <div className="bg-blue-400 text-xl p-3 rounded-xl">Loading...</div>
      </div>
    );
  }

  return <>{children}</>;
};

export default CaptainProtectWrapper;
