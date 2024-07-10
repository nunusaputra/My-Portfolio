import React from "react";
import hero from "../assets/img/hero.png";
import { MdOutlineCalendarMonth, MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline, IoPhonePortraitOutline } from "react-icons/io5";

const email = "nunusaputra17@gmail.com";
const phone = "083815499134";
const birthdate = "16 November 2001";
const location = "Karawang, Indonesia";

const Modal = (props) => {
    const {click} = props
  return (
    <dialog id={click} className="modal">
      <div className="modal-box bg-marble">
        <div className="flex gap-4">
          <div className="w-16 h-16 bg-black mt-3 rounded-lg shadow-md shadow-black">
            <img src={hero} alt="" className="w-full rounded-lg" />
          </div>
          <div className="self-center mt-4">
            <h1 className="text-sm font-bold text-slate-700">Wisnu Saputra</h1>
            <h2 className="text-sm font-semibold text-slate-600">
              Full Stack Developer
            </h2>
          </div>
        </div>

        {/* Line */}

        <div class="flex items-center my-4">
          <div class="flex-grow border-t-2 border-gray-400"></div>
          <span class="mx-4 text-gray-500">More Info</span>
          <div class="flex-grow border-t-2 border-gray-400"></div>
        </div>

        {/* Info */}
        <div className="flex flex-col overflow-hidden mt-2">
          <a href="mailto:nunusaputra17@gmail.com">
            <div className="flex gap-2 py-2">
              <div className="w-10 h-10 bg-slate-300 border-1 shadow-sm shadow-slate-400 flex items-center rounded-lg">
                <MdOutlineEmail className="mx-auto text-xl text-black" />
              </div>
              <div className="">
                <h1 className="font-semibold text-slate-600">Email</h1>
                <h1 className="-mt-1 font-medium text-slate-500">
                  {email.substring(0, 25)}
                </h1>
              </div>
            </div>
          </a>

          <a href="https://wa.me/083815499134" target="_blank">
            <div className="flex gap-2 py-2">
              <div className="w-10 h-10 bg-slate-300 border-1 shadow-sm shadow-slate-400 flex items-center rounded-lg">
                <IoPhonePortraitOutline className="mx-auto text-xl text-black" />
              </div>
              <div className="">
                <h1 className="font-semibold text-slate-600">Phone</h1>
                <h1 className="-mt-1 font-medium text-slate-500">{phone}</h1>
              </div>
            </div>
          </a>
          <div className="flex gap-2 py-2">
            <div className="w-10 h-10 bg-slate-300 border-1 shadow-sm shadow-slate-400 flex items-center rounded-lg">
              <MdOutlineCalendarMonth className="mx-auto text-xl text-black" />
            </div>
            <div className="">
              <h1 className="font-semibold text-slate-600">Birthdate</h1>
              <h1 className="-mt-1 font-medium text-slate-500">{birthdate}</h1>
            </div>
          </div>
          <div className="flex gap-2 py-2">
            <div className="w-10 h-10 bg-slate-300 border-1 shadow-sm shadow-slate-400 flex items-center rounded-lg">
              <IoLocationOutline className="mx-auto text-xl text-black" />
            </div>
            <div className="">
              <h1 className="font-semibold text-slate-600">Alamat</h1>
              <h1 className="-mt-1 font-medium text-slate-500">{location}</h1>
            </div>
          </div>
        </div>
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn border-none text-white font-bold bg-violet-500 hover:bg-violet-600 shadow-md shadow-slate-300">
              Close
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
