import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import WebLayout from "@/components/layouts/WebLayout";

const poppins = Poppins({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-poppins",
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
	title: "Joshua Magani — Frontend & Mobile Engineer",
	description:
		"Frontend and mobile engineer with 4+ years building revenue-critical web and mobile products across fintech, AI, and consumer platforms.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${poppins.variable}  antialiased`}>
				<WebLayout>{children}</WebLayout>
			</body>
		</html>
	);
}
