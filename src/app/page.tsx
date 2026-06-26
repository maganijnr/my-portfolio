import WorkPlace from "@/components/work-place";
import { contractData, experiences, volunteerWork } from "@/data/projectData";
import { BiLogoTypescript } from "react-icons/bi";
import { FaReact, FaGitAlt, FaNodeJs } from "react-icons/fa";
import { FiFramer } from "react-icons/fi";
import { GiBearFace } from "react-icons/gi";
import { IoLogoFirebase, IoLogoJavascript } from "react-icons/io5";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import {
  SiReactquery,
  SiRedux,
  SiSanity,
  SiShadcnui,
  SiExpress,
  SiNestjs,
  SiMongodb,
  SiSass,
  SiStyledcomponents,
} from "react-icons/si";

export default function Home() {
  const stack = [
    {
      icon: <IoLogoJavascript size={20} />,
      title: "Javascript",
    },
    {
      icon: <BiLogoTypescript size={20} />,
      title: "Typescript",
    },
    {
      icon: <FaReact size={20} />,
      title: "React Js",
    },
    {
      icon: <RiNextjsLine size={20} />,
      title: "Next Js",
    },
    {
      icon: <FaReact size={20} />,
      title: "React Native",
    },
    {
      icon: <SiRedux size={20} />,
      title: "Redux Toolkit",
    },
    {
      icon: <GiBearFace size={20} />,
      title: "Zustand",
    },
    { icon: <SiReactquery size={20} />, title: "Tanstack Query" },
    {
      icon: <RiTailwindCssFill size={20} />,
      title: "Tailwind CSS",
    },
    {
      icon: <SiSass size={20} />,
      title: "SCSS",
    },
    {
      icon: <SiStyledcomponents size={20} />,
      title: "Styled Components",
    },
    { icon: <FiFramer size={20} />, title: "Framer Motion" },
    { icon: <SiShadcnui size={20} />, title: "shadcn/ui" },
    {
      icon: <FaNodeJs size={20} />,
      title: "Node Js",
    },
    {
      icon: <SiExpress size={20} />,
      title: "Express Js",
    },
    {
      icon: <SiNestjs size={20} />,
      title: "NestJs",
    },
    {
      icon: <SiMongodb size={20} />,
      title: "MongoDB",
    },
    {
      icon: <IoLogoFirebase size={20} />,
      title: "Firebase",
    },
    {
      icon: <SiSanity size={20} />,
      title: "Sanity CMS",
    },
    {
      icon: <FaGitAlt size={20} />,
      title: "Git",
    },
  ];

  const impact = [
    "Expanded monetizable fintech functionality by delivering virtual-card, budgeting, subscription, and expense-tracking flows in React Native.",
    "Enabled revenue-generating transactions through Paystack and crypto payment integrations across the marketplace and ticketing products.",
    "Improved frontend reliability and delivery quality through structured state management, server-state handling, reusable error states, and unit testing.",
    "Strengthened codebase maintainability through API migrations, Context-to-Redux refactors, and JavaScript-to-TypeScript migration work.",
    "Built operational dashboards and admin interfaces that improved internal visibility, user management, seller activity, and product control.",
    "Delivered production-ready interfaces across AI, fintech, Web3, food supply, social media scheduling, and learning products.",
  ];
  return (
    <div>
      <h2 className="font-normal text-lg">
        Frontend and mobile engineer with 4+ years of experience building
        revenue-critical web and mobile product experiences across fintech, AI,
        SaaS, marketplaces, ticketing, and consumer platforms. Strong in
        React.js, Next.js, React Native, TypeScript, state management, API
        integration, payment workflows, responsive UI systems, and production
        debugging. Experienced in shipping customer-facing features that expand
        product capability, improve reliability, reduce user friction, and
        support monetizable business flows.
      </h2>

      <div className="mt-10">
        <h3 className="text-xl">Business &amp; Technical Impact</h3>
        <ul className="mt-5 list-disc space-y-2 pl-5 marker:text-[#272727]/40">
          {impact.map((item, idx) => (
            <li className="text-sm font-normal" key={idx}>
              {item}
            </li>
          ))}
        </ul>
      </div>

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
        <h3 className="text-xl">Education</h3>
        <div className="mt-5">
          <h3 className="font-semibold text-[#272727]">Covenant University</h3>
          <p className="text-sm mb-1">2017 - 2022</p>
          <p className="text-sm font-normal">
            Bachelor of Science in Industrial Mathematics – Computer Science
          </p>
        </div>
      </div>

      {/* <div className="mt-10 mb-10">
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
      </div> */}
    </div>
  );
}
