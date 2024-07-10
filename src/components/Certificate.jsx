import React from "react";
import nus from "../assets/img/nus.jpg";
import web from "../assets/img/web.jpg";
import react from "../assets/img/react.jpg";
import stupen from "../assets/img/stupen.jpg";
import unbk from "../assets/img/unbk.jpeg";
import bnsp from "../assets/img/bnsp.jpeg";
import git from "../assets/img/git.jpg";
import magang from "../assets/img/magang.jpg";
import toefl from "../assets/img/toefl.jpg";

const Certificate = () => {
  return (
    <section className="w-full">
      <h1 className="text-lg font-bold text-slate-700">Certificate</h1>
      <div className="mt-3 grid grid-cols-2 gap-3">
        <div className="bg-sky-300 aspect-[4/3] rounded-lg">
          <div className="w-full h-full rounded-lg bg-white shadow-md shadow-black overflow-hidden">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${nus})` }}
            ></div>
          </div>
        </div>
        <div className="bg-sky-300 aspect-[4/3] rounded-lg">
          <div className="w-full h-full rounded-lg bg-white shadow-md shadow-black overflow-hidden">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${web})` }}
            ></div>
          </div>
        </div>
        <div className="bg-sky-300 aspect-[4/3] rounded-lg">
          <div className="w-full h-full rounded-lg bg-white shadow-md shadow-black overflow-hidden">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${react})` }}
            ></div>
          </div>
        </div>
        <div className="bg-sky-300 aspect-[4/3] rounded-lg">
          <div className="w-full h-full rounded-lg bg-white shadow-md shadow-black overflow-hidden">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${stupen})` }}
            ></div>
          </div>
        </div>
        <div className="bg-sky-300 aspect-[4/3] rounded-lg">
          <div className="w-full h-full rounded-lg bg-white shadow-md shadow-black overflow-hidden">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${git})` }}
            ></div>
          </div>
        </div>
        <div className="bg-sky-300 aspect-[4/3] rounded-lg">
          <div className="w-full h-full rounded-lg bg-white shadow-md shadow-black overflow-hidden">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${toefl})` }}
            ></div>
          </div>
        </div>
        <div className="bg-sky-300 aspect-[4/3] rounded-lg">
          <div className="w-full h-full rounded-lg bg-white shadow-md shadow-black overflow-hidden">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${magang})` }}
            ></div>
          </div>
        </div>
        <div className="bg-sky-300 aspect-[4/3] rounded-lg">
          <div className="w-full h-full rounded-lg bg-white shadow-md shadow-black overflow-hidden">
            <div
              className="w-full h-full bg-cover bg-top"
              style={{ backgroundImage: `url(${bnsp})` }}
            ></div>
          </div>
        </div>
        <div className="bg-sky-300 aspect-[4/3] rounded-lg">
          <div className="w-full h-full rounded-lg bg-white shadow-md shadow-black overflow-hidden">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${unbk})` }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificate;
