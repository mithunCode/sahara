"use client";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { EB_Garamond, Raleway } from "next/font/google";
const raleway = Raleway({ subsets: ["latin"] });
const garamond = EB_Garamond({ subsets: ["latin"] });
const projects = [
  {
    title: "Civil Construction",
    description:
      " Civil construction right from Designing perfect layout , 3D model , construction to final handover",
    link: "/services.jpg",
  },
  {
    title: "Electrical Work",
    description:
      "All kinds of electrical work example laying of cables , Installation of panel , installation of light fixtures, other appliances etc.",
    link: "/services.jpg",
  },
  {
    title: "Fabrication Work",
    description:
      "We  provide MS, GI , SS etc and all kind of fabrication work like Cupboard , Railing , steps , roof , gate , partition ,parking etc",
    link: "https://google.com",
  },
  {
    title: "Aluminium/Glass/Door Work",
    description:
      "Installation and repair of all kinds of aluminum/glass work like windows, partition , roof work , sliding doors , GMP doors etc",
    link: "https://meta.com",
  },
  {
    title: "Flooring Work",
    description:
      "Sahara engineering works include tiling work , Granite work ,Kota , kadappa, Epoxy work and  all kind of flooring work",
    link: "https://amazon.com",
  },
  {
    title: "Plumbing Work",
    description: "Installation and repair of all sorts of plumbing work ",
    link: "https://microsoft.com",
  },
  {
    title: "Wall Partition / False Ceiling Design",
    description:
      "Sahara engineers provide  different types of wall partition / False Ceilings which includes - Gypsum Board , Hilux board , MR board, Wooden Ceiling, PVC Ceiling, V board.",
    link: "https://microsoft.com",
  },
  {
    title: "Furnitures",
    description:
      "Modern Furnitures designs that will go great with any modern or western decor. Furnitures choose earthier elements such as wood, natural wood veneers and warmer metals. For the colour palette select warm neutrals to create an inviting and cosy feeling. The lines of the cabinet need to be elegant and fuss free, making for an inviting space that is uncluttered and calm.",
    link: "https://microsoft.com",
  },
  {
    title: "Modular Kitchen",
    description:
      "Modular Kitchen is a term used for the modern kitchen furniture layout consisting of modules of cabinets made of diversified materials which hold accessories inside, several modules in a row starting from drawers to cabinets, shelves, racks, kitchen counters, etc.",
    link: "https://microsoft.com",
  },
  {
    title: "Painting",
    description:
      "We have Commercial  & Residential Painters near you for all types of painting services like Interior , Exterior , Texture - (Royal play ,stucco , antico ) ,Multicolour art , Stencil , 3D wall painting. We also design and provide wall papers.",
    link: "https://microsoft.com",
  },
];

export default function ServicePage() {
  return (
    <section className="relative   flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className=" bg-[url('/services.jpg')]  backdrop-blur-xl   bg-cover bg-bottom w-screen h-96  text-center flex justify-center items-center text-5xl   ">
        <p
          className={`${raleway.className}  + font-bold opacity-100   relative text-white`}
        >
          Our Services.
        </p>
      </div>
      <h4 className={`${garamond.className}  + text-xl m-4 mt-10 `}>
        Sahara engineers are involved in complete Civil construction right from
        Designing perfet layout , 3D model , construction to final handover.
      </h4>
      <div className="px-10">
        <HoverEffect items={projects} />
      </div>
    </section>
  );
}
