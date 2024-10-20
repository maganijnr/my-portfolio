"use client";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaCodeCommit } from "react-icons/fa6";
import { JoshuaImage } from "../../../public/assets";

export default function WebLayout({ children }: { children: ReactNode }) {
	const pathName = usePathname();
	return (
		<main>
			<div className="max-w-[1000px] mx-auto px-4">
				<section className="flex flex-col gap-0.5 py-10 border-b border-[#272727]/20">
					<div className="md:w-20 h-16 w-16 md:h-20 rounded-full overflow-hidden relative">
						<Image
							src={JoshuaImage}
							alt="user"
							layout="fill"
							className=" rounded-full object-cover "
						/>
					</div>
					<h1 className="text-2xl leading-[1.5rem] font-semibold mt-3">
						Joshua Magani
					</h1>
					<p className="text-lg">Frontend Developer</p>
					<div className="flex items-center gap-5 mt-4">
						<Link href={"https://github.com/maganijnr"} target="_blank">
							<FaGithub size={25} />
						</Link>

						<Link
							href={
								"https://www.linkedin.com/in/joshua-magani-9b010918b/"
							}
							target="_blank"
						>
							<FaLinkedin size={25} />
						</Link>
					</div>
				</section>

				<section className="py-5">
					<nav>
						<ul className="flex gap-2 items-center">
							<li
								className={`p-1 px-2 duration-150 ease-in-out rounded-md ${
									pathName === "/"
										? "bg-[#272727] text-white"
										: "text-[#272727] "
								}`}
							>
								<Link href={"/"}>About</Link>
							</li>
							<li
								className={`p-1 px-2 duration-150 ease-in-out rounded-md ${
									pathName === "/projects" ||
									pathName.includes("projects")
										? "bg-[#272727] text-white"
										: "text-[#272727] "
								}`}
							>
								<Link href={"/projects"}>Projects</Link>
							</li>
							<li
								className={`p-1 px-2 duration-150 ease-in-out rounded-md ${
									pathName === "/contact"
										? "bg-[#272727] text-white"
										: "text-[#272727] "
								}`}
							>
								<Link href={"/contact"}>Contact</Link>
							</li>
						</ul>
					</nav>

					<div className="py-2 mt-4">{children}</div>
				</section>

				<footer className="py-10  border-b border-[#272727]/20 flex flex-col justify-center items-center">
					<FaCodeCommit size={25} />
					<p className="mt-2 text-center">
						&copy; {new Date().getFullYear()}- Joshua Magani
					</p>
				</footer>
			</div>
		</main>
	);
}
