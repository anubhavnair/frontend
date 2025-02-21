import React, { useContext } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";

const CaptainSignUp = () => {
  const { captainData, setCaptainData } = useContext(CaptainDataContext);
  const navigate = useNavigate();
  const [signupData, setSignUpData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    setSignUpData({
      ...signupData,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const newCaptain = {
      fullname: {
        firstname: signupData.firstname,
        lastname: signupData.lastname,
      },
      email: signupData.email,
      password: signupData.password,
      vehicle: {
        color: signupData.vehicleColor,
        plate: signupData.plateNumber,
        capacity: signupData.capacity,
        vehicleType: signupData.vehicleType,
      },
    };
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/captain/register`,
        newCaptain
      );
      if (response.status === 201) {
        const data = response.data;
        setCaptainData(data.captain);
        localStorage.setItem("token", data.token);
        navigate("/captain-home");
      }
    } catch (error) {
      console.error("Registration failed:", error);
    }

    setSignUpData({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="w-full h-screen p-7">
      <div className="logo-img w-25 mb-5 ">
        <img
          className="w-full rounded-xl "
          src="https://pngimg.com/uploads/uber/uber_PNG9.png"
          alt="uber Logo"
        />
      </div>
      <div className="flex flex-col justify-between h-[calc(100%-5rem)]">
        <div>
          <form onSubmit={(e) => handleOnSubmit(e)} className="w-full">
            <h1 className="text-xl mb-2 font-semibold">What's your name ?</h1>
            <div className="flex justify-between w-full gap-5">
              <input
                onChange={(e) => handleOnChange(e)}
                className="w-1/2 bg-[#eeeeee] border  rounded-md text-lg p-2 mb-3 placeholder:text-base"
                type="text"
                name="firstname"
                id="firstname"
                required
                value={signupData.firstname}
                placeholder="Firstname"
              />
              <input
                onChange={(e) => handleOnChange(e)}
                className="w-1/2  bg-[#eeeeee] border  rounded-md text-lg p-2 mb-3 placeholder:text-base"
                type="text"
                name="lastname"
                id="lastname"
                required
                value={signupData.lastname}
                placeholder="Lastname"
              />
            </div>
            <h1 className="text-xl mb-2 font-semibold">What's your email ?</h1>
            <input
              onChange={(e) => handleOnChange(e)}
              className="w-full  bg-[#eeeeee] border  rounded-md text-lg p-2 mb-3 placeholder:text-base"
              type="email"
              name="email"
              id="email"
              required
              value={signupData.email}
              placeholder="email@gmail.com"
            />
            <h1 className="text-xl mb-2 font-medium">Enter Your Password</h1>
            <input
              onChange={(e) => handleOnChange(e)}
              className="w-full border-2 bg-[#eeeeee]  rounded-md text-lg p-2 mb-3 placeholder:text-base"
              type="password"
              name="password"
              id="password"
              autoComplete="on"
              required
              value={signupData.password}
              placeholder="password"
            />
            <h1 className="text-xl mb-2 font-medium">Vehicle Informations</h1>
            <div className="flex justify-between w-full gap-5">
              <input
                onChange={(e) => handleOnChange(e)}
                className="w-1/2 bg-[#eeeeee] border rounded-md text-lg p-2 mb-3 placeholder:text-base"
                type="text"
                name="vehicleColor"
                id="vehicleColor"
                required
                placeholder="Vehicle Color"
              />
              <input
                onChange={(e) => handleOnChange(e)}
                className="w-1/2 bg-[#eeeeee] border rounded-md text-lg p-2 mb-3 placeholder:text-base"
                type="text"
                name="plateNumber"
                id="plateNumber"
                required
                placeholder="Plate Number"
              />
            </div>
            <div className="flex justify-between w-full gap-5">
              <input
                onChange={(e) => handleOnChange(e)}
                className="w-1/2 bg-[#eeeeee] border rounded-md text-lg p-2 mb-3 placeholder:text-base"
                type="number"
                name="capacity"
                id="capacity"
                required
                placeholder="Vehicle Capacity"
              />
              <select
                onChange={(e) => handleOnChange(e)}
                className="w-1/2 bg-[#eeeeee] border rounded-md text-lg p-2 mb-3 placeholder:text-base"
                name="vehicleType"
                id="vehicleType"
                required
              >
                <option value="">Select Vehicle Type</option>
                <option value="car">car</option>
                <option value="auto">auto</option>
                <option value="motorcycle" selected>
                  moto
                </option>
              </select>
            </div>

            <button
              type="submit"
              className="bg-[#111] text-[#fff] w-full block p-2 text-center rounded-xl"
            >
              Create account
            </button>
          </form>
          <div className="w-full text-center mt-5">
            <p className="text-center">
              Already have an account ?{" "}
              <Link
                to={"/captain-login"}
                className=" text-md rounded-xl text-blue-500"
              >
                Login here
              </Link>
            </p>
          </div>
        </div>
        <div>
          <p className=" w-full text-[8px]  rounded-xl  p-2 font-semibold leading-tight">
            By creating an account, you agree to our Terms of Service and
            acknowledge that you have read our Privacy Policy. We prioritize the
            security of your personal information and will never share it with
            third parties without your consent.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CaptainSignUp;
