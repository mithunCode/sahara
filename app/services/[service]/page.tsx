/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { EB_Garamond, Raleway } from "next/font/google";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
const raleway = Raleway({ subsets: ["latin"] });
const garamond = EB_Garamond({ subsets: ["latin"] });
const projects = [
  {
    id: 1,
    title: "Civil Construction",
    description:
      " Civil construction right from Designing perfect layout , 3D model , construction to final handover",
    link: "/serviceImages/civil.jpg",
    cost: "XXX",
  },
  {
    id: 2,
    title: "Electrical Work",
    description:
      "All kinds of electrical work example laying of cables , Installation of panel , installation of light fixtures, other appliances etc.",
    link: "/serviceImages/electrician.jpg",
    cost: "XXX",
  },
  {
    id: 3,
    title: "Fabrication Work",
    description:
      "We  provide MS, GI , SS etc and all kind of fabrication work like Cupboard , Railing , steps , roof , gate , partition ,parking etc",
    link: "/serviceImages/fabrication.jpg",
    cost: "XXX",
  },
  {
    id: 4,
    title: "Aluminium/Glass/Door Work",
    description:
      "Installation and repair of all kinds of aluminum/glass work like windows, partition , roof work , sliding doors , GMP doors etc",
    link: "/serviceImages/glass.jpg",
    cost: "XXX",
  },

  {
    id: 5,
    title: "Flooring Work",
    description:
      "Sahara engineering works include tiling work , Granite work ,Kota , kadappa, Epoxy work and  all kind of flooring work",
    link: "/serviceImages/flooring.jpg",
    cost: "XXX",
  },
  {
    id: 6,
    title: "Plumbing Work",
    description: "Installation and repair of all sorts of plumbing work ",
    link: "/serviceImages/plumbing.jpg",
    cost: "XXX",
  },
  {
    id: 7,
    title: "Wall Partition / False Ceiling Design",
    description:
      "Sahara engineers provide  different types of wall partition / False Ceilings which includes - Gypsum Board , Hilux board , MR board, Wooden Ceiling, PVC Ceiling, V board.",
    link: "/serviceImages/ceiling.jpeg",
    cost: "XXX",
  },
  {
    id: 8,
    title: "Furnitures",
    description:
      "Modern Furnitures designs that will go great with any modern or western decor. Furnitures choose earthier elements such as wood, natural wood veneers and warmer metals. For the colour palette select warm neutrals to create an inviting and cosy feeling. The lines of the cabinet need to be elegant and fuss free, making for an inviting space that is uncluttered and calm.",
    link: "/serviceImages/furniture.jpg ",
    cost: "XXX",
  },
  {
    id: 9,
    title: "Modular Kitchen",
    description:
      "Modular Kitchen is a term used for the modern kitchen furniture layout consisting of modules of cabinets made of diversified materials which hold accessories inside, several modules in a row starting from drawers to cabinets, shelves, racks, kitchen counters, etc.",
    link: "/serviceImages/kitchen.jpg",
    cost: "XXX",
  },
  {
    id: 10,
    title: "Painting",
    description:
      "We have Commercial  & Residential Painters near you for all types of painting services like Interior , Exterior , Texture - (Royal play ,stucco , antico ) ,Multicolour art , Stencil , 3D wall painting. We also design and provide wall papers.",
    link: "/serviceImages/painting.jpeg ",
    cost: "XXX",
  },
  {
    id: 11,
    title: "Building Renovation",
    description:
      "We specialize in bringing new life to old structures through our comprehensive building renovation services. Whether it's a residential home, commercial property, or historical building, our expert team is dedicated to enhancing the functionality, aesthetic appeal, and value of your property.",
    link: "/serviceImages/renovation.jpg",
    cost: "XXX",
  },
  {
    id: 12,
    title: "Building Maintenance",
    description:
      "Maintaining the integrity and functionality of your property is essential for its long-term performance and value. At Sahara Engineering Works, we offer a full suite of building maintenance services designed to keep your residential, commercial, or industrial property in peak condition.",
    link: "/serviceImages/maintenance.jpg",
    cost: "XXX",
  },
  {
    id: 13,
    title: "Architectural Design",
    description:
      " Our architectural design services are dedicated to transforming your vision into reality with creativity, precision, and expertise. Whether you're planning a residential home, commercial building, or public space, our team of skilled architects and designers is here to bring your project to life.",
    link: "/serviceImages/design.jpg",
    cost: "XXX",
  },
];

const page = () => {
  let { service } = useParams() as any;

  let [priceToShow, setPriceToShow] = useState() as any;

  if (!service) {
    return <p>Loading...</p>;
  }

  useEffect(() => {
    console.log(service);
    projects.map((item: any) => item.id == service && setPriceToShow(item));
  }, [service]);
  console.log(priceToShow);
  return (
    <section className=" overflow-hidden">
      <div className=" bg-[url('/pricing.jpg')]  backdrop-blur-xl   bg-cover bg-bottom w-screen h-96  text-center flex justify-center items-center text-5xl   ">
        <p
          className={`${raleway.className}  + font-bold opacity-100   relative text-white`}
        >
          Estimation.
        </p>
      </div>
      {priceToShow ? (
        /* {projects.map((item) => {
        return ( */
        <div className="flex justify-center items-center my-10 px-10">
          <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow lg:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 ">
            <Image
              className="w-full rounded-t-lg rounded-b-lg  "
              src={priceToShow?.link}
              alt="Image"
              width={600}
              height={600}
            />
            <div className="w-full flex flex-col justify-between p-4 gap-4 leading-normal">
              <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                {priceToShow?.title}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {priceToShow?.description}
              </p>
              <div className="flex flex-col items-start gap-5 py-10 justify-between max-lg:flex-row">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  RS.{priceToShow?.cost}
                </span>
                <a
                  href="/contact"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Contact Now
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="space-y-8 px-10 my-10 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center">
            <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
              <svg
                className="w-10 h-10 text-gray-200 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18"
              >
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
              </svg>
            </div>
            <div className="w-full">
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
            </div>
            <span className="sr-only">Loading...</span>
          </div>
        </>
      )}

      {/* })} */}
      {/* <div className="flex justify-center items-center my-10 px-10">
        <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow lg:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 ">
          <Image
            className="w-full rounded-t-lg rounded-b-lg  "
            src={projects[0].link}
            alt="Image"
            width={600}
            height={600}
          />
          <div className="w-full flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {projects[0].title}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {projects[0].description}
            </p>
            <div className="flex flex-col items-start gap-5 py-10 justify-between max-lg:flex-row">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                Rs.XXX
              </span>
              <a
                href="/contact"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Contact Now
              </a>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default page;
