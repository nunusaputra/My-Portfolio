import React from "react";
import sd from "../assets/img/sd.jpg";
import smp from "../assets/img/smp.jpg";
import sma from "../assets/img/sma.jpg";
import unsika from "../assets/img/unsika.jpg";
import msib from "../assets/img/msib.jpg";

const Education = () => {
  return (
    <section className="mb-5 lg:mb-10">
      <h1 className="text-lg font-bold text-slate-700 sm:text-xl">Education</h1>
      <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* SD */}
        <div className="bg-sky-400 rounded-lg aspect-[5/2.5] col-span-2 sm:col-span-1 ">
          <div className="w-full h-full bg-white rounded-lg shadow-md shadow-black overflow-hidden flex flex-col">
            <div
              className="w-full flex-grow bg-cover bg-center"
              style={{ backgroundImage: `url(${sd})`, flexBasis: "50%" }}
            ></div>
            <div className="flex flex-col mt-1 px-2 py-2">
              <h1 className="text-xs font-bold text-slate-700 sm:text-sm">
                SDN Sukamenak 5
              </h1>
              <h2 className="text-xs font-medium text-slate-600 sm:text-sm">
                Bandung
              </h2>
            </div>
          </div>
        </div>

        {/* SMP */}
        <div className="bg-sky-400 rounded-lg aspect-[5/2.5] col-span-2 sm:col-span-1">
          <div className="w-full h-full bg-white rounded-lg shadow-md shadow-black overflow-hidden flex flex-col">
            <div
              className="w-full flex-grow bg-cover bg-center"
              style={{ backgroundImage: `url(${smp})`, flexBasis: "50%" }}
            ></div>
            <div className="flex flex-col mt-1 px-2 py-2">
              <h1 className="text-xs font-bold text-slate-700 sm:text-sm">
                SMPN 2 Dayeuhkolot
              </h1>
              <h2 className="text-xs font-medium text-slate-600 sm:text-sm">
                Bandung
              </h2>
            </div>
          </div>
        </div>

        {/* SMA */}
        <div className="bg-sky-400 rounded-lg aspect-[5/2.5] col-span-2 sm:col-span-1">
          <div className="w-full h-full bg-white rounded-lg shadow-md shadow-black overflow-hidden flex flex-col">
            <div
              className="w-full flex-grow bg-cover bg-center"
              style={{ backgroundImage: `url(${sma})`, flexBasis: "50%" }}
            ></div>
            <div className="flex flex-col mt-1 px-2 py-2">
              <h1 className="text-xs font-bold text-slate-700 sm:text-sm">
                SMKN 1 Rengasdengklok
              </h1>
              <h2 className="text-xs font-medium text-slate-600 sm:text-sm">
                Karawang
              </h2>
            </div>
          </div>
        </div>

        {/* MSIB */}
        <div className="bg-sky-400 rounded-lg aspect-[5/2.5] col-span-2 sm:col-span-1">
          <div className="w-full h-full bg-white rounded-lg shadow-md shadow-black overflow-hidden flex flex-col">
            <div
              className="w-full flex-grow bg-cover bg-center"
              style={{ backgroundImage: `url(${msib})`, flexBasis: "50%" }}
            ></div>
            <div className="flex flex-col mt-1 px-2 py-2">
              <h1 className="text-xs font-bold text-slate-700 sm:text-sm">
                Skilvul (MSIB Batch 3)
              </h1>
              <h2 className="text-xs font-medium text-slate-600 sm:text-sm">
                Studi Independent
              </h2>
            </div>
          </div>
        </div>

        {/* Kuliah */}
        <div className="bg-sky-400 rounded-lg aspect-[5/2.5] sm:aspect-[5/1.21] col-span-2 sm:col-start-1 sm:row-start-2">
          <div className="w-full h-full bg-white rounded-lg shadow-md shadow-black overflow-hidden flex flex-col">
            <div
              className="w-full flex-grow sm:h-28 bg-cover bg-center"
              style={{ backgroundImage: `url(${unsika})`, flexBasis: "50%" }}
            ></div>
            <div className="flex flex-col mt-1 px-2 py-2">
              <h1 className="text-xs font-bold text-slate-700 sm:text-sm">
                Universitas Singaperbangsa Karawang
              </h1>
              <h2 className="text-xs font-medium text-slate-600 sm:text-sm">
                Karawang
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
