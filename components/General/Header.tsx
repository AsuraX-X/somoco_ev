"use client";

import { ChevronDown, ChevronRight, X } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isBlueBg, setIsBlueBg] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [showModelsDropdown, setShowModelsDropdown] = useState(false);
  const [showMobileModels, setShowMobileModels] = useState(false);
  const pathname = usePathname();

  let hoverTimeout: NodeJS.Timeout;

  const handleMouseEnter = () => {
    clearTimeout(hoverTimeout);
    setShowModelsDropdown(true);
  };

  const handleMouseLeave = () => {
    hoverTimeout = setTimeout(() => {
      setShowModelsDropdown(false);
    }, 300); // 300ms delay
  };

  useEffect(() => {
    // Reset to default when pathname changes
    setIsBlueBg(false);
    setHasScrolled(false);
    setShowModelsDropdown(false);
    setShowMobileModels(false);
    setIsOpen(false);
    clearTimeout(hoverTimeout);

    const handleScroll = () => {
      // Check scroll position for the specific scroll container or window
      const scrollContainer = document.querySelector(".snap-y");
      const scrollPosition = scrollContainer
        ? scrollContainer.scrollTop
        : window.scrollY;
      setHasScrolled(scrollPosition > 50);
    };

    // Add scroll listener to the specific container or window
    const scrollContainer = document.querySelector(".snap-y");
    const target = scrollContainer || window;

    target.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bgColor = entry.target.getAttribute("data-header-color");
            setIsBlueBg(bgColor === "blue");
          }
        });
      },
      { threshold: 0, rootMargin: "-80px 0px 0px 0px" }
    );

    // Use setTimeout to ensure DOM is ready after navigation
    const timeoutId = setTimeout(() => {
      const sections = document.querySelectorAll("[data-header-color]");
      sections.forEach((section) => {
        observer.observe(section);
      });
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      target.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, [pathname]);

  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);

  return (
    <div className="fixed top-0 left-0 right-0 z-10">
      <div className="hidden md:block relative">
        <div
          className={`flex justify-between items-center px-6 py-8 transition-all duration-300 ${
            isBlueBg || hasScrolled || showModelsDropdown
              ? "text-white bg-primary"
              : "text-primary bg-gradient-to-b from-[#ffffff70] to-transparent"
          }`}
        >
          <Link href={"/"}>
            <div className="font-family-cera-stencil font-bold text-2xl gap-1 flex">
              <Image
                unoptimized
                src={
                  isBlueBg || hasScrolled || showModelsDropdown
                    ? "/LogoIconAlt.svg"
                    : "/LogoIcon.svg"
                }
                height={40}
                width={40}
                alt="Somoco Logo"
              />{" "}
              <h1>SOMOCO EV</h1>
            </div>
          </Link>
          <div className="flex gap-6 items-center">
            {pathname !== "/" && (
              <Link href={"/"}>
                <button className="cursor-pointer">Home</button>
              </Link>
            )}
            <Link href={"/about-us"}>
              <button className="cursor-pointer">About Us</button>
            </Link>
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <motion.button className="cursor-pointer flex items-center gap-1">
                Models <ChevronDown size={20} />
              </motion.button>
            </div>
            <Link href={"/contact"}>
              <button className="cursor-pointer">Contact Us</button>
            </Link>
          </div>
        </div>
        {/* Dropdown expanding from bottom */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: showModelsDropdown ? "auto" : 0,
            opacity: showModelsDropdown ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden bg-primary text-white"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="border-t-2 border-white">
            <div className="px-6 py-4">
              <Link href={"/byd-seagull"}>
                <button className="w-full text-left hover:opacity-80 transition-opacity font-family-cera-stencil text-lg">
                  BYD SEAGULL
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="block md:hidden">
        <div className="w-full flex justify-end ">
          <motion.button
            animate={{ opacity: isOpen ? 0 : 1, scale: isOpen ? 0 : 1 }}
            className="px-4 py-4 z-50 bg-gradient-to-bl from-black/30 via-transparent to-transparent"
            onClick={() => setIsOpen(true)}
          >
            <Image
              src={isBlueBg || hasScrolled ? "/menuAlt.svg" : "/menu.svg"}
              unoptimized
              width={30}
              height={30}
              alt="menu icon"
            />
          </motion.button>
        </div>
        <motion.div
          initial={{ opacity: 0, pointerEvents: "none" }}
          animate={{
            opacity: isOpen ? 1 : 0,
            pointerEvents: isOpen ? "auto" : "none",
          }}
          className="fixed backdrop-blur-sm w-full h-full top-0 flex justify-end text-white z-50"
        >
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: isOpen ? 0 : "100%" }}
            transition={{ ease: "linear" }}
            className="bg-primary w-75  px-6 pt-4 relative"
          >
            {!showMobileModels ? (
              <>
                <div className="font-family-cera-stencil font-bold text-4xl flex justify-between items-center">
                  <Link href={"/"}>
                    <div className="font-family-cera-stencil font-bold text-2xl gap-1 flex items-center">
                      <Image
                        unoptimized
                        src="/LogoIconAlt.svg"
                        height={40}
                        width={40}
                        alt="Somoco Logo"
                      />{" "}
                      <h1>SOMOCO EV</h1>
                    </div>
                  </Link>
                  <button onClick={() => setIsOpen(false)}>
                    <X size={35} />
                  </button>
                </div>
                <div className="flex items-start flex-col mt-8 text-2xl divide-y-2 divide-white">
                  {pathname !== "/" && (
                    <Link className="w-full" href={"/"}>
                      <button className=" text-left py-4">Home</button>
                    </Link>
                  )}
                  <Link className="w-full" href={"/about-us"}>
                    <button className=" text-left py-4">About Us</button>
                  </Link>
                  <button
                    className="w-full text-left py-4 flex items-center justify-between"
                    onClick={() => setShowMobileModels(true)}
                  >
                    Models <ChevronRight size={24} />
                  </button>
                  <Link className="w-full" href={"/contact"}>
                    <button className=" text-left py-4">Contact Us</button>
                  </Link>
                </div>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="w-full h-full"
              >
                <div className="font-family-cera-stencil font-bold text-4xl flex justify-between items-center">
                  <button
                    onClick={() => setShowMobileModels(false)}
                    className="flex items-center gap-2"
                  >
                    <ChevronDown size={35} className="rotate-90" />
                    <h1 className="text-2xl">Models</h1>
                  </button>
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      setShowMobileModels(false);
                    }}
                  >
                    <X size={35} />
                  </button>
                </div>
                <div className="flex items-start flex-col mt-8 text-2xl">
                  <Link
                    className="w-full border-b-2 border-white"
                    href={"/byd-seagull"}
                  >
                    <button className=" text-left py-4">BYD SEAGULL</button>
                  </Link>
                </div>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
