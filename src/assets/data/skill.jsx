import { FaCss3, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiMongodb, SiPostman, SiRedux } from "react-icons/si";
import { TbBrandGit } from "react-icons/tb";

export const skillset = [
    {
        id: 1,
        name: "HTML",
        icon: <FaHtml5 className="text-xl text-orange-600"/>
    },
    {
        id: 2,
        name: "CSS",
        icon: <FaCss3 className="text-xl text-sky-600"/>
    },
    {
        id: 3,
        name: "Javascript",
        icon: <FaJs className="text-xl text-yellow-600"/>
    },
    {
        id: 4,
        name: "Tailwindcss",
        icon: <RiTailwindCssFill className="text-xl text-sky-600"/>
    },
    {
        id: 5,
        name: "Node Js",
        icon: <FaNodeJs className="text-xl text-green-600"/>
    },
    {
        id: 6,
        name: "Express Js",
        icon: <SiExpress className="text-xl text-slate-600"/>
    },
    {
        id: 7,
        name: "React Js",
        icon: <FaReact className="text-xl text-sky-600"/>
    },
    {
        id: 8,
        name: "Redux Toolkit",
        icon: <SiRedux className="text-xl text-purple-600"/>
    },
    {
        id: 9,
        name: "MySql",
        icon: <GrMysql className="text-xl text-blue-600"/>
    },
    {
        id: 10,
        name: "Postman",
        icon: <SiPostman className="text-xl text-orange-600"/>
    },
    {
        id: 11,
        name: "Git & Github",
        icon: <TbBrandGit className="text-xl text-slate-600"/>
    }
]