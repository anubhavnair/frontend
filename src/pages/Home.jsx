import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";

import gsap from "gsap";
import LocationSearchPannel from "../components/LocationSearchPannel";
import VehiclePannel from "../components/VehiclePannel";
import ConfirmedVehicle from "../components/ConfirmedVehicle";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";
const Home = () => {
  const [pannelShow, setPannel] = useState(false);
  const [vehiclePannel, setVehiclePannel] = useState(false);
  const [confirmVehiclePannel, setConfirmVehiclePannel] = useState(false);
  const [lookingForDriverPannel, setLookingForDirverPannel] = useState(false);
  const [WaitingDriverPannel, setWaitingForDirverPannel] = useState(false);

  const pannelRef = useRef(null);
  const lookingForDriverRef = useRef(null);
  const vehicleRef = useRef(null);
  const confrimVehicleRef = useRef(null);
  const waitingForDriverRef = useRef(null);

  const arrowRef = useRef(null);
  const togglePannel = () => {
    setPannel(!pannelShow);
  };

  useGSAP(() => {
    if (pannelShow) {
      gsap.to(pannelRef.current, {
        height: "70%",
      });
      gsap.to(arrowRef.current, {
        opacity: 1,
        duration: 2,
      });
    } else {
      gsap.to(pannelRef.current, {
        height: "0%",
      });
      gsap.to(arrowRef.current, {
        opacity: 0,
      });
    }
  }, [pannelShow]);

  useGSAP(() => {
    if (vehiclePannel) {
      gsap.to(vehicleRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(vehicleRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [vehiclePannel]);
  useGSAP(() => {
    if (confirmVehiclePannel) {
      gsap.to(confrimVehicleRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(confrimVehicleRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [confirmVehiclePannel]);
  useGSAP(() => {
    if (lookingForDriverPannel) {
      gsap.to(lookingForDriverRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(lookingForDriverRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [lookingForDriverPannel]);
  useGSAP(() => {
    if (WaitingDriverPannel) {
      gsap.to(waitingForDriverRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(waitingForDriverRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [WaitingDriverPannel]);
  return (
    <div className="w-full h-screen relative overflow-hidden">
      <div className="w-20 absolute top-5 left-5">
        <img
          className="w-full"
          alt=""
          src="https://logospng.org/download/uber/logo-uber-4096.png"
        />
      </div>
      <div className=" h-screen w-full ">
        <img
          className="h-screen object-cover"
          src="https://www.researchgate.net/publication/323759986/figure/fig3/AS:631576123682823@1527590890164/Map-in-Uber-application-tracking-user-in-a-Yellow-Cab.png"
        />
      </div>
      <div className="absolute top-0 w-full h-screen flex flex-col justify-end  rounded-2xl">
        <div className="h-[30%] bg-[#fff] p-5">
          <h1 className="text-2xl font-semibold">Find a trip</h1>
          <form className="flex flex-col gap-3 pt-3 relative">
            <h1
              onClick={() => setPannel(false)}
              ref={arrowRef}
              className="absolute opacity-0 text-3xl right-5 -top-8"
            >
              <i className="ri-arrow-down-s-line "></i>
            </h1>
            <div className="w-1 h-15 absolute opacity-[0.5] rounded-full bg-black top-9 left-5"></div>
            <input
              onClick={() => setPannel(true)}
              type="text"
              name="picup_location"
              id="pickup_location"
              placeholder="Add pick-up location"
              className="p-2 text-center  bg-[#eeeeee] rounded-xl mb-2 placeholder:text-center"
            />
            <input
              onClick={() => setPannel(true)}
              type="text"
              name="destination_location"
              id="destination_location"
              placeholder="Enter your destination"
              className="p-2 text-center bg-[#eeeeee] rounded-xl placeholder:text-center"
            />
          </form>
        </div>
        <div ref={pannelRef} className="h-0 bg-[#ffff] w-full pl-5 font-bold ">
          <LocationSearchPannel
            setPannel={setPannel}
            setVehiclePannel={setVehiclePannel}
          />
        </div>
      </div>
      {/* vehicle select  */}
      <div
        ref={vehicleRef}
        className="z-10 bg-white bottom-0 fixed w-full rounded-2xl px-3 py-2 translate-y-full"
      >
        <VehiclePannel
          setVehiclePannel={setVehiclePannel}
          setConfirmVehiclePannel={setConfirmVehiclePannel}
        />
      </div>
      <div
        ref={confrimVehicleRef}
        className="z-11 bg-white bottom-0 fixed w-full rounded-2xl px-3 py-2 translate-y-full"
      >
        <ConfirmedVehicle
          setConfirmVehiclePannel={setConfirmVehiclePannel}
          setLookingForDirverPannel={setLookingForDirverPannel}
        />
      </div>
      <div
        ref={lookingForDriverRef}
        className="z-12 bg-white bottom-0 fixed w-full rounded-2xl px-3 py-2 translate-y-full"
      >
        <LookingForDriver
          setLookingForDirverPannel={setLookingForDirverPannel}
        />
      </div>
      <div ref={waitingForDriverRef} className="z-13 bg-white bottom-0 fixed w-full rounded-2xl px-3 py-2   translate-y-full">
        <WaitingForDriver setWaitingForDirverPannel={setWaitingForDirverPannel} />
      </div>
    </div>
  );
};

export default Home;
