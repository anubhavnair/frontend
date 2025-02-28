import React from "react";

const LocationSearchPannel = (props) => {
  // console.log(props);
  // const {setVehiclepannel,setVehiclepannel} = props

  const locations = [
    "123 Main Street, New York, NY 10001",
    "456 Park Avenue, Los Angeles, CA 90001",
    "789 State Street, Chicago, IL 60601",
    "321 Oak Road, Miami, FL 33101",
    "654 Pine Lane, Seattle, WA 98101",
  ];
  return (
    <div>
      <h1 className="text-lg mb-2">Select Location</h1>
      {locations.map((location, indx) => {
        return (
          <div
            key={indx}
            onClick={(e) => {
              props.setVehiclePannel(true);
              props.setPannel(false)
            }}
            className=" active:bg-gray-200 font-semibold location flex p-2 gap-2 mb-2 justify-start mr-2 items-center border-1  rounded-xl border-gray-200"
          >
            <h2 className="flex justify-center  rounded-full items-center w-10 h-10 text-xl bg-gray-200">
              <i className="ri-map-pin-fill"></i>
            </h2>
            <h1 className="rounded-2xl  text-sm px-2">{location}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPannel;
