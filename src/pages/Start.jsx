import React from "react";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div className=" bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1557404763-69708cd8b9ce?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] w-full  h-screen flex flex-col justify-between">
      <div className="logo-img w-25 pt-5 pl-5">
        <img
          className="w-full rounded-xl"
          src="https://th.bing.com/th/id/OIP.qOkAbO51WbDE_JAYkR_UkgHaE8?rs=1&pid=ImgDetMain"
          alt="uber Logo"
        />
      </div>
      <div className="w-full bg-white p-5 ">
        <h1 className="text-2xl  whitespace-nowrap mr-5 font-extrabold">Get Started With Uber</h1>
        <Link to='/login' className="bg-black text-white block p-3 rounded-2xl text-center mt-3">Continue</Link>
      </div>
    </div>
  );
};

export default Start;
