import React from "react";
import { Pacifico } from "next/font/google";
import Image from "next/image";
import { motion } from "framer-motion";

const pacifico = Pacifico({ subsets: ["latin"], weight: "400" });

const Hero = () => {
  return (
    <main
      id="home"
      className="text-black w-full  py-20 p h-[94vh] mt-[4.5rem] flex flex-col items-center sm:mt-0"
    >
      <section className="w-fit px-5 flex flex-col items-center space-y-20 sm:w-11/12 sm:flex-row sm:space-y-0 sm:space-x-20 ">
        <motion.div
          initial={{ x: -350, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col space-y-4 sm:h-full sm:w-2/4 sm:space-y-32 "
        >
          <div className="flex flex-col space-y-4 sm:h-full sm:space-y-7">
            <h2
              className={`${pacifico.className}  text-[42px] sm:text-7xl sm:w-28 sm:font-bold sm:t`}
            >
              <span className="text-red-500">Frontend</span> Developer.
            </h2>
            <p className=" text-base sm:text-lg sm:w-4/5">
              I enjoy creating robust and scalable frontend solutions that
              provide exceptional user experiences.
            </p>
          </div>
          <div className="hidden w-full sm:flex sm:justify-between">
            <motion.p
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.7, delay: 1 }}
              className="w-[45%] text-sm"
            >
              Highly skilled at progressive enhancement, design systems & UI
              Engineering.
            </motion.p>
            <motion.p
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.7, delay: 1 }}
              className="w-[45%] text-sm"
            >
              Open to work as a Frontend Developer.A web designer with knowledge
              of core design theories
            </motion.p>
          </div>
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="sm:h-full sm:w-5/12 sm:flex sm:justify-center sm:items-center"
        >
          <Image
            width={0}
            height={0}
            quality={100}
            src="/web_developer.svg"
            alt="My Picture"
            className="w-72 h-72 sm:w-[400px] sm:h-[400px]"
          />
        </motion.div>
      </section>
    </main>
  );
};

export default Hero;
