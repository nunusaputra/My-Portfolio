import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="w-full">
      <h1 className="text-sm font-bold text-slate-700 sm:text-xl">Contact</h1>
      <p className="text-sm font-medium text-slate-600 sm:text-lg">
        Get in touch with me
      </p>
      <div className="mt-4 sm:grid sm:grid-cols-2 sm:gap-2">
        <div className="mb-1">
          <label
            htmlFor="name"
            className="mb-1 text-sm font-medium text-slate-700 sm:text-lg"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full bg-white border-2 border-slate-300 outline-none focus:border-violet-500 rounded-lg px-3 py-2 text-black"
            placeholder="Wisnu Saputra"
          />
        </div>
        <div className="mb-1">
          <label
            htmlFor="email"
            className="mb-1 text-sm font-medium text-slate-700 sm:text-lg"
          >
            Email
          </label>
          <input
            type="email"
            className="w-full border-2 border-slate-300 outline-none focus:border-violet-500 bg-white text-black rounded-lg px-3 py-2"
            placeholder="nunusaputra17@gmail.com"
          />
        </div>
        <div className="mb-1 sm:col-span-2">
          <label
            htmlFor="message"
            className="mb-1 font-medium text-slate-700 sm:text-lg"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            className="w-full border-2 border-slate-300 outline-none focus:border-violet-500 bg-white text-black rounded-lg px-3 py-2"
            cols={30}
            rows={5}
            placeholder="type your message here..."
          ></textarea>
        </div>
        <button className="w-full border-2 border-slate-300 bg-violet-400 font-bold text-white tracking-wider rounded-lg px-3 py-2 sm:col-span-2 hover:bg-violet-500">
          Send Message
        </button>
      </div>

      <div class="flex items-center my-4">
        <div class="flex-grow border-t-2 border-gray-400"></div>
        <span class="mx-4 text-gray-500">or</span>
        <div class="flex-grow border-t-2 border-gray-400"></div>
      </div>

      <div className="w-full">
        <div className="px-2">
          <h1 className="text-sm text-slate-700 font-bold sm:text-lg">
            Connect With Me
          </h1>
          <a
            href="https://www.linkedin.com/in/wisnu-saputra-a61068247/"
            target="_blank"
          >
            <div className="flex items-center gap-2 mt-3 group cursor-pointer">
              <FaLinkedin className="text-xl text-black cursor-pointer group-hover:scale-125 group-hover:rotate-6 transition-all duration-300 sm:text-lg group-hover:text-blue-600" />
              <h1 className="text-sm text-slate-700 font-semibold group-hover:text-blue-600 group-hover:scale-105 transition-all duration-300 sm:text-lg">
                Wisnu Saputra
              </h1>
            </div>
          </a>
          <a href="https://instagram.com/wisnu_sapt" target="_blank">
            <div className="flex items-center gap-2 mt-3 group cursor-pointer">
              <FaInstagram className="text-xl text-black cursor-pointer group-hover:scale-125 group-hover:rotate-6 transition-all duration-300 sm:text-lg group-hover:text-pink-500" />
              <h1 className="text-sm text-slate-700 font-semibold group-hover:scale-105 transition-all duration-300 sm:text-lg group-hover:text-pink-500">
                wisnu_sapt
              </h1>
            </div>
          </a>
          <a href="https://wa.me/083815499134" target="_blank">
            <div className="flex items-center gap-2 mt-3 group cursor-pointer">
              <FaWhatsapp className="text-xl text-black cursor-pointer group-hover:scale-125 group-hover:rotate-6 transition-all duration-300 sm:text-lg group-hover:text-green-600" />
              <h1 className="text-sm text-slate-700 font-semibold group-hover:scale-105 transition-all duration-300 sm:text-lg group-hover:text-green-500">
                083815499134
              </h1>
            </div>
          </a>
          <a href="https://github.com/nunusaputra" target="_blank">
            <div className="flex items-center gap-2 mt-3 group cursor-pointer">
              <FaGithub className="text-xl text-black cursor-pointer group-hover:scale-125 group-hover:rotate-6 transition-all duration-300 sm:text-lg group-hover:text-slate-700" />
              <h1 className="text-sm text-slate-700 font-semibold group-hover:scale-105 transition-all duration-300 sm:text-lg group-hover:text-slate-500">
                Wisnu Saputra
              </h1>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
