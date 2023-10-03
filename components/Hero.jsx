import React from "react";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({ subsets: ["latin"], weight: "400" });

const Hero = () => {
  return (
    <main
      id="home"
      className="text-white w-full py-20 p h-[94vh] mt-[4.5rem] flex flex-col items-center bg-black"
    >
      <section className="w-fit">
        <div className="flex flex-col space-y-4">
          <h2 className={`${pacifico.className} w-fit text-4xl`}>
            <span className="text-red-500">Frontend</span> Developer.
          </h2>
          <p className=" w-80 text-sm">
            I enjoy creating robust and scalable frontend solutions that provide
            exceptional user experiences.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Hero;
