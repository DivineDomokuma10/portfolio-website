"use client";
import Projects from "@/utils/projects";
import React, { useState } from "react";

const Project = () => {
  const [filterBy, setFilterBy] = useState("All");

  const [filters, setFilters] = useState([
    { id: 1, text: "All", active: true },
    { id: 2, text: "React.js", active: false },
    { id: 3, text: "Next.js", active: false },
    { id: 4, text: "React Native", active: false },
    { id: 5, text: "Ui/Ux", active: false },
  ]);

  const handleFilter = (filterId, filterText) => {
    const filtered = filters.map((filter) => {
      if (filter.id === filterId) return { ...filter, active: true };
      else return { ...filter, active: false };
    });

    setFilters(filtered);

    setFilterBy(filterText);
    console.log(filterText);
  };

  return (
    <main
      id="project"
      className="w-full p-3 flex flex-col space-y-10 items-center justify-center sm:w-11/12"
    >
      <h1 className="text-[26.5px] sm:text-4xl sm:font-bold">
        Portfolio and Projects
      </h1>
      <section className="flex flex-wrap justify-center">
        {filters.map((filter) => (
          <span
            key={filter.id}
            onClick={() => handleFilter(filter.id, filter.text)}
            className={`py-2 px-4 m-2 mx-3 transition rounded-md text-semibold cursor-pointer ${
              filter.active ? "bg-red-500 text-teal-50" : "bg-gray-200"
            } hover:scale-110`}
          >
            {filter.text}
          </span>
        ))}
      </section>
      <section className="text-teal-50">
        {filterBy === "All"
          ? Projects.map((project) => (
              <div key={project.id}>{project.liveDemo}</div>
            ))
          : Projects.filter((filter) => filter.projectType === filterBy).map(
              (project) => <div key={project.id}>{project.liveDemo}</div>
            )}
      </section>
    </main>
  );
};

export default Project;
