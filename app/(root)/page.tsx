import Details from "@/components/Details";
import Hero from "@/components/Hero";
import Specs from "@/components/Specs";
import React from "react";

const Home = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <Hero />
      <Specs />
      <Details />
    </div>
  );
};

export default Home;
