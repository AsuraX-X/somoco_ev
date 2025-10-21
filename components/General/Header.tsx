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
  const [showBrandsDropdown, setShowBrandsDropdown] = useState(false);
  const [showBYDDropdown, setShowBYDDropdown] = useState(false);
  const hideDropdownTimeout = React.useRef<number | null>(null);
  const [showMobileBrands, setShowMobileBrands] = useState(false);
  const [showMobileBYD, setShowMobileBYD] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Reset to default when pathname changes
    setIsBlueBg(false);
    setHasScrolled(false);
    setShowBrandsDropdown(false);
    setShowBYDDropdown(false);
    setShowMobileBrands(false);
    setIsOpen(false);

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

  // Clear any pending hide timeout when component unmounts
  useEffect(() => {
    return () => {
      if (hideDropdownTimeout.current) {
        window.clearTimeout(hideDropdownTimeout.current);
        hideDropdownTimeout.current = null;
      }
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-10">
      <div className="hidden md:block relative">
        <div
          className={`flex justify-between items-center px-6 py-8 transition-all duration-300 ${
            isBlueBg || hasScrolled
              ? "text-white bg-primary"
              : "text-primary bg-gradient-to-b from-[#ffffff70] to-transparent"
          }`}
        >
          <Link href={"/"}>
            <div className="font-family-cera-stencil font-bold text-2xl gap-1 flex">
              <Image
                unoptimized
                src={
                  isBlueBg || hasScrolled ? "/LogoIconAlt.svg" : "/LogoIcon.svg"
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
            <div className="relative">
              <motion.button
                onHoverStart={() => {
                  // Clear any pending hide timeout and show dropdown immediately
                  if (hideDropdownTimeout.current) {
                    window.clearTimeout(hideDropdownTimeout.current);
                    hideDropdownTimeout.current = null;
                  }
                  // reset nested submenu state when opening brands
                  setShowBYDDropdown(false);
                  setShowBrandsDropdown(true);
                }}
                onHoverEnd={() => {
                  // Start a managed timeout that can be cleared if user re-enters
                  if (hideDropdownTimeout.current) {
                    window.clearTimeout(hideDropdownTimeout.current);
                  }
                  hideDropdownTimeout.current = window.setTimeout(() => {
                    setShowBrandsDropdown(false);
                    hideDropdownTimeout.current = null;
                  }, 500);
                }}
                className="cursor-pointer flex items-center gap-1"
              >
                Brands <ChevronDown size={20} />
              </motion.button>

              {/* Brands Dropdown */}
              {showBrandsDropdown && (
                <motion.div
                  className="absolute top-full left-0 mt-2 bg-white text-primary shadow-lg rounded-md min-w-[150px] overflow-hidden"
                  onHoverStart={() => {
                    // Keep open while hovering dropdown
                    if (hideDropdownTimeout.current) {
                      window.clearTimeout(hideDropdownTimeout.current);
                      hideDropdownTimeout.current = null;
                    }
                    setShowBrandsDropdown(true);
                  }}
                  onHoverEnd={() => {
                    // Start hide timeout when leaving dropdown
                    if (hideDropdownTimeout.current) {
                      window.clearTimeout(hideDropdownTimeout.current);
                    }
                    hideDropdownTimeout.current = window.setTimeout(() => {
                      setShowBrandsDropdown(false);
                      hideDropdownTimeout.current = null;
                    }, 500);
                  }}
                >
                  <div className="relative">
                    <motion.div
                      className="px-4 py-3 hover:bg-gray-100 cursor-pointer flex items-center justify-between"
                      onHoverStart={() => {
                        // hovering BYD menu item - show BYD models and clear any hide timeout
                        if (hideDropdownTimeout.current) {
                          window.clearTimeout(hideDropdownTimeout.current);
                          hideDropdownTimeout.current = null;
                        }
                        setShowBYDDropdown(true);
                      }}
                      onHoverEnd={() => {
                        // start shared hide timeout so both dropdowns close together
                        if (hideDropdownTimeout.current) {
                          window.clearTimeout(hideDropdownTimeout.current);
                        }
                        hideDropdownTimeout.current = window.setTimeout(() => {
                          setShowBYDDropdown(false);
                          setShowBrandsDropdown(false);
                          hideDropdownTimeout.current = null;
                        }, 500);
                      }}
                    >
                      <span>BYD</span>
                      <ChevronRight size={20} />
                    </motion.div>

                    {/* BYD Models Dropdown */}
                    {showBYDDropdown && (
                      <motion.div
                        className="bg-white text-primary rounded-md"
                        onHoverStart={() => {
                          // entering the nested submenu should keep everything open
                          if (hideDropdownTimeout.current) {
                            window.clearTimeout(hideDropdownTimeout.current);
                            hideDropdownTimeout.current = null;
                          }
                          setShowBrandsDropdown(true);
                          setShowBYDDropdown(true);
                        }}
                        onHoverEnd={() => {
                          // start shared hide timeout when leaving nested submenu
                          if (hideDropdownTimeout.current) {
                            window.clearTimeout(hideDropdownTimeout.current);
                          }
                          hideDropdownTimeout.current = window.setTimeout(
                            () => {
                              setShowBYDDropdown(false);
                              setShowBrandsDropdown(false);
                              hideDropdownTimeout.current = null;
                            },
                            500
                          );
                        }}
                      >
                        <Link href={"/byd-seagull"}>
                          <div className="px-4 py-3 hover:bg-gray-100 cursor-pointer">
                            BYD SEAGULL
                          </div>
                        </Link>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              )}
            </div>
            <Link href={"/contact"}>
              <button className="cursor-pointer">Contact Us</button>
            </Link>
          </div>
        </div>
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
            {!showMobileBrands ? (
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
                    <X size={30} />
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
                    onClick={() => setShowMobileBrands(true)}
                  >
                    Brands <ChevronRight size={30} />
                  </button>
                  <Link className="w-full" href={"/contact"}>
                    <button className=" text-left py-4">Contact Us</button>
                  </Link>
                </div>
              </>
            ) : !showMobileBYD ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="w-full h-full"
              >
                <div className="font-family-cera-stencil font-bold text-4xl flex justify-between items-center">
                  <button
                    onClick={() => setShowMobileBrands(false)}
                    className="flex items-center gap-2"
                  >
                    <ChevronDown size={30} className="rotate-90" />
                    <h1 className="text-2xl">Brands</h1>
                  </button>
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      setShowMobileBrands(false);
                    }}
                  >
                    <X size={30} />
                  </button>
                </div>
                <div className="flex items-start flex-col mt-8 text-2xl">
                  <button
                    className="w-full text-left py-4 flex items-center justify-between"
                    onClick={() => setShowMobileBYD(true)}
                  >
                    BYD <ChevronRight size={30} />
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="w-full h-full"
              >
                <div className="font-family-cera-stencil font-bold text-4xl flex justify-between items-center">
                  <button
                    onClick={() => setShowMobileBYD(false)}
                    className="flex items-center gap-2"
                  >
                    <ChevronDown size={30} className="rotate-90" />
                    <h1 className="text-2xl">BYD</h1>
                  </button>
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      setShowMobileBrands(false);
                      setShowMobileBYD(false);
                    }}
                  >
                    <X size={30} />
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
