"use client";
import { projectData } from "@/data/projectData";
import { ProjectType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";
import { FaCode, FaGithub } from "react-icons/fa";

const SingleProject = () => {
	const { slug }: { slug: string } = useParams();

	const project = projectData.find((item: ProjectType) => item.slug === slug);

	if (project) {
		return (
			<div className="w-full">
				<div className="flex items-start gap-5  flex-col lg:flex-row">
					<div className="w-full">
						<div className="aspect-[1.5/1] rounded-md overflow-hidden relative">
							<Image
								src={project?.projectImage}
								alt="project"
								layout={slug === "coffee-slug" ? "fill" : "fill"}
							/>
						</div>
					</div>
					<div className="w-full space-y-3">
						<h2 className="font-semibold text-xl md:text-2xl 2xl:text-3xl">
							{project?.name}
						</h2>
						<h5 className="font-normal text-sm lg:text-base">
							{project?.description}
						</h5>
						<div className="flex gap-2 flex-wrap items-center justify-start">
							{project?.liveUrl && (
								<Link href={project.liveUrl}>
									<div className="flex items-center  justify-start gap-2">
										<FaCode />
										<p className="font-medium capitalize">
											Project Link
										</p>
									</div>
								</Link>
							)}
							{project?.github && (
								<Link href={project.github}>
									<div className="flex items-center justify-start gap-2">
										<FaGithub />

										<p className="font-medium capitalize">
											Github Repo
										</p>
									</div>
								</Link>
							)}
						</div>
						<div className="flex gap-2 flex-wrap">
							{project?.stack.map((el, index) => (
								<span
									key={index}
									className="text-sm px-3 p-1 rounded-full border"
								>
									{el}
								</span>
							))}
						</div>
					</div>
				</div>

				{project && project.projectImages?.length > 1 && (
					<div className="mt-5 flex gap-4 flex-wrap">
						{project?.projectImages?.map((item, idx) => (
							<div
								key={idx}
								className="w-full max-w-[180px] h-[350px] relative rounded-md overflow-hidden"
							>
								<Image
									src={item}
									alt="item"
									layout="fill"
									objectFit="contain"
								/>
							</div>
						))}
					</div>
				)}
			</div>
		);
	}
	return null;
};

export default SingleProject;
