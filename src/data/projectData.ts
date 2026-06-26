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
  RooliImage,
} from "../../public/assets";

export const projectData: ProjectType[] = [
  {
    slug: "rooli-slug",
    name: "Rooli",
    stack: ["NextJs", "Zustand", "Typescript", "Framer", "Tanstack Query"],
    description:
      "An AI-powered social media scheduling platform for planning, writing, and publishing content across multiple channels.",
    projectImage: RooliImage,
    liveUrl: "https://rooli.co/",
    github: "",
    projectImages: [RooliImage],
  },
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
    name: "Rooli",
    position: "Frontend Engineer",
    duration: "December 2025 - Present",
    description:
      "AI-powered social media scheduling platform for planning, writing, and publishing content across multiple channels.",
    points: [
      "Improved product responsiveness and frontend reliability by implementing Zustand for client state and TanStack Query for server-state management across API-driven workflows.",
      "Standardized loading, error, and recovery states using Next.js app conventions, reducing UX friction across content scheduling and account-management flows.",
      "Owned the social-account connection experience, a core activation workflow that enables users to link, manage, and publish through multiple social platforms from one dashboard.",
      "Added unit tests around critical interaction states, reducing regression risk across user-facing product flows.",
      "Delivered responsive interfaces across core scheduling, dashboard, and account-management journeys.",
    ],
  },
  {
    name: "Babelos",
    position: "Mobile Developer, Moniger Team",
    duration: "May 2025 - Present",
    description:
      "Fintech mobile application for budgeting, saving, subscriptions, virtual cards, and expense tracking.",
    points: [
      "Expanded Moniger's monetizable fintech product surface by owning end-to-end React Native delivery for Naira and USD virtual-card creation, funding, management, and monitoring flows.",
      "Shipped Budget and MoniHub experiences that improved user financial visibility through goal-setting, spending categorization, and real-time progress tracking.",
      "Delivered subscription-management workflows that support retention by helping users monitor recurring expenses and avoid unwanted charges.",
      "Migrated mobile integrations from API v1 to API v2 across core financial flows, modernizing the data-access layer while preserving product continuity.",
      "Improved production stability through defect resolution, troubleshooting, release support, and performance-focused maintenance.",
      "Supported the companion Next.js admin dashboard for business-user management, improving operational visibility and internal product control.",
    ],
  },
  {
    name: "Web3D Media",
    position: "Frontend Engineer",
    duration: "March 2022 - October 2024",
    description:
      "Built transaction-enabled frontend systems for marketplace, ticketing, and Web3 product experiences.",
    sub_projects: [
      {
        name: "Blocasset — On-chain builder marketplace",
        description:
          "Connect with top onchain builders and build with trust on Base.",
        points: [
          "Developed creator-dashboard workflows for asset uploads, sales tracking, and withdrawals, enabling sellers to manage digital assets and revenue activity from one interface.",
          "Integrated Paystack asset-purchase flows, supporting revenue-generating transactions across the marketplace.",
          "Migrated state management from Context API to Redux, improving frontend predictability, debugging, and long-term maintainability.",
        ],
      },
      {
        name: "Witan — Ticketing platform",
        description:
          "Transaction-enabled ticketing experience for event purchases.",
        points: [
          "Integrated ticket-purchase workflows in collaboration with backend engineers, reducing friction across the checkout experience.",
          "Implemented Paystack and crypto payment options, expanding supported transaction methods for event ticket purchases.",
          "Built responsive ticketing interfaces with Next.js, Tailwind CSS, SCSS, and TanStack Query.",
        ],
      },
    ],
  },
];

export const contractData: ExperienceType[] = [
  {
    name: "Edatech",
    position: "Mobile Engineer",
    duration: "August 2025 - November 2025",
    description:
      "AI-powered learning platform with real-time quiz challenge functionality.",
    points: [
      "Built React Native mobile components for AI-enhanced learning experiences.",
      "Implemented real-time quiz functionality, including QR-code entry, timed challenges, progress tracking, and live leaderboard behavior.",
      "Supported interactive learning workflows designed to improve engagement, participation, and in-session feedback.",
    ],
  },
  {
    name: "Nullish",
    position: "Frontend Engineer, On-Demand",
    duration: "On-demand",
    description:
      "Intelliask — AI-powered customer support platform.",
    points: [
      "Built React-based frontend features for AI-assisted customer support interactions.",
      "Supported interface development for content-trained AI responses and customer query workflows.",
      "Contributed to AI support experiences designed to reduce response friction and improve access to contextual customer assistance.",
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
