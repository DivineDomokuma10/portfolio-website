import React, { useEffect, useState } from "react";
import { Pacifico } from "next/font/google";
import Image from "next/image";
import { motion } from "framer-motion";

const pacifico = Pacifico({ subsets: ["latin"], weight: "400" });

const About = () => {
  const [skill, setSkill] = useState("");
  const skills = ["Freelancer.", "Frontend Developer."];
  let i = 0;
  let e = 0;
  let holder = "";
  let isComplete = false;
  let canDelete = false;
  useEffect(() => writeEffect(), []);

  // Writting Effect Algorithm
  const writeEffect = () => {
    const test = (text) => setSkill(skill + text);
    if (i < skills.length) {
      let curSkill = skills[i];
      if (e < curSkill.length && isComplete === false) {
        holder += curSkill[e];
        test(holder);
        e++;
        if (e === curSkill.length) {
          isComplete = true;
          canDelete = true;
        }
      } else if (e !== 0 && canDelete === true) {
        holder = holder.slice(0, e - 2);
        test(holder);
        e--;
      } else {
        isComplete = false;
        canDelete = false;
        i++;
      }
    } else {
      i = 0;
    }
    setTimeout(() => writeEffect(), 250);
  };

  return (
    <main
      id="about"
      className="text-white w-full p-5 flex flex-col space-y-32 items-center justify-center "
    >
      <section>
        <div>
          <h2 className="text-[28px]">
            Hello,{" "}
            <span className={`${pacifico.className}  text-red-500`}>
              Divine Domokuma
            </span>{" "}
            here
          </h2>
        </div>

        <p>Hi, I&#39;m a span{skill}</p>
      </section>
    </main>
  );
};

export default About;
