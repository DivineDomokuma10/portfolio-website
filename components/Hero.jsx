import React from "react";
import { Pacifico } from "next/font/google";
import Image from "next/image";
import { motion } from "framer-motion";

const pacifico = Pacifico({ subsets: ["latin"], weight: "400" });

const Hero = () => {
  return (
    <main
      id="home"
      className="text-white w-full  py-20 p h-[94vh] mt-[4.5rem] flex flex-col items-center bg-black sm:mt-0"
    >
      <section className="w-fit px-5 flex flex-col items-center space-y-20">
        <motion.div
          initial={{ x: -350, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col space-y-4"
        >
          <h2 className={`${pacifico.className}  text-[42px]`}>
            <span className="text-red-500 text-[42px]">Frontend</span>{" "}
            Developer.
          </h2>
          <p className=" text-lg">
            I enjoy creating robust and scalable frontend solutions that provide
            exceptional user experiences.
          </p>
        </motion.div>
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            width={300}
            height={300}
            quality={100}
            src="/web_developer.svg"
            alt="My Picture"
            className="rounded-md"
          />
        </motion.span>
      </section>
    </main>
  );
};

export default Hero;
