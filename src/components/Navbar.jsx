import React from "react";
import { IoMdPerson } from "react-icons/io";
import { MdOutlineContactMail } from "react-icons/md";
import { RiSlideshowLine } from "react-icons/ri";
import { TbCertificate } from "react-icons/tb";

const Navbar = ({ set }) => {
  return (
    <nav className="w-[80%] flex py-3.5 px-2 justify-between h-14 bg-violet-400 shadow-lg shadow-black rounded-lg fixed bottom-2 sm:w-full sm:top-0 sm:sticky sm:z-50 sm:py-4 sm:px-8 sm:h-14 sm:shadow-none sm:border-b-2 sm:bg-white">
      <h1 className="text-lg font-bold text-white sm:text-violet-500 sm:text-xl">Nuuu</h1>
      <ul className="flex items-center gap-4">
        <li className="hidden sm:block sm:text-violet-400 sm:text-[15px] sm:font-bold underline-hover cursor-pointer relative sm:hover:font-bold" onClick={() => set("about")}>About</li>
        <li
          className="text-lg w-8 h-8 bg-white flex rounded-lg shadow-sm shadow-black sm:hidden"
          onClick={() => set("about")}
        >
          <IoMdPerson className="mx-auto self-center text-black" />
        </li>
        <li className="hidden sm:block sm:text-violet-400 sm:text-[15px] sm:font-bold underline-hover cursor-pointer relative sm:hover:font-bold" onClick={() => set("certificate")}>Certificate</li>
        <li
          className="text-lg w-8 h-8 bg-white flex rounded-lg shadow-sm shadow-black sm:hidden"
          onClick={() => set("certificate")}
        >
          <TbCertificate className="mx-auto self-center text-black" />
        </li>
        <li className="hidden sm:block sm:text-violet-400 sm:text-[15px] sm:font-bold underline-hover cursor-pointer relative sm:hover:font-bold" onClick={() => set("portfolio")}>Portfolio</li>
        <li
          className="text-lg w-8 h-8 bg-white flex rounded-lg shadow-sm shadow-black sm:hidden"
          onClick={() => set("portfolio")}
        >
          <RiSlideshowLine className="mx-auto self-center text-black" />
        </li>
        <li className="hidden sm:block sm:text-violet-400 sm:text-[15px] sm:font-bold underline-hover cursor-pointer relative sm:hover:font-bold" onClick={() => set("contact")}>Contact</li>
        <li
          className="text-lg w-8 h-8 bg-white flex rounded-lg shadow-sm shadow-black sm:hidden"
          onClick={() => set("contact")}
        >
          <MdOutlineContactMail className="mx-auto self-center text-black" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
