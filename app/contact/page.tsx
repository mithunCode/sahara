/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { EB_Garamond, Raleway } from "next/font/google";
import { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLocationPin,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa6";

import { MdCall, MdEmail } from "react-icons/md";

const raleway = Raleway({ subsets: ["latin"] });
const garamond = EB_Garamond({ subsets: ["latin"] });
const page = () => {
  const [name, setName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const validateForm = () => {
    if (!name || !contactNumber || !message) {
      setError("All fields are required");
      return false;
    }
    if (!/^\d{10}$/.test(contactNumber)) {
      setError("Contact number must be 10 digits");
      return false;
    }
    return true;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError("");
    setSuccess("");
    if (!validateForm()) return;

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, contactNumber, message }),
    });

    if (res.ok) {
      setSuccess("Your message has been sent successfully!");
      setName("");
      setContactNumber("");
      setMessage("");
    } else {
      setError("Failed to send your message . Please try again later..");
    }
  };

  return (
    <section className="relative   flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className=" bg-[url('/contact.jpg')]   backdrop-blur-xl   bg-cover bg-bottom w-screen h-96  text-center flex justify-center items-center text-5xl   ">
        <p
          className={`${raleway.className}  + font-bold opacity-100   relative text-white`}
        >
          Contact Us.
        </p>
      </div>
      <h4
        className={`${garamond.className}  + text-2xl text-center m-4 mt-10 `}
      >
        We&apos;d love to hear from you. <br />
        Please contact us with any questions you may have.
      </h4>
      <div className="flex flex-row px-10 w-full justify-between  max-lg:px-4 max-lg:flex-col-reverse ">
        <div>
          <div className="flex justify-start max-md:text-2xl items-start gap-5 my-1 shadow-xs p-5  lg:mt-24  ">
            <FaLocationPin className="text-blue-500 mt-2" />
            <p className={`${garamond.className}  +    text-xl  `}>
              200/6/B Saccubhat per seraulium colva SERAULIM, <br /> Madgaon,
              Goa 403708.
            </p>
          </div>
          <div className="flex justify-start items-center max-md:text-2xl items-start gap-5 my-1 shadow-xs p-5 max-sm:p-0  text-3xl">
            <MdEmail className=" text-red-500 " />

            <span className="text-blue-500 shadow-sm text-lg">
              {" "}
              <a href={`mailto:${"saharaenzineers@gmail.com"}`} target="_blank">
                saharaengineeringgoa@gmail.com
              </a>
            </span>
          </div>
          <div className="flex flex-row  justify-start items-start gap-5 p-5 max-sm:p-2 max-sm:px-4 my-1 text-xl">
            <div className="flex justify-center items-center gap-2">
              <MdCall className=" text-blue-500 text-2xl" />
            </div>
            <div className="flex gap-2 flex-wrap max-sm:gap-5">
              <a href={`tel:${8208743416}`}>{8208743416}</a>
              <a href={`tel:${9763133132}`}>{9763133132}</a>

              <a href={`tel:${8007567652}`}>{8007567652}</a>
            </div>
          </div>
          <h4 className="px-4">
            <p className={`${garamond.className}  +    text-xl  `}>
              Follow us on Social Media
            </p>
          </h4>
          <div className="sl flex gap-10 px-16 py-4">
            <div className="flex  justify-center items-center gap-2 text-2xl">
              <a
                target="_blank"
                href="https://www.instagram.com/sahara_engineering_works?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              >
                <p className="flex justify-center  items-center gap-3 hover:text-2xl hover:text-blue-500 hover:ease-in-out delay-100">
                  <FaInstagram className="text-2xl text-pink-500" />{" "}
                </p>
              </a>
            </div>
            <div className="flex  justify-center items-center gap-2 text-xl">
              <a
                target="_blank"
                href="https://www.facebook.com/p/Sahara-engineering-works-100083598151010/?_rdr"
              >
                <p className="flex justify-center  items-center gap-3 hover:text-2xl hover:text-blue-500 hover:ease-in-out delay-100">
                  <FaFacebook className="text-2xl text-blue-500" />
                </p>
              </a>
            </div>
            <div className="flex  justify-center items-center gap-2 text-xl">
              <a
                target="_blank"
                href="https://www.youtube.com/@saharaengineeringworks1887"
              >
                <p className="flex justify-center  items-center gap-3 hover:text-2xl hover:text-blue-500 hover:ease-in-out delay-100">
                  <FaYoutube className="text-2xl text-red-500" />
                </p>
              </a>
            </div>
            <div className="flex  justify-center items-center gap-2 text-xl">
              <a
                href={`https://wa.me/${918208743416}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                <p className="flex justify-center  items-center gap-3 hover:text-2xl  hover:text-blue-500 hover:ease-in-out delay-100">
                  <FaWhatsapp className="text-2xl text-green-500" />
                </p>
              </a>
            </div>
          </div>
        </div>

        <div className="right-side">
          <br />
          {/* 2ndSection */}
          <h4
            className={`${garamond.className}  + text-center p-1    text-xl  `}
          >
            Send us a message.
          </h4>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col border  justify-center items-center gap-5 py-10 px-5 my-1 rounded-lg shadow-xl max-sm:px-1"
          >
            {error && <p style={{ color: "red" }}>{error}</p>}
            {success && <p style={{ color: "green" }}>{success}</p>}
            <div className="flex justify-between flex-col gap-2 px-2 items-start w-[40vw] max-sm:w-full max-sm:flex-col">
              <label className="text-blue-500 font-semibold">Name* </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                required
                className="border border-black-100 rounded-sm w-full p-2 max-sm:w-full"
              />
            </div>
            <div className="flex flex-col justify-between gap-2 px-2 items-start w-[40vw] max-sm:w-full max-sm:flex-col ">
              <label className="text-blue-500 font-semibold">
                Contact Number*{" "}
              </label>
              <input
                type="number"
                value={contactNumber}
                placeholder="Enter your contact number"
                onChange={(e) => setContactNumber(e.target.value)}
                required
                className="border border-black-100 rounded-sm w-full p-2 max-sm:w-full"
              />
            </div>
            <div className="flex justify-between flex-col gap-2 px-2 items-start w-[40vw] max-sm:w-full max-sm:flex-col">
              <label className="text-blue-500 font-semibold">Message* </label>
              <textarea
                value={message}
                placeholder="Enter Your Message Here"
                onChange={(e) => setMessage(e.target.value)}
                required
                className="border border-black-100 rounded-sm w-full h-[30vh] p-2 max-sm:w-full"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-500 px-8 py-2 text-white rounded-sm mt-5"
            >
              Send
            </button>
          </form>
        </div>
      </div>
      <br /> <hr />
    </section>
  );
};

export default page;
