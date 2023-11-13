"use client";
import Projects from "@/utils/projects";
import React, { useState } from "react";
import ProjectTab from "./ProjectTab";
import ProjectCard from "./ProjectCard";

const Project = () => {
  const [filterBy, setFilterBy] = useState("All");

  const [filters, setFilters] = useState([
    { id: 1, text: "All", active: true },
    { id: 2, text: "React.js", active: false },
    { id: 3, text: "Next.js", active: false },
  ]);

  const handleFilter = (filterId, filterText) => {
    const filtered = filters.map((filter) => {
      if (filter.id === filterId) return { ...filter, active: true };
      else return { ...filter, active: false };
    });

    setFilters(filtered);
    setFilterBy(filterText);
  };

  return (
    <main
      id="project"
      className="w-full py-10 px-3 flex flex-col space-y-7 items-center justify-center sm:w-11/12"
    >
      <h1 className="text-[26.5px] text-red-500 sm:text-4xl sm:font-bold">
        Portfolio and Projects
      </h1>
      <section className="flex flex-wrap justify-center">
        {filters.map((filter) => (
          <ProjectTab
            key={filter.id}
            handleFilter={handleFilter}
            filterId={filter.id}
            filterText={filter.text}
            filterActive={filter.active}
          />
        ))}
      </section>
      <section className="w-full items-center text-teal-50 flex flex-col space-y-10 md:grid md:grid-cols-3 md:pl-16">
        {filterBy === "All"
          ? Projects.map((project) => (
              <ProjectCard
                key={project.id}
                liveDemo={project.liveDemo}
                sampleImg={project.samlpeImg}
              />
            ))
          : Projects.filter((filter) => filter.projectType === filterBy).map(
              (project) => (
                <ProjectCard
                  key={project.id}
                  liveDemo={project.liveDemo}
                  sampleImg={project.samlpeImg}
                />
              )
            )}
      </section>
    </main>
  );
};

export default Project;
