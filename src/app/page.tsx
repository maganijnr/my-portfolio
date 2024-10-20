import { BiLogoTypescript } from "react-icons/bi";
import { FaReact, FaGitAlt } from "react-icons/fa";
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
	];
	return (
		<div>
			<h2 className="font-normal text-lg">
				Frontend developer with experience and expertise who has a track
				record of creating slick, effective user interfaces. Strong sense of
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

				<div className="flex flex-col justify-center items-center w-3 mt-5">
					<div className="h-3 w-3 rounded-full bg-[#ebebeb] relative">
						<div className="absolute left-[250%] top-[-50%] text-black flex flex-col whitespace-nowrap">
							<h3 className="font-semibold text-[#272727]">
								Frontend Developer (Web)
							</h3>
							<p className="text-sm">
								Web3D Media Inc (March 2022 - October 2024)
							</p>
						</div>
					</div>
					<div className="h-20 w-0.5 bg-[#ebebeb]"></div>

					<div className="h-3 w-3 rounded-full bg-[#ebebeb] relative">
						<div className="absolute left-[250%] top-[-50%] text-black flex flex-col whitespace-nowrap">
							<h3 className="font-semibold text-[#272727]">
								Frontend Developer (Web)
							</h3>
							<p className="text-sm">
								Quickleap (April 2021 - August 2023)
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="mt-20 mb-10">
				<h3 className="text-xl">Volunteer Work</h3>

				<div className="flex flex-col justify-center items-center w-3 mt-5">
					<div className="h-3 w-3 rounded-full bg-[#ebebeb] relative">
						<div className="absolute left-[250%] top-[-50%] text-black flex flex-col whitespace-nowrap">
							<h3 className="font-semibold text-[#272727]">
								Frontend Developer (Mobile & Web)
							</h3>
							<p className="text-sm">
								Lemu Africa (October 2024 - Present)
							</p>
						</div>
					</div>
					<div className="h-20 w-0.5 bg-[#ebebeb]"></div>

					<div className="h-3 w-3 rounded-full bg-[#ebebeb] relative">
						<div className="absolute left-[250%] top-[-50%] text-black flex flex-col whitespace-nowrap">
							<h3 className="font-semibold text-[#272727]">
								Frontend Developer (Web)
							</h3>
							<p className="text-sm">
								FoodForeThought (July 2024 - Present)
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
