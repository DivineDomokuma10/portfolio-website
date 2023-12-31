"use client";

import React, { useEffect, useState } from "react";
import { Pacifico } from "next/font/google";
import Image from "next/image";
import { motion } from "framer-motion";

const pacifico = Pacifico({ subsets: ["latin"], weight: "400" });

const About = () => {
  const [skill, setSkill] = useState("");
  const skills = ["Freelancer", "Frontend Developer"];
  let arrayIterationVar = 0;
  let charIterationVar = 0;
  let holder = "";
  let isComplete = false;
  let canDelete = false;

  useEffect(() => writeEffect(), []);

  // Writting Effect Algorithm
  const writeEffect = () => {
    if (arrayIterationVar < skills.length) {
      let curSkill = skills[arrayIterationVar];
      if (charIterationVar < curSkill.length && isComplete === false) {
        holder += curSkill[charIterationVar];
        setSkill(skill + holder);
        charIterationVar++;
        if (charIterationVar === curSkill.length) {
          isComplete = true;
          canDelete = true;
        }
      } else if (charIterationVar !== 0 && canDelete === true) {
        holder = holder.slice(0, charIterationVar - 2);
        setSkill(skill + holder);
        charIterationVar--;
      } else {
        isComplete = false;
        canDelete = false;
        arrayIterationVar++;
      }
    } else {
      arrayIterationVar = 0;
    }
    setTimeout(() => writeEffect(), 350);
  };

  return (
    <main
      id="about"
      className="text-teal-50 w-full p-5 flex flex-col space-y-20 items-center justify-center sm:w-11/12"
    >
      <div className="flex flex-col items-center space-y-2">
        <h2
          className={`${pacifico.className}  text-2xl sm:text-4xl sm:font-bold`}
        >
          Hello, <span className="text-red-500">Divine Domokuma</span> here.
        </h2>

        <h4 className="text-center text-xl">
          I&#39;m a <span className="text-red-500">{skill}</span>.
        </h4>
      </div>
      <div className="flex flex-col items-center space-y-5">
        <section className="flex flex-col items-center space-y-4 sm:flex-row sm:justify-between sm:space-y-0">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col space-y-2 sm:w-5/12 sm:space-y-7"
          >
            <h2
              className={`${pacifico.className}  text-red-500 text-xl sm:text-5xl sm:font-semibold`}
            >
              Frontend Developer
            </h2>
            <p className="text-teal-50 text-base sm:text-lg">
              I&#39;m a passionate Frontend Developer with experience in
              crafting, creation and building user-centered web products. I
              thrive on the exciting journey of turning creative ideas into
              functional, beautiful, robust and intuitive digital solution.
            </p>
          </motion.div>

          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="/About-Us.svg"
              alt="frontend pics"
              width={0}
              height={0}
              className="w-72 h-72 sm:w-[400px] sm:h-[400px]"
            />
          </motion.div>
        </section>
        <section className="flex flex-col items-center space-y-10 sm:flex-row-reverse sm:justify-between sm:space-y-0">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col space-y-2 sm:w-5/12 sm:space-y-7"
          >
            <h2
              className={`${pacifico.className}  text-red-500 text-xl sm:text-5xl sm:font-semibold`}
            >
              React Developer
            </h2>
            <p className="text-teal-50 text-base sm:text-lg">
              I&#39;m a Skilled React Developer with Knowledge of Core react
              concepts necessary for building scalable applications, and i am
              also grounded with related web tools in the React Ecosystem.
            </p>
          </motion.div>

          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="/react.svg"
              alt="frontend pics"
              width={0}
              height={0}
              className="w-72 h-72 sm:w-[350px] sm:h-[350px]"
            />
          </motion.div>
        </section>
      </div>
    </main>
  );
};

export default About;
