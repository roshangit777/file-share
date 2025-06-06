import React from "react";
import Constant from "../_utils/Constant";

const Hero = () => {
  return (
    <section className="bg-gray-50" id="hero">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            <span className="text-primary">Upload, Save</span> and easily{" "}
            <span className="text-primary">Share</span> your files in one place
          </h1>

          <p className="mt-4 sm:text-2xl/relaxed text-gray-500">
            {Constant.desc}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded-sm bg-blue-600 px-12 py-3 text-lg font-semibold text-white shadow-sm hover:bg-blue-700 focus:ring-3 focus:outline-hidden sm:w-auto"
              href="/upload"
            >
              Get Started
            </a>

            <a
              className="block w-full rounded-sm px-12 py-3 text-lg font-semibold text-blue-600 shadow-sm hover:text-blue-700 focus:ring-3 focus:outline-hidden sm:w-auto"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
