import React from "react";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="h-48  bg-black text-white-200 flex flex-col justify-center items-center gap-2 ">
      <p className="text-xl">Sahara Engineering Works</p>
      <p className="text-center">
        200/6/B Saccubhat per seraulium colva SERAULIM, Madgaon, Goa 403708.
      </p>
      <p>8208743416 | 9763133132 | 8007567652</p>
      <div className="flex justify-center items-center gap-2 text-slate-600">
        {" "}
        Follow us on <FaInstagram className=" cursor-pointer  text-slate-300" />
      </div>

      <a
        target="_blank"
        href="https://www.instagram.com/sahara_engineering_works?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
      ></a>
    </footer>
  );
};

export default Footer;
