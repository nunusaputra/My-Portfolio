import React, { useState } from "react";
import hero from "../assets/img/hero.png";
import { MdOutlineCalendarMonth, MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline, IoPhonePortraitOutline } from "react-icons/io5";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Modal from "../fragments/Modal";

const email = "nunusaputra17@gmail.com";
const phone = "083815499134";
const birthdate = "16 November 2001";
const location = "Karawang, Indonesia";

const Sidebar = () => {
  return (
    <div className="w-full h-16 bg-white shadow-lg shadow-black rounded-lg flex justify-between lg:w-1/4 lg:h-screen lg:overflow-auto lg:sticky lg:top-0 lg:block overflow-hidden">
      <div className="flex flex-wrap px-2 gap-3 lg:hidden">
        <div className="w-10 h-10 bg-black mt-3 rounded-md">
          <img src={hero} alt="" className="w-full rounded-md" />
        </div>
        <div className="self-center">
          <h1 className="text-sm font-bold text-slate-700">Wisnu Saputra</h1>
          <h2 className="text-xs font-semibold text-slate-700">
            Full Stack Developer
          </h2>
        </div>
      </div>
      <div className="self-center px-5 py-2 bg-violet-500 rounded-lg mr-2 text-white text-sm font-bold shadow-sm shadow-black cursor-pointer lg:hidden">
        <button
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          Detail
        </button>
        {/* <Modal open={open} setOpen={setOpen} /> */}
      </div>

      {/* Modal */}
      <Modal click={"my_modal_1"} />

      {/* Sidebar 1024px */}
      <div className="hidden lg:block lg:w-full lg:px-2 lg:pt-10">
        <div className="lg:flex lg:flex-col lg:justify-center lg:items-center">
          <div className="lg:w-44 lg:h-44 lg:bg-white lg:shadow-xl lg:shadow-slate-400 lg:rounded-lg lg:mx-auto lg:relative group lg:hover:scale-95 lg:transition-all lg:duration-500 lg:cursor-pointer lg:overflow-hidden">
            <img
              src={hero}
              alt=""
              className="lg:w-full lg:bg-cover lg:absolute lg:group-hover:scale-125 lg:group-hover:rotate-3 lg:transition-all lg:duration-500"
            />
          </div>
          <div className="lg:mt-7">
            <h2 className="lg:text-2xl lg:font-bold lg:text-slate-900 lg:tracking-wide lg:text-center">
              Wisnu Saputra
            </h2>
            <div className="lg:py-2 lg:bg-slate-300 lg:mt-2 lg:rounded-lg lg:shadow-sm lg:shadow-slate-500">
              <h2 className="lg:text-sm lg:font-semibold lg:text-slate-700 lg:text-center">
                Full Stack Developer
              </h2>
            </div>
            <hr className="lg:mt-10 lg:border-top-4 lg:border-slate-500" />
            <div className="lg:mt-3">
              <div className="lg:flex lg:flex-col">
                <a href="mailto:nunusaputra17@gmail.com">
                  <div className="lg:flex lg:gap-2 lg:py-2">
                    <div className="lg:w-10 lg:h-10 lg:bg-slate-300 lg:border-1 lg:shadow-sm lg:shadow-slate-400 lg:flex lg:items-center lg:rounded-lg">
                      <MdOutlineEmail className="lg:mx-auto lg:text-xl lg:text-black" />
                    </div>
                    <div className="">
                      <h1 className="lg:font-semibold lg:text-slate-600">
                        Email
                      </h1>
                      <h1 className="lg:-mt-1 lg:font-medium lg:text-slate-500">
                        {email.substring(0, 15)}...
                      </h1>
                    </div>
                  </div>
                </a>
                <a href="https://wa.me/083815499134" target="_blank">
                  <div className="lg:flex lg:gap-2 lg:py-2">
                    <div className="lg:w-10 lg:h-10 lg:bg-slate-300 lg:border-1 lg:shadow-sm lg:shadow-slate-400 lg:flex lg:items-center lg:rounded-lg">
                      <IoPhonePortraitOutline className="lg:mx-auto lg:text-xl lg:text-black" />
                    </div>
                    <div className="">
                      <h1 className="lg:font-semibold lg:text-slate-600">
                        Phone
                      </h1>
                      <h1 className="lg:-mt-1 lg:font-medium lg:text-slate-500">
                        {phone}
                      </h1>
                    </div>
                  </div>
                </a>
                <div className="lg:flex lg:gap-2 lg:py-2">
                  <div className="lg:w-10 lg:h-10 lg:bg-slate-300 lg:border-1 lg:shadow-sm lg:shadow-slate-400 lg:flex lg:items-center lg:rounded-lg">
                    <MdOutlineCalendarMonth className="lg:mx-auto lg:text-xl lg:text-black" />
                  </div>
                  <div className="">
                    <h1 className="lg:font-semibold lg:text-slate-600">
                      Birthdate
                    </h1>
                    <h1 className="lg:-mt-1 lg:font-medium lg:text-slate-500">
                      {birthdate}
                    </h1>
                  </div>
                </div>
                <div className="lg:flex lg:gap-2 lg:py-2">
                  <div className="lg:w-10 lg:h-10 lg:bg-slate-300 lg:border-1 lg:shadow-sm lg:shadow-slate-400 lg:flex lg:items-center lg:rounded-lg">
                    <IoLocationOutline className="lg:mx-auto lg:text-xl lg:text-black" />
                  </div>
                  <div className="">
                    <h1 className="lg:font-semibold lg:text-slate-600">
                      Alamat
                    </h1>
                    <h1 className="lg:-mt-1 lg:font-medium lg:text-slate-500">
                      {location}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:flex lg:mt-10 lg:justify-between">
              <a
                href="https://www.instagram.com/wisnu_sapt/?hl=en"
                target="_blank"
              >
                <FaInstagram className="lg:text-xl lg:text-black lg:cursor-pointer lg:hover:scale-125 lg:hover:rotate-6 lg:transition-all lg:duration-300 lg:hover:text-pink-500" />
              </a>
              <a href="https://github.com/nunusaputra" target="_blank">
                <FaGithub className="lg:text-xl lg:text-black lg:cursor-pointer lg:hover:scale-125 lg:hover:rotate-6 lg:transition-all lg:duration-300 lg:hover:text-slate-700" />
              </a>
              <a href="https://wa.me/083815499134" target="_blank">
                <FaWhatsapp className="lg:text-xl lg:text-black lg:cursor-pointer lg:hover:scale-125 lg:hover:rotate-6 lg:transition-all lg:duration-300 lg:hover:text-green-600" />
              </a>
              <a
                href="https://www.linkedin.com/in/wisnu-saputra-a61068247/"
                target="_blank"
              >
                <FaLinkedin className="lg:text-xl lg:text-black lg:cursor-pointer lg:hover:scale-125 lg:hover:rotate-6 lg:transition-all lg:duration-300 lg:hover:text-blue-600" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
