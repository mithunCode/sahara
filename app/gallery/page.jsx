/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
const raleway = Raleway({ subsets: ["latin"] });
const garamond = EB_Garamond({ subsets: ["latin"] });
import Modal from "react-modal";
import projectsData from "../../pages/api/projects"; // Adjust the import path as needed
import "../globals.css";
import { Carousel } from "react-responsive-carousel";
import { EB_Garamond, Raleway } from "next/font/google";

const Gallery = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  const openGallery = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeGallery = () => {
    setSelectedProject(null);
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
  const CustomPrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute left-0 top-1/2 transform -translate-y-1/2 p-3 w-5 py-3 bg-black bg-opacity-60  text-white rounded-full"
      style={{ zIndex: 2 }}
    >
      &#8249; {/* Unicode for left arrow */}
    </button>
  );

  const CustomNextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute right-0 top-1/2 transform -translate-y-1/2 p-3 w-5 py-3 bg-black bg-opacity-60  text-white rounded-full"
      style={{ zIndex: 2 }}
    >
      &#8250; {/* Unicode for right arrow */}
    </button>
  );

  return (
    <section
      className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 "
      style={{ backgroundColor: "#F0FFFF" }}
    >
      <div className="gallery-header relative flex items-center justify-center h-96 bg-cover bg-center">
        <h1 className="text-white text-5xl font-bold">Gallery</h1>
      </div>
      <div className="w-screen ">
        <h1>
          {" "}
          <p
            className={`${garamond.className} text-center text-xl p-8 max-md:p-2 my-4`}
          >
            Sahara Engineering Works has proven experience on a wide range of
            projects. <br />
            Every detail of these projects is the most important detail to us.{" "}
            <br />
            Browse our project gallery below to get a taste of what we can do
            for you.
          </p>
        </h1>
        <div className="thumbnails w-full flex justify-center items-center gap-96 py-10 mb-10">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="thumbnail shadow-xl rounded-md border border-slate-40 bg-slate-900 text-zinc-100"
              onClick={() => openGallery(project)}
            >
              <img
                src={`${project.images[0]}`}
                alt={`${project.name}`}
                className="thumbnail-image rounded-t-md"
              />
              <p className={`${raleway.className} py-5 px-2 font-semibold`}>
                {project.name}
              </p>
            </div>
          ))}
        </div>
        <div>
          <Modal
            isOpen={isModalOpen}
            onRequestClose={closeGallery}
            contentLabel="Project Gallery"
            style={customStyles}
          >
            {selectedProject && (
              <div className="gallery">
                <div className="flex justify-between items-center py-5 max-sm:py-16">
                  {" "}
                  <h2>{selectedProject.name}</h2>
                  <button
                    onClick={closeGallery}
                    className="bg-black py-2 m-3 rounded-md px-5 text-white"
                  >
                    Close
                  </button>
                </div>

                <Carousel
                  showArrows={true}
                  infiniteLoop={true}
                  autoPlay={true}
                  dynamicHeight={false}
                  showThumbs={false}
                  renderArrowPrev={(onClickHandler, hasPrev, label) =>
                    hasPrev && <CustomPrevArrow onClick={onClickHandler} />
                  }
                  renderArrowNext={(onClickHandler, hasNext, label) =>
                    hasNext && <CustomNextArrow onClick={onClickHandler} />
                  }
                >
                  {selectedProject.images.map((image, index) => (
                    <div key={index}>
                      <img
                        src={image}
                        alt={image}
                        className="gallery-image p-24 max-sm:px-10 object-cover max-sm:h-96"
                      />
                    </div>
                  ))}
                </Carousel>
              </div>
            )}
          </Modal>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
