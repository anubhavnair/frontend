import React from "react";

const LookingForDriver = (props) => {
  return (
    <>
      <h1
       onClick={()=>props.setLookingForDirverPannel(false)}
        className="w-full text-4xl text-center leading-1.5 p-2"
      >
        {" "}
        <i className="ri-arrow-down-s-line "></i>
      </h1>

      <h1 className="text-lg font-bold p-2">Looking for a Driver</h1>
      <div>
        <div className="w-full flex justify-center">
          <img
            className="w-70"
            about=""
            src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
            alt=""
          />
        </div>
        <div>
          <div className="flex items-center p-3 leading-5 gap-2 justify-start border-t-1">
            <h2 className="text-2xl">
              <i className="ri-map-pin-range-fill"></i>
            </h2>
            <div>
              <h1 className="font-bold text-lg">456 Park Avenue</h1>
              <p className="text-base leading-3">Los Angeles, CA 90001</p>
            </div>
          </div>
          <div className="flex items-center p-3 leading-5 gap-2 justify-start border-t-1">
            <h2 className="text-2xl">
              <i className="ri-map-pin-2-fill"></i>
            </h2>
            <div>
              <h1 className="font-bold text-lg">789 Ocean Drive</h1>
              <p className="text-base leading-3">San Francisco, CA 94101</p>
            </div>
          </div>
          <div className="flex items-center p-3 leading-5 gap-2 justify-start border-t-1 ">
            <h2 className="text-2xl">
              <i className="ri-wallet-3-fill"></i>
            </h2>
            <div>
              <h1 className="font-bold text-lg">
                <span>&#8377;</span> 799.00
              </h1>
              <p className="text-base leading-3">Cash Cash</p>
            </div>
          </div>
         
        </div>
      </div>
    </>
  );
};

export default LookingForDriver;
