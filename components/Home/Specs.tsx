import React from "react";

const Specs = () => {
  return (
    <div className="h-screen bg-cover flex items-start sm:items-end bg-center bg-[url(/BYD/2-banner.jpg)] sm:bg-[url(/BYD/seagull.jpg)] flex justify-center text-secondary snap-center relative z-[1]">
      <div className=" flex justify-center  px-4 pt-20 sm:py-10 divide-x-2 divide-secondary w-full">
        <div className="flex flex-col justify-center items-center flex-1 px-2 md:px-8">
          <h1 className="font-family-cera-stencil text-2xl md:text-4xl text-center ">
            Blade Battery
          </h1>
          <p className="text-base md:text-xl text-center">Ultra Safe</p>
        </div>
        <div className="flex flex-col justify-center items-center flex-1 px-2 md:px-8">
          <h1 className="font-family-cera-stencil text-2xl md:text-4xl text-center ">
            30 minutes
          </h1>
          <p className="text-base md:text-xl text-center">Fast Charge</p>
        </div>
        <div className="flex flex-col justify-center items-center flex-1 px-2 md:px-8">
          <h1 className="font-family-cera-stencil text-2xl md:text-4xl text-center ">
            E-Platform 3.0
          </h1>
          <p className="text-base md:text-xl text-center">
            Efficiency, Safety, Aesthetics
          </p>
        </div>
      </div>
    </div>
  );
};

export default Specs;
