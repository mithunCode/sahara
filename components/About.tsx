/* eslint-disable react/no-unescaped-entities */
import { Raleway } from "next/font/google";
import Image from "next/image";
import React from "react";

const raleway = Raleway({ subsets: ["latin"] });
const About = () => {
  return (
    <section className=" bg-gray-50 transition-opacity	 relative w-screen flex justify-end h-screen  items-center py-1">
      <p
        className={`${raleway.className}  + text-md w-[60%] z-10 bg-white  rounded-md shadow-xl absolute mr-[35%] p-10 backdrop-blur-sm`}
      >
        "SAHARA ENGINEERING WORKS is peoples company which are into CONSTRUCTION
        AND INTERIORS services.SAHARA means to serve (sahara-helping hand) the
        people with best quality of work in less budget.Sahara will never
        compromise with the quality of work as our Engineers integrity wont
        allow to do so,we take construction and interiors projects ranging from
        (20 lacs - 3 crore).We have 25+ Manpower and we handle 4+ projects at a
        time.Sahara is Located at Margao Goa and we take work geographical in
        Goa location We are contracting services company for residential and
        commercial buildings.We makes your dream house looks beautiful. sahara
        undertakes civil construction , Electrical ,Plumbing , Flooring , False
        ceiling , Fabrication ,Furniture, painting work"
      </p>
      <div className="bg-[url('/bg.png')] hover:scale-125  ease-in-out transition-transform w-[70%] h-[500px] flex justify-end items-end">
        <p className="mx-10 my-10 mr-36 ease-in-out text-5xl font-bold">
          OUR STORY.
        </p>
      </div>
    </section>
  );
};

export default About;
