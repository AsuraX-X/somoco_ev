"use client";

import { Plus } from "lucide-react";
import { motion } from "motion/react";
import React from "react";

const Location = ({
  place,
  address,
  phone,
  map,
}: {
  place: string;
  address: string;
  phone: string;
  map: string;
}) => {
  return (
    <div>
      <div>
        <h2 className="font-family-cera-stencil flex items-center justify-between py-2 text-white bg-primary px-4 text-2xl sm:text-4xl">
          {place}
          <motion.button className="cursor-pointer">
            <Plus size={35} />
          </motion.button>
        </h2>
      </div>
      <div>
        <p>Adress: {address}</p>
        <p>Phone: {phone}</p>
      </div>
      <div>
        <iframe
          src={map}
          width="600"
          height="450"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Location;
