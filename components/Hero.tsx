"use client";

const Hero = () => {
  return (
    <div className="text-secondary h-screen bg-cover bg-center bg-[url(/BYD/1-banner.jpg)] sm:bg-[url(/BYD/banner.jpg)] overflow-hidden">
      <div className="h-screen bg flex flex-col justify-between pt-20 pb-40 sm:py-0 items-center sm:items-start sm:justify-center lg:pl-10 px-4">
        <div>
        <h1 className="text-5xl md:text-7xl font-family-cera-stencil font-bold mb-6">
          Drive Tomorrow, Today
        </h1>
        <p className="text-lg md:text-2xl font-cera-pro max-w-2xl">
          Experience the future of mobility with the BYD SEAGULL. Innovation,
          sustainability, and performance combinded in one groundbreaking
          machine
          </p>
          </div>
        <div className="flex gap-5 mt-6 text-white">
          <button className="bg-primary rounded-full px-6 py-2 cursor-pointer">
            Learn More
          </button>
          <button className="bg-primary rounded-full px-6 py-2 cursor-pointer">
            Enquire now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
