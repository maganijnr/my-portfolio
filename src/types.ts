import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface ProjectType {
	slug: string;
	name: string;
	stack: string[];
	description: string;
	projectImage: StaticImport;
	liveUrl?: string;
	github?: string;
	projectImages: StaticImport[];
}
