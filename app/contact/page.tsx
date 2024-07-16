import { EB_Garamond, Raleway } from "next/font/google";
import { BiLocationPlus } from "react-icons/bi";
import { BsCursorFill } from "react-icons/bs";
import { FaInstagram, FaLocationPin } from "react-icons/fa6";
import { HiCursorClick } from "react-icons/hi";
import { MdCall, MdEmail } from "react-icons/md";
import { RiCursorFill, RiInputCursorMove } from "react-icons/ri";
const raleway = Raleway({ subsets: ["latin"] });
const garamond = EB_Garamond({ subsets: ["latin"] });
const page = () => {
  return (
    <section className="relative   flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className=" bg-[url('/contact.jpg')]  backdrop-blur-xl   bg-cover bg-bottom w-screen h-96  text-center flex justify-center items-center text-5xl   ">
        <p
          className={`${raleway.className}  + font-bold opacity-100   relative text-white`}
        >
          Contact Us.
        </p>
      </div>
      <h4 className={`${garamond.className}  + text-xl text-center m-4 mt-10 `}>
        We&apos;d love to hear from you. <br />
        Please contact us with any questions you may have.
        <br /> <hr className="shadow-xl  h-2 m-4" />
        <div className="flex justify-center max-md:text-2xl items-center text-center  gap-1 my-5 shadow-md py-5 text-3xl">
          <MdEmail className="mt-1" /> <p>: saharaenzineers@gmail.com</p>
        </div>
        <hr className="shadow-xl  h-2 m-4" />
        <div className="flex justify-around max-md:flex-col shadow-lg p-2 rounded-md items-center my-5 text-3xl hover:bg-slate-100 hover:delay-100 ease-in-out">
          <div className="flex justify-start items-center gap-1 my-5 text-3xl">
            {" "}
            <MdCall className="mt-1" /> :
            <p>
              8208743416 <br /> 9763133132 <br />
              8007567652
            </p>
          </div>
        </div>
        <hr />
        <div className="flex flex-col justify-start mt-10 shadow-lg p-2 rounded-md  items-center gap-1 py-10 hover:bg-slate-100 hover:delay-100 ease-in-out">
          <div className="flex justify-center items-center gap-1">
            Address
            <FaLocationPin className="mt-1" />
          </div>{" "}
          <p className="text-center text-3xl">
            200/6/B Saccubhat per seraulium colva SERAULIM, <br /> Madgaon, Goa
            403708.
          </p>
        </div>
        <br /> <hr />
        <div className="my-10 text-center shadow-lg p-2 rounded-md py-10 hover:bg-slate-100 hover:delay-100 ease-in-out">
          <div className="flex justify-center items-center gap-2">
            {" "}
            Follow us on <FaInstagram />
          </div>

          <a
            target="_blank"
            href="https://www.instagram.com/sahara_engineering_works?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          >
            <div className="flex justify-center items-center gap-1 text-xl">
              <p className="text-3xl">sahara_engineering_works</p>{" "}
              <RiCursorFill className="animate-ping duration-1000" />
            </div>
          </a>
        </div>
      </h4>{" "}
      <hr />
      <div className="px-10"></div>
    </section>
  );
};

export default page;
