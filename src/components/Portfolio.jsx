import React from "react";
import portfolio from "../assets/img/portfolio.png";
import todo from "../assets/img/todo.jpg";
import pokemon from "../assets/img/pokemon.png";
import bmi from "../assets/img/BMI.jpg";
import movie from "../assets/img/movie.jpg";
import skripsi from "../assets/img/skripsi.jpg";

const Portfolio = () => {
  return (
    <section className="w-full">
      <h1 className="text-lg font-bold text-slate-700">Portfolio</h1>
      <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div className="bg-sky-400 rounded-lg aspect-[5/2.8] col-span-2 sm:col-span-1">
          <div className="w-full h-full bg-white rounded-lg shadow-md shadow-black overflow-hidden flex flex-col">
            <div
              className="w-full flex-grow bg-cover bg-top"
              style={{ backgroundImage: `url(${skripsi})`, flexBasis: "50%" }}
            ></div>
            <div className=" flex flex-col justify-between mt-1 px-2 py-2">
              <h1 className="text-xs font-bold text-slate-700 sm:text-sm">
                Portal Magang Berbasis Website
              </h1>
              <h2 className="text-xs font-medium text-slate-600 sm:text-sm">
                React JS, Node JS, Express JS, & MySql
              </h2>
            </div>
          </div>
        </div>
        <div className="bg-sky-400 rounded-lg aspect-[5/2.8] col-span-2 sm:col-span-1">
          <div className="w-full h-full bg-white rounded-lg shadow-md shadow-black overflow-hidden flex flex-col">
            <div
              className="w-full flex-grow bg-cover bg-top"
              style={{ backgroundImage: `url(${portfolio})`, flexBasis: "50%" }}
            ></div>
            <div className=" flex flex-col justify-between mt-1 px-2 py-2">
              <h1 className="text-xs font-bold text-slate-700 sm:text-sm">
                Portfolio Website
              </h1>
              <h2 className="text-xs font-medium text-slate-600 sm:text-sm">
                React JS & Tailwindcss
              </h2>
            </div>
          </div>
        </div>
        <div className="bg-sky-400 rounded-lg aspect-[5/2.8] col-span-2 sm:col-span-1">
          <div className="w-full h-full bg-white rounded-lg shadow-md shadow-black overflow-hidden flex flex-col">
            <div
              className="w-full flex-grow bg-cover bg-top"
              style={{ backgroundImage: `url(${todo})`, flexBasis: "50%" }}
            ></div>
            <div className=" flex flex-col justify-between mt-1 px-2 py-2">
              <h1 className="text-xs font-bold text-slate-700 sm:text-sm">
                Todo List Application
              </h1>
              <h2 className="text-xs font-medium text-slate-600 sm:text-sm">
                React JS, Bootstrap, & Redux Toolkit
              </h2>
            </div>
          </div>
        </div>
        <div className="bg-sky-400 rounded-lg aspect-[5/2.8] col-span-2 sm:col-span-1">
          <div className="w-full h-full bg-white rounded-lg shadow-md shadow-black overflow-hidden flex flex-col">
            <div
              className="w-full flex-grow bg-cover bg-top"
              style={{ backgroundImage: `url(${pokemon})`, flexBasis: "50%" }}
            ></div>
            <div className=" flex flex-col justify-between mt-1 px-2 py-2">
              <h1 className="text-xs font-bold text-slate-700 sm:text-sm">
                Pokemon Website
              </h1>
              <h2 className="text-xs font-medium text-slate-600 sm:text-sm">
                React JS
              </h2>
            </div>
          </div>
        </div>
        <div className="bg-sky-400 rounded-lg aspect-[5/2.8] col-span-2 sm:col-span-1">
          <div className="w-full h-full bg-white rounded-lg shadow-md shadow-black overflow-hidden flex flex-col">
            <div
              className="w-full flex-grow bg-cover bg-top"
              style={{ backgroundImage: `url(${bmi})`, flexBasis: "50%" }}
            ></div>
            <div className=" flex flex-col justify-between mt-1 px-2 py-2">
              <h1 className="text-xs font-bold text-slate-700 sm:text-sm">
                BMI Calculator
              </h1>
              <h2 className="text-xs font-medium text-slate-600 sm:text-sm">
                HTML, CSS, & Javascript
              </h2>
            </div>
          </div>
        </div>
        <div className="bg-sky-400 rounded-lg aspect-[5/2.8] col-span-2 sm:col-span-1">
          <div className="w-full h-full bg-white rounded-lg shadow-md shadow-black overflow-hidden flex flex-col">
            <div
              className="w-full flex-grow bg-cover bg-top"
              style={{ backgroundImage: `url(${movie})`, flexBasis: "50%" }}
            ></div>
            <div className=" flex flex-col justify-between mt-1 px-2 py-2">
              <h1 className="text-xs font-bold text-slate-700 sm:text-sm">
                Movie App
              </h1>
              <h2 className="text-xs font-medium text-slate-600 sm:text-sm">
                HTML, CSS, & Javascript
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
