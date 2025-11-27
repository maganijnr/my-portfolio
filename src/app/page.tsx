import WorkPlace from "@/components/work-place";
import { contractData, experiences, volunteerWork } from "@/data/projectData";
import { BiLogoTypescript } from "react-icons/bi";
import { FaReact, FaGitAlt } from "react-icons/fa";
import { FiFramer } from "react-icons/fi";
import { IoLogoFirebase, IoLogoJavascript } from "react-icons/io5";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiReactquery, SiRedux, SiSanity, SiShadcnui } from "react-icons/si";

export default function Home() {
  const stack = [
    {
      icon: <IoLogoJavascript size={20} />,
      title: "Javascript",
    },
    {
      icon: <FaGitAlt size={20} />,
      title: "Git",
    },
    {
      icon: <FaReact size={20} />,
      title: "React Js",
    },

    {
      icon: <FaReact size={20} />,
      title: "React Native",
    },
    {
      icon: <BiLogoTypescript size={20} />,
      title: "Typescript",
    },
    {
      icon: <IoLogoFirebase size={20} />,
      title: "Firebase",
    },
    {
      icon: <RiNextjsLine size={20} />,
      title: "Next Js",
    },
    {
      icon: <SiSanity size={20} />,
      title: "Sanity CMS",
    },
    {
      icon: <RiTailwindCssFill size={20} />,
      title: "Tailwind CSS",
    },
    {
      icon: <SiRedux size={20} />,
      title: "Redux toolkit",
    },
    { icon: <SiReactquery size={20} />, title: "Tanstack Query" },
    { icon: <SiShadcnui size={20} />, title: "ShadCn Ui" },
    { icon: <FiFramer size={20} />, title: "Framer Motion" },
  ];
  return (
    <div>
      <h2 className="font-normal text-lg">
        Software Engineer with experience and expertise who has a track record
        of creating slick, effective user interfaces, optimizing website
        performance, and delivering great user experiences. Strong sense of
        teamwork and creativity, ready to provide technical know-how and
        original ideas to difficult projects.
      </h2>

      <div className="mt-10">
        <h3 className="text-xl">Skills</h3>
        <div className="flex  flex-wrap gap-4  mt-5">
          {stack.map((item, idx) => (
            <div className="flex gap-2" key={idx}>
              {item.icon}
              {item.title}
            </div>
          ))}
        </div>
      </div>

      <div className="my-10">
        <h3 className="text-xl">Experience</h3>
        <div className="flex flex-col mt-5">
          {experiences.map((item, idx) => (
            <WorkPlace
              key={idx}
              data={item}
              isLast={idx === experiences.length - 1}
            />
          ))}
        </div>
      </div>

      <div className="mt-10 mb-10">
        <h3 className="text-xl">Contract Work</h3>

        <div className="flex flex-col mt-5">
          {contractData.map((item, idx) => (
            <WorkPlace
              key={idx}
              data={item}
              isLast={idx === contractData.length - 1}
            />
          ))}
        </div>
      </div>

      <div className="mt-10 mb-10">
        <h3 className="text-xl">Volunteer Work</h3>

        <div className="flex flex-col mt-5">
          {volunteerWork.map((item, idx) => (
            <WorkPlace
              key={idx}
              data={item}
              isLast={idx === volunteerWork.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
