import React from "react";
import { skillset } from "../assets/data/skill";

const Skills = () => {
  return (
    <section className="mb-5">
      <h1 className="text-lg font-bold text-slate-700 sm:text-xl">Skills</h1>
      <div className="flex flex-wrap justify-center gap-3 mt-2">
        {skillset.map((item) => (
          <div
            className="flex gap-2 items-center px-4 py-2 bg-marble rounded-lg shadow-md shadow-slate-400"
            key={item.id}
          >
            {item.icon}
            <h1 className="text-sm font-semibold text-slate-700">
              {item.name}
            </h1>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
