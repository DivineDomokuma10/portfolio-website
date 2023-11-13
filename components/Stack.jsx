import Skills from "@/utils/skills";
import { Pacifico } from "next/font/google";
import Image from "next/image";
import React from "react";

const pacifico = Pacifico({ subsets: ["latin"], weight: "400" });

const Stack = () => {
  return (
    <main
      id="stack"
      className="w-full text-black flex flex-col space-y-10 items-center"
    >
      <h1 className="text-[26.5px] text-red-500 sm:text-4xl sm:font-bold">
        Skill Set
      </h1>
      <section className="grid grid-cols-2 col space-x-8 space-y-5 px-5 md:grid-cols-6">
        {Skills.map((skill) => (
          <div
            key={skill.id}
            className="flex items-center justify-center p-2 rounded-full"
          >
            <Image
              width={90}
              height={90}
              alt={skill.text}
              src={skill.image}
              className="transition-all cursor-pointer hover:scale-125"
            />
          </div>
        ))}
      </section>
    </main>
  );
};

export default Stack;
