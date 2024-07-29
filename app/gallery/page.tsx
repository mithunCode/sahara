/* eslint-disable @next/next/no-img-element */
"use client";
import { EB_Garamond, Raleway } from "next/font/google";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";

const raleway = Raleway({ subsets: ["latin"] });
const garamond = EB_Garamond({ subsets: ["latin"] });
export default function Home() {
  return (
    <main className="relative   flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className=" bg-[url('/galleryBg.png')]   bg-cover bg-bottom w-screen h-96  text-center flex justify-center items-center text-5xl   ">
        <p
          className={`${raleway.className}  + font-bold opacity-100   relative text-white`}
        >
          Gallery.
        </p>
      </div>
      <div className="flex justify-center flex-col items-center  w-full p-10">
        <p
          className={`${garamond.className} + text-center text-xl p-8 max-md:p-2 my-4  `}
        >
          Sahara Engineering Works has proven experience on a wide range of
          projects. <br />
          Every detail of these projects is the most important detail to us.{" "}
          <br />
          Browse our project gallery below to get a taste of what we can do for
          you.
        </p>
        <Carousel
          showArrows={true}
          // onChange={onChange}
          // onClickItem={onClickItem}
          // onClickThumb={onClickThumb}
          verticalSwipe="natural"
          autoPlay
          showThumbs={true}
          className="w-[700px] max-sm:w-[400px] bg-slate-100"
        >
          <div>
            <img
              width={50}
              height={50}
              alt="Image1"
              src="/galleryImages/1.jpg"
            />
          </div>
          <div>
            <img
              width={50}
              height={50}
              alt="Image2"
              src="/galleryImages/2.jpg"
            />
          </div>
          <div>
            <img
              width={50}
              height={50}
              alt="Image3"
              src="/galleryImages/3.jpg"
            />
          </div>
          <div>
            <img
              width={50}
              height={50}
              alt="Image4"
              src="/galleryImages/4.jpg"
            />
          </div>
          <div>
            <img
              width={50}
              height={50}
              alt="Image5"
              src="/galleryImages/5.jpg"
            />
          </div>
          <div>
            <img
              width={50}
              height={50}
              alt="Image18"
              src="/galleryImages/18.jpg"
            />
          </div>
          <div>
            <img
              width={50}
              height={50}
              className=""
              alt="Image7"
              src="/galleryImages/7.jpg"
            />
          </div>
          <div>
            <img
              width={50}
              height={50}
              alt="Image8"
              src="/galleryImages/8.jpg"
            />
          </div>
          <div>
            <img
              width={50}
              height={50}
              alt="Image17"
              src="/galleryImages/17.jpg"
            />
          </div>
          <div>
            <img
              width={50}
              height={50}
              alt="Image10"
              src="/galleryImages/10.jpg"
            />
          </div>
          <div>
            <img
              width={50}
              height={50}
              alt="Image11"
              src="/galleryImages/11.jpg"
            />
          </div>
          <div>
            <img
              width={50}
              height={50}
              alt="Image12"
              src="/galleryImages/12.jpg"
            />
          </div>
          <div>
            <img
              width={50}
              height={50}
              alt="Image13"
              src="/galleryImages/13.jpg"
            />
          </div>
          <div>
            <img
              width={50}
              height={50}
              alt="Image14"
              src="/galleryImages/14.jpg"
            />
          </div>
          <div>
            <img
              width={50}
              height={50}
              alt="Image15"
              src="/galleryImages/15.jpg"
            />
          </div>
          <div>
            <img
              width={50}
              height={50}
              alt="Image16"
              src="/galleryImages/16.jpg"
            />
          </div>
        </Carousel>
      </div>
    </main>
  );
}
