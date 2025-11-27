import { ExperienceType, ProjectType } from "@/types";
import {
  BlocassetImage,
  CoffeeImageFive,
  CoffeeImageFour,
  CoffeeImageOne,
  CoffeeImageThree,
  CoffeeImageTwo,
  EdatTechImage,
  FleetImage,
  GeekImage,
  IntelliaskImage,
  MonigerImage,
} from "../../public/assets";

export const projectData: ProjectType[] = [
  {
    slug: "intelliask-slug",
    name: "Intelliask",
    stack: ["NextJs", "Zustand", "Typescript", "Framer", "Tanstack Query"],
    description:
      "An AI-powered customer support tool that trains on your content to deliver fast, accurate assistance. (Powered by Nullish)",
    projectImage: IntelliaskImage,
    liveUrl: "https://intelliask.io/",
    github: "",
    projectImages: [IntelliaskImage],
  },
  {
    slug: "moniger-slug",
    name: "Moniger",
    stack: ["React Native", "Zustand", "Typescript"],
    description:
      "A smart financial management tool to save, budget, and track expenses seamlessly.",
    projectImage: MonigerImage,
    liveUrl: "https://moniger.com/",
    github: "",
    projectImages: [MonigerImage],
  },
  {
    slug: "edat-slug",
    name: "Edat Tech",
    stack: ["React Native", "Zustand", "Typescript"],
    description:
      "A comprehensive suite of AI-powered features designed to revolutionize learning,",
    projectImage: EdatTechImage,
    liveUrl: "https://www.edatech.ai/faq/",
    github: "",
    projectImages: [EdatTechImage],
  },
  {
    slug: "blocasset-slug",
    name: "Blocasset",
    stack: ["NextJs", "Privy", "Tanstack Query", "Typescript", "Firebase"],
    description:
      "Connect with top onchain builders and build with trust on base",
    projectImage: BlocassetImage,
    liveUrl: "https://blocasset.com/",
    github: "",
    projectImages: [BlocassetImage],
  },

  {
    slug: "fleet-slug",
    name: "Fleet (Personal Project)",
    stack: ["ReactJs", "TailwindCss", "Sanity.io"],
    description: "An image sharing app",
    projectImage: FleetImage,
    liveUrl: "https://fleet-image-sharing-app.netlify.app/",
    github: "https://github.com/maganijnr/fleet",
    projectImages: [FleetImage],
  },
  {
    slug: "geek-slug",
    name: "Geek Watch (Personal Project)",
    stack: ["ReactJs", "Redux", "Styled-Components", "TMDP Api"],
    description:
      "A web app for movie geeks. It shows the recent movies and tv shows.",
    projectImage: GeekImage,
    liveUrl: "https://geek-watch.netlify.app/",
    github: "https://github.com/maganijnr/geek-watch",
    projectImages: [GeekImage],
  },

  {
    slug: "coffee-slug",
    name: "Coffee Shop (Personal Project)",
    stack: ["React Native", "Zustand", "Typescript"],
    description:
      "Connect with top onchain builders and build with trust on base",
    projectImage: CoffeeImageOne,
    liveUrl: "",
    github: "https://github.com/maganijnr/coffee-shop",
    projectImages: [
      CoffeeImageOne,
      CoffeeImageTwo,
      CoffeeImageThree,
      CoffeeImageFour,
      CoffeeImageFive,
    ],
  },
];

export const experiences: ExperienceType[] = [
  {
    name: "Babelos Ltd",
    position: "Mobile Engineer",
    duration: "May 2025 - Present",
    sub_projects: [
      {
        name: "Moniger",
        description:
          "A smart financial management tool to save, budget, and track expenses seamlessly.",
      },
    ],
  },
  {
    name: "Web3D Media Inc",
    position: "Frontend Engineer",
    duration: "March 2022 - October 2024",
    sub_projects: [
      {
        name: "Blocasset",
        description:
          "Connect with top onchain builders and build with trust on base",
      },
    ],
  },
  {
    name: "Quickleap",
    position: "Frontend Engineer",
    duration: " April 2021 - March 2022",
    description:
      "A platform that enables food businesses to forward plan and make arrangements for their raw material needs to be fulfilled through timely delivery all-year round.",
  },
];

export const contractData: ExperienceType[] = [
  {
    name: "Nullish",
    position: "Frontend Engineer",
    duration: "On-demand",
    // description: "A design agency",
    sub_projects: [
      {
        name: "Intelliask",
        description:
          "An AI-powered customer support tool that trains on your content to deliver fast, accurate assistance. (Powered by Nullish)",
      },
    ],
  },
  {
    name: "Edatech",
    position: "Mobile Engineer",
    duration: "August 2025 - November 2025",
    sub_projects: [
      {
        name: "Edat Tech",
        description:
          "A comprehensive suite of AI-powered features designed to revolutionize learning.",
      },
      {
        name: "Edat Tech Quiz",
        description:
          "A robust, real-time quiz challenge app allowing participants to scan QR codes to join, compete in timed quizzes, and track progress on a live leaderboard.",
      },
    ],
  },
];

export const volunteerWork: ExperienceType[] = [
  {
    name: "Lemu Africa",
    position: "Frontend Engineer",
    duration: "October 2024 - December 2024",
    description: "",
  },
  {
    name: "FoodForeThought",
    position: "Frontend Engineer",
    duration: "July 2024 - October 2024",
    description: "",
  },
];
