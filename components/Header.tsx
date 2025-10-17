"use client";

import { X } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);

  return (
    <div className="fixed top-0 left-0 right-0 z-10">
      <div className="hidden md:block">
        <div className="text-white flex justify-between items-center px-6 py-2 bg-gradient-to-b from-[#00000078] to-transparent">
          <div className="font-family-cera-stencil font-bold text-4xl">
            SOMOCO
          </div>
          <div className="flex gap-6 items-center">
            <button>About EV</button>
            <button>Sustainability</button>
            <button>Gallery</button>
            <button>Contact</button>
          </div>
        </div>
      </div>
      <div className="block md:hidden">
        <div className="w-full flex justify-end px-6 py-4">
          <motion.button
            animate={{ opacity: isOpen ? 0 : 1, scale: isOpen ? 0 : 1 }}
            className="z-10"
            onClick={() => setIsOpen(true)}
          >
            <Image
              src={"/menu.svg"}
              unoptimized
              width={30}
              height={30}
              alt="menu icon"
            />
          </motion.button>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen ? 1 : 0 }}
          className="fixed backdrop-blur-sm w-full h-full top-0 flex justify-end text-white z-1"
        >
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: isOpen ? 0 : "100%" }}
            transition={{ease:"linear"}}
            className="bg-primary w-90 pl-10 pr-4 py-2"
          >
            <div className="font-family-cera-stencil font-bold text-4xl flex justify-between">
              <h1>SOMOCO</h1>
              <button onClick={() => setIsOpen(false)}>
                <X size={40} />
              </button>
            </div>
            <div className="flex items-start flex-col mt-8 text-2xl divide-y-2 divide-white">
              <button className="w-full text-left py-4">About EV</button>
              <button className="w-full text-left py-4">Sustainability</button>
              <button className="w-full text-left py-4">Gallery</button>
              <button className="w-full text-left py-4">Contact</button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
