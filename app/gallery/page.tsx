/* eslint-disable @next/next/no-img-element */
"use client";
import { EB_Garamond, Raleway } from "next/font/google";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { SetStateAction, useState } from "react";
import { Carousel } from "react-responsive-carousel";

const raleway = Raleway({ subsets: ["latin"] });
const garamond = EB_Garamond({ subsets: ["latin"] });

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/galleryImages/1.jpg",
    "/galleryImages/2.jpg",
    "/galleryImages/3.jpg",
    "/galleryImages/4.jpg",
    "/galleryImages/5.jpg",
    "/galleryImages/18.jpg",
    "/galleryImages/7.jpg",
    "/galleryImages/8.jpg",
    "/galleryImages/17.jpg",
    "/galleryImages/10.jpg",
    "/galleryImages/11.jpg",
    "/galleryImages/12.jpg",
    "/galleryImages/13.jpg",
    "/galleryImages/14.jpg",
    "/galleryImages/15.jpg",
    "/galleryImages/16.jpg",
  ];

  const openModal = (index: SetStateAction<number>) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const showPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  const CustomPrevArrow = ({ onClick }: any) => (
    <button
      onClick={onClick}
      className="absolute left-0 top-1/2 transform -translate-y-1/2 p-3 bg-black bg-opacity-60  text-white rounded-full"
      style={{ zIndex: 2 }}
    >
      &#8249; {/* Unicode for left arrow */}
    </button>
  );

  const CustomNextArrow = ({ onClick }: any) => (
    <button
      onClick={onClick}
      className="absolute right-0 top-1/2 transform -translate-y-1/2 p-3 bg-black bg-opacity-60  text-white rounded-full"
      style={{ zIndex: 2 }}
    >
      &#8250; {/* Unicode for right arrow */}
    </button>
  );

  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="bg-[url('/galleryBg.png')] bg-cover bg-bottom w-screen h-96 text-center flex justify-center items-center text-5xl">
        <p
          className={`${raleway.className} font-bold opacity-100 relative text-white`}
        >
          Gallery.
        </p>
      </div>
      <div className="flex justify-center flex-col items-center w-full p-10">
        <p
          className={`${garamond.className} text-center text-xl p-8 max-md:p-2 my-4`}
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
          autoPlay={!isModalOpen}
          showThumbs={true}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && <CustomPrevArrow onClick={onClickHandler} />
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && <CustomNextArrow onClick={onClickHandler} />
          }
          className="w-[700px] max-sm:w-[400px] bg-slate-100 text-center "
        >
          {images.map((src, index) => (
            <div key={index} onClick={() => openModal(index)}>
              <img
                width={50}
                height={50}
                alt={`Image${index + 1}`}
                src={src}
                className="cursor-pointer"
              />
            </div>
          ))}
        </Carousel>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm">
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded"
            onClick={showPreviousImage}
          >
            &lt;
          </button>
          <img
            className="max-w-full max-h-full p-2 cursor-pointer"
            src={images[currentImageIndex]}
            alt={`FullImage${currentImageIndex + 1}`}
          />
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded"
            onClick={showNextImage}
          >
            &gt;
          </button>
          <button
            className="absolute top-4 right-4 bg-white text-black p-2 rounded"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      )}
    </main>
  );
}
