import React from "react";

const Details = () => {
  return (
    <div className="text-secondary">
      <div
        data-header-color="light"
        className="h-screen bg-cover px-6 bg-center bg-[url(/BYD/4-banner.jpg)] sm:bg-[url(/BYD/side-view.jpg)] pt-35 snap-center relative z-[1]"
      >
        <h1 className="font-family-cera-stencil text-3xl text-center sm:text-left sm:text-6xl font-bold mb-4">
          Aesthetic Design
        </h1>
        <p className="sm:text-xl text-center sm:text-left max-w-4xl">
          Introducing the all new sleek and unified body design of the BYD
          SEAGULL. Its continuous single arc profile gives the car a bold
          presence, while the streamlined lines create a refined, elegant look.
          Experience the new BYD SEAGULL.
        </p>
      </div>
      <div className="h-screen bg-cover bg-center bg-[url(/BYD/cabin.jpg)] snap-center relative z-[1]">
        <div className="w-full h-full bg-gradient-to-b from-white via-transparent to-transparent">
          <h1 className="font-family-cera-stencil text-3xl sm:text-6xl text-center font-bold mb-4 bg-gradient-to-b from-white/15 to-transparent h-full w-full px-6 pt-30">
            Elegant Cabin
          </h1>
        </div>
      </div>
      <div className="h-screen bg-cover  bg-center bg-[url(/BYD/air_bag.jpg)] text-center snap-center relative z-[1]">
        <div className="h-full w-full px-6 bg-gradient-to-b5 flex flex-col sm:justify-end pb-10 bg-gradient-to-b sm:bg-gradient-to-t from-white/80 via-transparent to-transparent items-center">
          <h1 className="font-family-cera-stencil text-3xl sm:text-6xl font-bold mb-4 pt-10">
            Total Cabin Protection
          </h1>
          <p className="sm:text-xl max-w-4xl">
            “Safety is the ultimate comfort.” Every BYD SEAGULL comes equipped
            with driver and passenger airbags, along with front and rear curtain
            airbags. Higher trims include additional front-seat side airbags
            designed to minimize impact and enhance protection during
            collisions.
          </p>
        </div>
      </div>
      <div className="h-screen bg-cover px-6 bg-center bg-[url(/BYD/transparent.jpg)] rotate-y-180 snap-center relative z-[1]">
        <div className="rotate-y-180 flex flex-col items-center sm:items-end h-full w-full justify-start sm:justify-end pb-10">
          <h1 className="font-family-cera-stencil text-3xl sm:text-6xl font-bold mb-4 pt-10">
            E-Platfrom 3.0
          </h1>
          <p className="sm:text-xl text-center sm:text-right  max-w-4xl">
            The BYD SEAGULL is equipped with the ultra safe Blade Battery and
            built on the E<span className="font-family-cera-stencil">-</span>
            Platform 3.0, inheriting its exceptional safety characteristics to
            deliver a robust body structure designed exclusively for pure
            electric vehicles.
          </p>
        </div>
      </div>
      <div className="gap-4 pt-30 h-screen bg-cover px-6 bg-center bg-[url(/BYD/1-banner.jpg)] sm:bg-[url(/BYD/double.jpg)] flex flex-col items-center snap-start relative z-[1]">
        <h1 className="text-center font-family-cera-stencil text-6xl font-bold">
          BYD SEAGULL
        </h1>
        <button className="text-primary border-primary border rounded-full px-4 text-xl py-2">
          Enquire Now
        </button>
      </div>
    </div>
  );
};

export default Details;
