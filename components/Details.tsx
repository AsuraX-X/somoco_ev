import React from "react";

const Details = () => {
  return (
    <div className="text-secondary">
      <div className="h-screen bg-cover px-6 bg-center bg-[url(/BYD/4-banner.jpg)] sm:bg-[url(/BYD/side-view.jpg)] pt-10">
        <h1 className="font-family-cera-stencil text-6xl font-bold mb-4">
          Aesthetic Design
        </h1>
        <p className="text-xl">
          Introducing the all new sleek and unified body design of the BYD
          SEAGULL. Its continuous single arc profile gives the car a bold
          presence, while the streamlined lines create a refined, elegant look.
          Experience the new BYD SEAGULL.
        </p>
      </div>
      <div className="h-screen bg-cover bg-right sm:bg-center bg-[url(/BYD/cabin-small.png)] sm:bg-[url(/BYD/cabin.jpg)] ">
        <h1 className="font-family-cera-stencil text-6xl font-bold mb-4 bg-gradient-to-b from-white/15 to-transparent h-full w-full px-6 pt-10">
          Elegant Cabin
        </h1>
      </div>
      <div className="h-screen bg-cover px-6 bg-center bg-[url(/BYD/1-banner.jpg)] sm:bg-[url(/BYD/banner.jpg)]"></div>
      <div className="h-screen bg-cover px-6 bg-center bg-[url(/BYD/air_bag.jpg)]"></div>
      <div className="h-screen bg-cover px-6 bg-center bg-[url(/BYD/transparent.jpg)] "></div>
      <div className="h-screen bg-cover px-6 bg-center bg-[url(/BYD/1-banner.jpg)] sm:bg-[url(/BYD/double.jpg)]"></div>
    </div>
  );
};

export default Details;
