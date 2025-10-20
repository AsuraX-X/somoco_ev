import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-10 px-6 self relative z-[1]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        {/* Brand Section */}
        <div className="space-y-2">
          <h1 className="text-2xl font-bold font-family-cera-stencil uppercase">
            Somoco
          </h1>
          <p className="text-sm max-w-sm leading-relaxed">
            Driving the future of electric mobility in Ghana.
          </p>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-medium mb-3">Contact Us</h3>
          <p className="text-sm">
            Email:{" "}
            <a
              href="mailto:cs@somotexgh.com"
              className="hover:underline text-white"
            >
              cs<span className="font-family-cera-stencil">@</span>somotexgh.com
            </a>
          </p>
          <p className="text-sm">
            Phone:{" "}
            <a href="tel:0247970012" className="hover:underline text-white">
              02<span className="font-family-cera-stencil">4</span> 797 0012
            </a>{" "}
            <span className="font-family-cera-stencil">|</span>{" "}
            <a href="tel:0501578360" className="hover:underline text-white">
              050 157 8360
            </a>
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-white/20 mt-8 pt-4 text-center text-xs opacity-90">
        © 2025 Somoco. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
