"use client";

import images from "@/components/byd-seagull/images";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const Gallery = () => {
  const sRef = useRef<HTMLDivElement>(null);

  const [filter, setFilter] = useState("");

  const [filteredImages, setFilteredImages] = useState(images);

  useEffect(() => {
    console.log(filter);

    if (filter !== "") {
      setFilteredImages(images.filter(({ type }) => type === filter));
    } else {
      setFilteredImages(images);
    }
  }, [filter]);

  const { scrollXProgress } = useScroll({
    container: sRef,
  });

  useMotionValueEvent(scrollXProgress, "change", (i) => console.log(i));

  const scrollLeft = () => {
    if (sRef.current) {
      const scrollAmount = window.innerWidth < 640 ? -360 : -1090;
      sRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };
  const scrollRight = () => {
    if (sRef.current) {
      const scrollAmount = window.innerWidth < 640 ? 360 : 1090;
      sRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };
  return (
    <div className="flex flex-col">
      <h1 className="font-family-cera-stencil text-3xl sm:text-6xl font-bold text-center mb-5 text-primary">
        Gallery
      </h1>
      <div className=" flex w-full items-center justify-center gap-4 mb-10 text-primary">
        <motion.button
          animate={{
            borderBottomColor: filter === "" ? "#0039a6" : "#ffffff",
          }}
          onClick={() => setFilter("")}
          className="font-family-cera-stencil text-xl sm:text-4xl border-b-4 border-white w-50 text-center"
        >
          ALL
        </motion.button>
        <motion.button
          animate={{
            borderBottomColor: filter === "exterior" ? "#0039a6" : "#ffffff",
          }}
          onClick={() => setFilter("exterior")}
          className="font-family-cera-stencil text-xl sm:text-4xl border-b-4 border-white w-50 text-center"
        >
          EXTERIOR
        </motion.button>
        <motion.button
          animate={{
            borderBottomColor: filter === "interior" ? "#0039a6" : "#ffffff",
          }}
          onClick={() => setFilter("interior")}
          className="font-family-cera-stencil text-xl sm:text-4xl border-b-4 border-white w-50 text-center"
        >
          INTERIOR
        </motion.button>
      </div>
      <div className="relative h-fit">
        <button
          onClick={scrollLeft}
          className="absolute scale-80 sm:scale-100 top-1/2 -translate-y-1/2 focus-visible:outline-0 left-1 sm:left-4 h-16 w-16 rounded-full bg-primary/50 text-white flex justify-center items-center z-[5]"
        >
          <ChevronLeft size={40} className="-ml-1" />
        </button>
        <div
          ref={sRef}
          className="flex overflow-x-scroll snap-x snap-mandatory h-fit"
        >
          {filteredImages.map((image, i) => (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              key={i}
              className="flex-shrink-0 snap-center h-fit w-screen sm:w-auto relative"
            >
              <Image
                src={image.src}
                alt={`BYD SEAGULL ${image.type} image ${i}`}
                width={410}
                height={0}
                unoptimized
                className="h-auto w-full sm:w-auto object-contain"
              />
            </motion.div>
          ))}
        </div>
        <button
          onClick={scrollRight}
          className="absolute scale-80 sm:scale-100  top-1/2 -translate-y-1/2 focus-visible:outline-0 right-1 sm:right-4 h-16 w-16 rounded-full bg-primary/50 text-white flex justify-center items-center z-[5]"
        >
          <ChevronRight size={40} className="-mr-1" />
        </button>
      </div>
    </div>
  );
};

export default Gallery;
