"use client";

import { Spotlight } from "../components/ui/Spotlight";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import { EB_Garamond, Raleway } from "next/font/google";
import Image from "next/image";

import { motion } from "framer-motion";
import { AuroraBackground } from "./ui/aurora-background";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { FaHandPointRight } from "react-icons/fa6";
const raleway = Raleway({ subsets: ["latin"] });
const garamond = EB_Garamond({ subsets: ["latin"] });
const testimonials = [
  {
    quote:
      "Sahara engineering works is very professional , they did my house interiors includes designed false ceiling , lights and painting . All works professionally and most important they keep area clean once work is done . I had chose designs from google and perfectly executed as per my house area. thanks for all time support and  great finish work as per timeline  before Christmas. Thank you Bro❤️✨",
    name: "Denzil Fernandes",
    title: "Quality, Professionalism, Value",
  },
  {
    quote:
      "Many People tried unique designs for my Hall but Sahara engineering prefer to be more creative, so POP designs for my Hall now looks incredible with less cost as compared to others  , yet outstanding ideas. Worth for money . Playing with brighten led light and paint colours against the sober white gypsum false background of the Pop material and it assured to bring an interesting character to the my Hall and expectation successfully completed .",
    name: "Nagraj Godi",
  },

  {
    quote:
      "They just completed a shade work over my building just recently. The shade will help from rain leakage from the roof. I had researched a lot of  businesss to finally choose them. Believe me, the work that they did was beyond my expectations and in the time limit i had set for them. Best was even though, i was a pain of complaints and suggestions. They were very patient and completely satisfied my queries, very professionally, and also taking into account my ideas and suggestions. Two words for thier service par excellence.. i would recommend every Goan to work with them in thier projects if they want proffesional work and value for thier money...just want to say. Thank you for a Superb Job guys.",
    name: "Alvin Fernandes",
  },

  {
    quote:
      "Sahara team will explain clearly everything about the construction work . 24 hour available to solve the ongoing problem while working . Responsive , professional, less cost budgeted plan . They showed me the actual 3D model of my house and happy to work with them .",
    name: "BALIRAM THOMBRE",
    title: "Responsiveness, Professionalism",
  },
  {
    quote:
      "I had given my 1st floor work to Sahara and right from drawing till final execution of work done professionally.  Contractor are themselves engineers so it's very easy to work with them professionally.",
    name: "Reetesh N.",
    title: "Responsiveness, Professionalism",
  },
  {
    quote:
      "Modular kitchen work was perfectly done and completed thanku Sahara engineering .All the materials and sunmaica was of good quality",
    name: "BIBHUTI BHUSAN LENKA",
    title: "Responsiveness, Professionalism",
  },
  {
    quote:
      "Good work of my bunglow tiles and kitchen granite work. Happy to work with sahara and thanku for making it look better.",
    name: "Soumya Barik",
    title: "Responsiveness, Punctuality, Quality, Professionalism, Value",
  },
  {
    quote:
      "Good painting of my house interior and exterior. On time as per commitment.",
    name: "Ashish kumar samanta",
    title: "Punctuality",
  },
];
const Hero = () => {
  return (
    <section className="">
      <div className=" h-screen  bg-[url('/bgmain.jpg')]  bg-transparent bg-cover px-10 pt-10 max-sm:w-[96] ">
        <div>
          <Spotlight
            className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
            fill="white"
          />
          <Spotlight
            className="h-[80vh] w-[50vw] top-10 left-full"
            fill="purple"
          />
          <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
        </div>

        <div
          className="h-screen w-screen dark:bg-black-100 dark:bg-grid-white/[0.03] 
       absolute top-0 left-0 bottom-0  backdrop-blur-sm"
        ></div>

        <div className="flex justify-center items-center relative  z-10 h-screen ">
          <div className="md:max-w-2xl lg:max-w-[99vw] flex flex-col items-center justify-center">
            <TextGenerateEffect
              words="SAHARA ENGINEERING WORKS"
              className={`${raleway.className}  + font-extrabold   md:text-3xl lg:text-7xl  max-sm:break-words max-sm:w-screen max-sm:text-5xl max-sm:text-center max-sm:leading-[60px] `}
            />

            <TextGenerateEffect
              words=" We Connect . You Grow"
              className={`${raleway.className}  +
               mt-7 md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl max-sm:text-2xl`}
            />
          </div>
        </div>
      </div>
      <div className=" flex flex-col items-center justify-center">
        <h4 className={`${garamond.className}  + font-semibold text-3xl`}>
          Our Story.
        </h4>
        <p
          className={`${garamond.className}  + text-xl text-center p-10 max-sm:text-md max-sm:p-2 w-screen`}
        >
          SAHARA ENGINEERING WORKS is peoples company which are into
          construction and interiors services.
          <br></br>
          Sahara means to serve (sahara-helping hand) the people with best
          quality of work in less budget.<br></br>
          Sahara will never compromise with the quality of work as our Engineers
          integrity wont allow to do so,<br></br>we take construction and
          interiors projects ranging from (20 lacs - 3 crore).<br></br>We have
          25+ Manpower and we handle 4+ projects at a time.Sahara is Located at
          Margao Goa and we take work geographical in Goa location<br></br> We
          are contracting services company for residential and commercial
          buildings.<br></br>We makes your dream house looks beautiful. sahara
          undertakes civil construction ,<br></br> Electrical ,Plumbing ,
          Flooring , False ceiling , Fabrication ,Furniture & Painting work.
        </p>
        <div className="flex justify-center items-center gap-10">
          <a
            href="/contact"
            className="bg-black text-white dark:text-white flex items-center space-x-2 border border-black-200 px-4 py-2 mb-4 shadow-md rounded-lg hover:bg-slate-100 hover:text-slate-800 hover:border-blue-300 max-sm:m-4"
          >
            Contact Us -&gt;
          </a>
        </div>

        <Image
          src="/heropage.jpg"
          width={500}
          height={500}
          alt="construction"
          className="flex justify-center items-center  "
        />
        <hr className="  h-2 w-full m-4 p-4 text-black" />
        <h4 className={`${garamond.className}  + font-semibold text-3xl p-4`}>
          Why Choose Us..?
        </h4>
        <p
          className={`${garamond.className}  + text-xl text-center font-semibold p-4 w-screen`}
        >
          We go beyond the ordinary to exceed your expectations , ensuring that
          every detail is meticulously crafted to perfection.
        </p>
        <ul
          className={`${garamond.className}  + text-lg  p-5 flex flex-col gap-10 mb-2  w-screen max-sm:items-start max-sm:px-10`}
        >
          <li className="flex items-center justify-center gap-2">
            <FaHandPointRight /> Begin with a Mindset of Gratitude
          </li>

          <li className="flex items-center justify-center gap-2">
            <FaHandPointRight />
            Meet Expectations, Then Work Hard to Exceed Expectations
          </li>
          <li className="flex items-center justify-center gap-2">
            <FaHandPointRight />
            Deliver Effective Open and Honest Communication
          </li>
          <li className="flex items-center justify-center gap-2">
            <FaHandPointRight />
            Client Centric Approach
          </li>
          <li className="flex items-center justify-center gap-2">
            <FaHandPointRight />
            Quality and Safety
          </li>
          <li className="flex items-center justify-center gap-2">
            <FaHandPointRight />
            Innovative Solutions
          </li>
        </ul>
        <a
          href="/services "
          className="bg-black text-white dark:text-white flex items-center space-x-2 border border-black-200 px-4 py-2 mb-4 shadow-md rounded-lg hover:bg-slate-100 hover:text-slate-800 hover:border-blue-300"
        >
          Our Services -&gt;
        </a>
        <hr className="  h-2 w-full m-4 p-4 text-black" />
        <h4 className={`${garamond.className}  + font-semibold text-3xl pb-8`}>
          What Our Clients Are Saying..
        </h4>

        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </section>
  );
};

export default Hero;
