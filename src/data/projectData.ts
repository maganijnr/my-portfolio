import { ProjectType } from "@/types";
import {
	BlocassetImage,
	CoffeeImageFive,
	CoffeeImageFour,
	CoffeeImageOne,
	CoffeeImageThree,
	CoffeeImageTwo,
	FleetImage,
	GeekImage,
} from "../../public/assets";

export const projectData: ProjectType[] = [
	{
		slug: "fleet-slug",
		name: "Fleet",
		stack: ["ReactJs", "TailwindCss", "Sanity.io"],
		description: "An image sharing app",
		projectImage: FleetImage,
		liveUrl: "https://fleet-image-sharing-app.netlify.app/",
		github: "https://github.com/maganijnr/fleet",
		projectImages: [FleetImage],
	},
	{
		slug: "geek-slug",
		name: "Geek Watch",
		stack: ["ReactJs", "Redux", "Styled-Components", "TMDP Api"],
		description:
			"A web app for movie geeks. It shows the recent movies and tv shows.",
		projectImage: GeekImage,
		liveUrl: "https://geek-watch.netlify.app/",
		github: "https://github.com/maganijnr/geek-watch",
		projectImages: [GeekImage],
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
		slug: "coffee-slug",
		name: "Coffee Shop",
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
