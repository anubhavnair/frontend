import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userDataContext } from "../context/UserContext";

const UserLogin = () => {
  const navigate = useNavigate();
  const { userData, setUserData } = useContext(userDataContext);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const userdata = {
      email: loginData.email,
      password: loginData.password,
    };
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/api/user/login`,
      userdata
    );
    if (response.status == 200) {
      const data = response.data;
      setUserData(data.user);
      localStorage.setItem("token", data.token);
      navigate("/home");
    }
  };
  return (
    <div className="w-full h-screen p-7">
      <div className="logo-img w-20 mb-5 ">
        <img
          className="w-full rounded-xl "
          src="https://th.bing.com/th/id/OIP.qOkAbO51WbDE_JAYkR_UkgHaE8?rs=1&pid=ImgDetMain"
          alt="uber Logo"
        />
      </div>
      <div className="flex flex-col justify-between h-[calc(100%-5rem)]">
        <div>
          <form onSubmit={(e) => handleOnSubmit(e)} className="w-full">
            <h1 className="text-xl mb-2 font-semibold">What's your email ?</h1>
            <input
              onChange={(e) => handleOnChange(e)}
              className="w-full  bg-[#eeeeee] border  rounded-md text-lg p-2 mb-5 placeholder:text-base"
              type="email"
              name="email"
              id="email"
              required
              value={loginData.email}
              placeholder="email@gmail.com"
            />
            <h1 className="text-xl mb-2 font-medium">Enter Your Password</h1>
            <input
              onChange={(e) => handleOnChange(e)}
              className="w-full border-2 bg-[#eeeeee]  rounded-md text-lg p-2 mb-5 placeholder:text-base"
              type="password"
              name="password"
              id="password"
              value={loginData.password}
              required
              placeholder="password"
            />
            <button
              type="submit"
              className="bg-[#111] text-[#fff] w-full block p-2 text-center rounded-xl"
            >
              Login
            </button>
          </form>
          <div className="w-full text-center mt-5">
            <p className="text-center">
              New here ?{" "}
              <Link
                to={"/signup"}
                className=" text-md rounded-xl text-blue-500"
              >
                Create a new Account
              </Link>
            </p>

            {/* <Link to={"/signup"}>Forget Password</Link> */}
          </div>
        </div>
        <div className="bg-green-300 w-full rounded-xl text-center p-2 font-semibold">
          <Link to={"/captain-login"}>sign in as a Captain</Link>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
