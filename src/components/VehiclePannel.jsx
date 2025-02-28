import React from "react";

const VehiclePannel = (props) => {
  return (
    <div>
      <h5
        className="text-3xl text-center"
        onClick={() => {
          props.setVehiclePannel(false);
        }}
      >
        <i className="ri-arrow-down-s-line"></i>
      </h5>
      <h1 className="text-2xl font-bold p-3">Select a Vehicle</h1>
      <div
     
        className="vehicle flex gap-1 p-2 justify-center items-center border rounded-xl mb-3 active:bg-gray-300"
      >
        <div className=" flex items-center justify-center ">
          <img
            className="h-20"
            src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
            alt="Uber Car"
          />
        </div>
        <div className=" w-80 p-2 leading-full"    onClick={() => {
          props.setConfirmVehiclePannel(true);
          props.setVehiclePannel(false)
          
        }}>
          <div className="flex gap-1 items-center">
            <h1 className="text-xl font-semibold ">Uber Car</h1>
            <span className="text-base  inline-block ">
              <i className="ri-user-3-fill"></i>5
            </span>
          </div>
          <h2 className="font-semibold tex-lg leading-5">4 mins away</h2>
          <h3 className="w-full text-sm font-base">Affordable compact rides</h3>
        </div>
        <h3 className="text-xl font-bold ">$522</h3>
      </div>
      <div className="vehicle flex gap-1 p-2 justify-center items-center border rounded-xl mb-3 active:bg-gray-300"    onClick={() => {
          props.setConfirmVehiclePannel(true);
          props.setVehiclePannel(false)
          
        }}>
        <div className=" flex items-center justify-center ">
          <img
            className="h-20"
            src="https://th.bing.com/th/id/OIP.znY96OhfmQ9RecEw45FS_AHaE7?rs=1&pid=ImgDetMain"
            alt="Uber Car"
          />
        </div>
        <div className=" w-80 p-2 leading-full">
          <div className="flex gap-1 items-center">
            <h1 className="text-xl font-semibold ">Moto</h1>
            <span className="text-base  inline-block ">
              <i className="ri-user-3-fill"></i>1
            </span>
          </div>
          <h2 className="font-semibold tex-lg leading-5">3 mins away</h2>
          <h3 className="w-full text-sm font-base">Affordable compact rides</h3>
        </div>
        <h3 className="text-xl font-bold ">$522</h3>
      </div>
      <div className="vehicle flex gap-1 p-2 justify-center items-center border rounded-xl mb-3 active:bg-gray-300"    onClick={() => {
          props.setConfirmVehiclePannel(true);
          props.setVehiclePannel(false)
        
          
        }}>
        <div className=" flex items-center justify-center ">
          <img
            className="h-20"
            src="https://th.bing.com/th/id/OIP.gERohywpalGF3NjolmHt5wHaE7?w=227&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt="Uber Car"
          />
        </div>
        <div className=" w-80 p-2 leading-full">
          <div className="flex gap-1 items-center">
            <h1 className="text-xl font-semibold ">Uber auto</h1>
            <span className="text-base  inline-block ">
              <i class="ri-user-3-fill"></i>1
            </span>
          </div>
          <h2 className="font-semibold tex-lg leading-5">3 mins away</h2>
          <h3 className="w-full text-sm font-base">Affordable compact rides</h3>
        </div>
        <h3 className="text-xl font-bold ">$522</h3>
      </div>
    </div>
  );
};

export default VehiclePannel;
