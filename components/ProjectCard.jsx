import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaEye, FaLink } from "react-icons/fa";

const ProjectCard = ({ liveDemo, sampleImg, gitRepo }) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative group"
    >
      <div>
        <Image
          src={sampleImg}
          alt={liveDemo}
          width={300}
          height={300}
          className="rounded-lg"
        />
      </div>
      <div className="w-full h-full items-center hidden justify-center space-x-10 absolute bottom-0 backdrop-filter backdrop-blur-md bg-opacity-10 bg-black rounded-lg group-hover:flex">
        <a href="">
          <FaEye className="text-2xl cursor-pointer text-gray-400 hover:scale-115 hover:text-red-400" />
        </a>

        <a href={liveDemo}>
          <FaLink className="text-2xl cursor-pointer text-gray-400 hover:scale-115  hover:text-red-400" />
        </a>
      </div>
    </motion.section>
  );
};

export default ProjectCard;
