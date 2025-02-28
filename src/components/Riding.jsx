import React from "react";
import { Link } from "react-router-dom";

const Riding = () => {
  return (
    <div className="h-screen">
      <Link to='/home' className="fixed right-4 w-10 flex justify-center items-center bg-white top-4 text-2xl p-1 font-base rounded-full">
        <i className="ri-home-9-line"></i>
      </Link>
      <div className="h-1/2">
        <img
          className=" h-full object-cover"
          src="https://www.researchgate.net/publication/323759986/figure/fig3/AS:631576123682823@1527590890164/Map-in-Uber-application-tracking-user-in-a-Yellow-Cab.png"
        />
      </div>
      <div className="h-1/2 p-3">
        <div className="h-full">
          <div className="flex items-center mb-5 justify-around">
            <div className="w-40 flex justify-center">
              <img
                className="w-full"
                about=""
                src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
                alt=""
              />
            </div>
            <div>
              <h1 className="text-xl">Anubhav Nair</h1>
              <h2 className="font-semibold">CG-04-CC-5284</h2>
              <p>Maruti Suzuki </p>
            </div>
          </div>
          <div>
            <div>
             
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
              <button className="w-full bg-green-600 text-white p-2 font-semibold rounded-xl active:bg-black active:text-white hover:bg-white hover:text-black">
                Make a payment !
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Riding;
