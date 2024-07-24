import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="h-64  bg-black text-white-200 flex flex-col justify-center items-center gap-4 ">
      <p className="text-xl">Sahara Engineering Works</p>
      <p className="text-center">
        200/6/B Saccubhat per seraulium colva SERAULIM, Madgaon, Goa 403708.
      </p>
      <div className="flex gap-2">
        <a href={`tel:${8007567652}`}>{8007567652} |</a>
        <a href={`tel:${8007567652}`}>{9763133132} |</a>
        <a href={`tel:${8007567652}`}>{8208743416}</a>
      </div>
      <div className="flex justify-center items-center gap-10 text-slate-600">
        <a
          target="_blank"
          href="https://www.instagram.com/sahara_engineering_works?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
        >
          <FaInstagram className=" cursor-pointer  text-slate-300" />
        </a>
        <a
          target="_blank"
          href="https://www.facebook.com/p/Sahara-engineering-works-100083598151010/?_rdr"
        >
          <FaFacebook className=" cursor-pointer  text-slate-300" />
        </a>
        <a
          target="_blank"
          href="https://www.youtube.com/@saharaengineeringworks1887"
        >
          <FaYoutube className=" cursor-pointer  text-slate-300" />
        </a>
        <a
          target="_blank"
          href={`https://wa.me/${918208743416}`}
          rel="noopener noreferrer"
        >
          <FaWhatsapp className=" cursor-pointer  text-slate-300" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
