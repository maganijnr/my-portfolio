import { projectData } from "@/data/projectData";
import { ProjectType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectsPage = () => {
	return (
		<div className="mt-5 mb-10">
			<h3 className="text-xl font-semibold">Projects</h3>

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-5">
				{projectData.map((project: ProjectType) => (
					<Link
						href={`/projects/${project.slug}`}
						className="flex flex-col gap-1 group border-b py-7 sm:border-o sm:py=0"
						key={project.slug}
					>
						<div className="aspect-[1.7/1] rounded-md relative overflow-hidden">
							<Image
								src={project.projectImage}
								layout="fill"
								alt="project"
							/>
						</div>

						<h4 className="text-lg font-semibold mt-2">{project.name}</h4>
						<p className="max-w-[80%]">{project.description}</p>
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
					</Link>
				))}
			</div>
		</div>
	);
};

export default ProjectsPage;
