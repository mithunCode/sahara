/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client";

import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import { RevealOnScroll } from "../components/RevealOnScroll";
import { EB_Garamond, Raleway } from "next/font/google";
import Image from "next/image";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { FaHandPointRight } from "react-icons/fa6";
import { Carousel } from "react-responsive-carousel";
import { useState } from "react";
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
    title: "",
  },

  {
    quote:
      "They just completed a shade work over my building just recently. The shade will help from rain leakage from the roof. I had researched a lot of  businesss to finally choose them. Believe me, the work that they did was beyond my expectations and in the time limit i had set for them. Best was even though, i was a pain of complaints and suggestions. They were very patient and completely satisfied my queries, very professionally, and also taking into account my ideas and suggestions. Two words for thier service par excellence.. i would recommend every Goan to work with them in thier projects if they want proffesional work and value for thier money...just want to say. Thank you for a Superb Job guys.",
    name: "Alvin Fernandes",
    title: "",
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
const images = [
  "/homepage/bg.jpg",
  "/homepage/sl2.jpg",
  "/galleryImages/7.jpg",
  "/galleryImages/16.jpg",
];

const Testimonial = ({ testimonial }: any) => {
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => setIsReadMore(!isReadMore);

  return (
    <div
      className="flex flex-col justify-between bg-opacity-90 p-8 w-full rounded-lg shadow-lg text-center h-96 max-sm:h-72 "
      style={{
        background:
          "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
      }}
    >
      <div></div>
      <p className="text-xs italic mb-4 px-4 pr-8 text-gray-100 sm:hidden">
        "{" "}
        {isReadMore
          ? `${testimonial.quote.slice(0, 200)}...`
          : testimonial.quote}{" "}
        "
      </p>
      <p className="text-lg italic mb-4 px-4 pr-8 text-gray-100 max-sm:hidden">
        "{testimonial.quote} "
      </p>
      {testimonial.quote.length > 150 && (
        <button
          onClick={toggleReadMore}
          className="text-blue-500 underline focus:outline-none sm:hidden max-sm:text-xs z-50"
        >
          {isReadMore ? "Read More" : "Show Less"}
        </button>
      )}
      <div>
        {" "}
        <p className="font-bold mt-4 max-sm:text-sm text-gray-400">
          {testimonial.name}
        </p>
        {testimonial.title && (
          <p className="text-gray-500 max-sm:text-xs">{testimonial.title}</p>
        )}
      </div>
    </div>
  );
};
const Hero = () => {
  const CustomPrevArrow = ({ onClick }: any) => (
    <button
      onClick={onClick}
      className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-black bg-opacity-50 text-white rounded-full z-10"
    >
      &#8249;
    </button>
  );

  const CustomNextArrow = ({ onClick }: any) => (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-black bg-opacity-50 text-white rounded-full z-10"
    >
      &#8250;
    </button>
  );
  return (
    <section className="">
      <main className="relative flex justify-center items-center h-screen overflow-hidden">
        <Carousel
          showArrows={false}
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          autoPlay
          interval={3000}
          transitionTime={1000}
          className="absolute inset-0 z-0 w-full h-full"
        >
          {images.map((src, index) => (
            <div key={index} className="w-full h-full">
              <img
                className="w-full h-full object-cover"
                src={src}
                alt={`Background ${index + 1}`}
              />
            </div>
          ))}
        </Carousel>
        <div className="absolute inset-0 bg-black bg-opacity-50 z-8"></div>
        <div className="relative z-10 px-1 mt-36 text-center w-screen flex flex-col justify-around h-screen ">
          <div></div>
          <div>
            <TextGenerateEffect
              words="Sahara Engineering Works"
              className={`${raleway.className} text-yellow-300 drop-shadow-lg tracking-wide leading-tight  break-words text-wrap text-6xl font-bold mb-4`}
            ></TextGenerateEffect>
            <TextGenerateEffect
              words=" We Connect . You Grow"
              className="text-yellow-500 text-2xl max-w-2xl mx-auto mb-4 font-normal bg-black-100/40 w-fit p-2 rounded-lg mt-6 max-sm:text-xl"
            ></TextGenerateEffect>
          </div>

          <p className="text-gray-300 text-md px-2 max-w-2xl mx-auto mb-24">
            Proven experience on a wide range of projects. Every detail of these
            projects is the most important detail to us.
          </p>
        </div>
      </main>
      <hr className="  h-2 w-full m-4 p-4 text-black" />
      <h4
        className={`${garamond.className}  + font-semibold text-4xl text-center mb-2 mt-4`}
      >
        Our Story.
      </h4>
      <div className=" flex flex-col items-center justify-center  shadow-xl">
        <RevealOnScroll>
          <div className="flex justify-around  w-screen items-center gap-2 max-md:flex-col max-md:w-screen px-8  bg-blue-50">
            <div className="flex flex-col gap-8 px-16 justify-around items-start">
              <p
                className={`${garamond.className}  + text-xl text-left  tracking-wide max-sm:text-md max-sm:p-4  max-md:w-screen max-md:text-center rounded-lg p-5 mt-8 `}
              >
                Welcome to SAHARA Engineering Works, where people come first. As
                a trusted construction and interior services company in Goa,
                we're dedicated to supporting our clients every step of the way.
                Our name 'SAHARA' represents our promise to deliver top-notch
                quality work within reasonable budgets, ensuring your vision
                becomes a reality. With a talented team of 25+ skilled
                professionals, we expertly manage multiple projects
                simultaneously, never compromising on excellence. Our commitment
                to reliability, client satisfaction, and exceptional
                craftsmanship makes us the go-to choice for those seeking
                superior construction solutions. <br></br>
                <br></br>
                From enhancing residential spaces to commercial complexes and
                industrial projects, SAHARA tailors our expertise to meet the
                unique needs of every project. We pride ourselves on:
                <br></br>- Unparalleled craftsmanship <br></br> - Service
                excellence<br></br> - Personalized solutions<br></br> - Timely
                delivery <br></br>- Reasonable budgets<br></br>
                <br></br> At SAHARA, we're more than just a construction company
                – we're your partners in building your dreams. Let us help you
                create spaces that inspire and thrive."
              </p>
              <div className="flex justify-center items-center gap-10"></div>
            </div>

            <Image
              src="/homepage/about.jpg"
              width={500}
              height={100}
              alt="construction"
              className="flex justify-center bg-cover items-center rounded-lg shadow-xl m-2 "
            />
          </div>
        </RevealOnScroll>
        <a
          href="/contact"
          className="bg-black mt-4 text-white dark:text-white flex items-center space-x-2 border border-black-200 px-4 py-2 mb-4 shadow-md rounded-lg hover:bg-slate-100 hover:text-slate-800 hover:border-blue-300 max-sm:m-4"
        >
          Contact Us -&gt;
        </a>

        <hr className="  h-2 w-full m-4 p-4 text-black" />

        <h4
          className={`${garamond.className}  + font-semibold text-4xl py-3 w-full text-center bg-yellow-50`}
        >
          Why Choose Us..?
        </h4>
        <p
          className={`${garamond.className}  + text-xl bg-yellow-50 text-wrap break-words w-screen text-center  font-semibold p-2 py-8 `}
        >
          At [Sahara Engineering Works], we pride ourselves on our commitment to
          excellence, integrity, and customer satisfaction. Here's what sets us
          apart:
        </p>
        <RevealOnScroll>
          <div className="flex justify-around items-start gap-6 max-md:flex-col-reverse w-screen px-16 max-sm:px-1 py-4 bg-yellow-50">
            <div className="flex flex-col justify-center items-center gap-8 w-screen p-2">
              <Image
                src="/homepage/whymain.jpg"
                width={600}
                height={100}
                alt="construction"
                className="flex justify-center items-center mr-2  rounded-xl"
              />
              <p className="my-5">
                By choosing [Sahara Engineering Works], you can trust that your
                project is in good hands. Contact us today to discuss your
                construction needs!
              </p>
              <a
                href="/services "
                className="bg-black w-fit  text-white dark:text-white flex items-center space-x-2 border border-black-200 mx-8 px-4 py-2  shadow-md rounded-lg  hover:bg-slate-100 hover:text-slate-800 hover:border-blue-300"
              >
                Our Services -&gt;
              </a>
            </div>

            <div className=" flex flex-col text-black-700  rounded-lg    max-md:w-screen justify-center items-center ">
              <ul
                className={`${garamond.className}  + tracking-wide text-lg  p-2 pb-10  flex flex-col items-start gap-5 mb-2   max-sm:items-start max-sm:px-2`}
              >
                <li className="flex items-center justify-center gap-2">
                  <FaHandPointRight />
                  <p>
                    {" "}
                    <b>Experience:</b> With [10+] years of experience in the
                    construction industry, our team has the expertise to handle
                    any project, big or small.
                  </p>{" "}
                </li>
                <li className="flex items-center justify-center gap-2">
                  <FaHandPointRight />
                  <p>
                    <b>Quality:</b> We use only the highest-quality materials
                    and latest technologies to ensure our projects meet the
                    highest standards.
                  </p>{" "}
                </li>
                <li className="flex items-center justify-center gap-2">
                  <FaHandPointRight />
                  <p>
                    <b>Safety:</b> Safety is our top priority. Our team is
                    trained to follow strict safety protocols to ensure a secure
                    working environment.
                  </p>{" "}
                </li>
                <li className="flex items-center justify-center gap-2">
                  <FaHandPointRight />
                  <p>
                    <b>Customer Service:</b> We listen to our clients' needs and
                    work closely with them to deliver personalized solutions.
                  </p>{" "}
                </li>
                <li className="flex items-center justify-center gap-2">
                  <FaHandPointRight />
                  <p>
                    <b>Innovation:</b> We stay up-to-date with the latest
                    industry trends and innovations to provide cutting-edge
                    solutions.
                  </p>{" "}
                </li>
                <li className="flex items-center justify-center gap-2">
                  <FaHandPointRight />
                  <p>
                    <b>Reliability:</b> We deliver projects onu time, within
                    budget, and to the highest quality standards.
                  </p>{" "}
                </li>
                <li className="flex items-center justify-center gap-2">
                  <FaHandPointRight />
                  <p>
                    <b>Sustainability:</b> We prioritize sustainable practices
                    to minimize our environmental footprint.
                  </p>{" "}
                </li>{" "}
                <li className="flex items-center justify-center gap-2">
                  <FaHandPointRight />
                  <p>
                    <b>Certifications:</b> We hold [certifications/licenses] to
                    ensure our work meets regulatory standards.
                  </p>{" "}
                </li>{" "}
                <li className="flex items-center justify-center gap-2">
                  <FaHandPointRight />
                  <p>
                    <b>Testimonials:</b> Our clients rave about our work. Check
                    out our testimonials to see what they say!
                  </p>{" "}
                </li>
              </ul>
            </div>
          </div>
        </RevealOnScroll>

        <hr className="  h-2 w-full m-4 p-4 text-black" />
        <h4 className={`${garamond.className}  + font-semibold text-3xl `}>
          What Our Clients Are Saying..
        </h4>

        {/* <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        /> */}
        <section className="relative z-20 mt-2 w-full max-w-4xl mx-auto px-4 mb-10 max-sm:w-screen max-sm:h-full">
          <div className="relative z-20 mt-12 w-full max-w-4xl mx-auto px-4">
            <Carousel
              showArrows={true}
              showThumbs={false}
              infiniteLoop
              autoPlay
              interval={5000}
              transitionTime={1000}
              renderArrowPrev={(onClickHandler, hasPrev, label) =>
                hasPrev && <CustomPrevArrow onClick={onClickHandler} />
              }
              renderArrowNext={(onClickHandler, hasNext, label) =>
                hasNext && <CustomNextArrow onClick={onClickHandler} />
              }
              className="w-full"
            >
              {testimonials.map((testimonial, index) => (
                <Testimonial key={index} testimonial={testimonial} />
              ))}
            </Carousel>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Hero;
