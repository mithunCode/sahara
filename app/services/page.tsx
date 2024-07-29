import { HoverEffect } from "@/components/ui/card-hover-effect";
import { EB_Garamond, Raleway } from "next/font/google";
const raleway = Raleway({ subsets: ["latin"] });
const garamond = EB_Garamond({ subsets: ["latin"] });
const projects = [
  {
    id: 1,
    title: "Civil Construction",
    description:
      " Civil construction right from Designing perfect layout , 3D model , construction to final handover",
    link: "/serviceImages/civil.jpg",
  },
  {
    id: 2,
    title: "Electrical Work",
    description:
      "All kinds of electrical work example laying of cables , Installation of panel , installation of light fixtures, other appliances etc.",
    link: "/serviceImages/electrician.jpg",
  },
  {
    id: 3,
    title: "Fabrication Work",
    description:
      "We  provide MS, GI , SS etc and all kind of fabrication work like Cupboard , Railing , steps , roof , gate , partition ,parking etc",
    link: "/serviceImages/fabrication.jpg",
  },
  {
    id: 4,
    title: "Aluminium/Glass/Door Work",
    description:
      "Installation and repair of all kinds of aluminum/glass work like windows, partition , roof work , sliding doors , GMP doors etc",
    link: "/serviceImages/glass.jpg",
  },
  {
    id: 5,
    title: "Flooring Work",
    description:
      "Sahara engineering works include tiling work , Granite work ,Kota , kadappa, Epoxy work and  all kind of flooring work",
    link: "/serviceImages/flooring.jpg",
  },
  {
    id: 6,
    title: "Plumbing Work",
    description: "Installation and repair of all sorts of plumbing work ",
    link: "/serviceImages/plumbing.jpg",
  },
  {
    id: 7,
    title: "Wall Partition / False Ceiling Design",
    description:
      "Sahara engineers provide  different types of wall partition / False Ceilings which includes - Gypsum Board , Hilux board , MR board, Wooden Ceiling, PVC Ceiling, V board.",
    link: "/serviceImages/ceiling.jpeg",
  },
  {
    id: 8,
    title: "Furnitures",
    description:
      "Modern Furnitures designs that will go great with any modern or western decor. Furnitures choose earthier elements such as wood, natural wood veneers and warmer metals. For the colour palette select warm neutrals to create an inviting and cosy feeling. The lines of the cabinet need to be elegant and fuss free, making for an inviting space that is uncluttered and calm.",
    link: "/serviceImages/furniture.jpg",
  },
  {
    id: 9,
    title: "Modular Kitchen",
    description:
      "Modular Kitchen is a term used for the modern kitchen furniture layout consisting of modules of cabinets made of diversified materials which hold accessories inside, several modules in a row starting from drawers to cabinets, shelves, racks, kitchen counters, etc.",
    link: "/serviceImages/kitchen.jpg",
  },
  {
    id: 10,
    title: "Painting",
    description:
      "We have Commercial  & Residential Painters near you for all types of painting services like Interior , Exterior , Texture - (Royal play ,stucco , antico ) ,Multicolour art , Stencil , 3D wall painting. We also design and provide wall papers.",
    link: "/serviceImages/painting.jpeg",
  },
];

export default function ServicePage() {
  return (
    <section className="relative   flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className=" bg-[url('/services.jpg')]  backdrop-blur-xl   bg-cover bg-center w-screen h-96  text-center flex justify-center items-center text-5xl   ">
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
      <div className="px-4">
        <HoverEffect items={projects} />
      </div>
    </section>
  );
}
