import Skills from "@/utils/skills";
import { Pacifico } from "next/font/google";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const pacifico = Pacifico({ subsets: ["latin"], weight: "400" });

const Stack = () => {
  return (
    <main
      id="stack"
      className="h-fit text-black flex flex-col space-y-10 items-center py-0"
    >
      <h1 className={`${pacifico.className}  text-3xl text-red-600`}>
        Skill and Experience
      </h1>
      <section className="grid grid-cols-2 col space-x-8 space-y-5 px-5">
        {Skills.map((skill) => (
          <motion.div
            key={skill.id}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1 }}
            className="flex items-center justify-center p-2 rounded-full"
          >
            <Image
              width={85}
              height={85}
              alt={skill.text}
              src={skill.image}
              className="transition-all cursor-pointer hover:scale-125"
            />
          </motion.div>
        ))}
      </section>
    </main>
  );
};

export default Stack;
