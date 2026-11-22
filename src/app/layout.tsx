import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import WebLayout from "@/components/layouts/WebLayout";
import { ThemeProvider } from "@/context/ThemeContext";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Joshua Magani — Frontend & Mobile Engineer",
  description:
    "Frontend and mobile engineer with 4+ years building revenue-critical web and mobile products across fintech, AI, and consumer platforms.",
  icons: {
    icon: "/assets/user.jpeg",
    shortcut: "/assets/user.jpeg",
    apple: "/assets/user.jpeg",
  },
  openGraph: {
    title: "Joshua Magani — Frontend & Mobile Engineer",
    description:
      "Frontend and mobile engineer with 4+ years building revenue-critical web and mobile products across fintech, AI, and consumer platforms.",
    type: "website",
    images: [
      {
        url: "/assets/user.jpeg",
        alt: "Joshua Magani",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Joshua Magani — Frontend & Mobile Engineer",
    description:
      "Frontend and mobile engineer with 4+ years building revenue-critical web and mobile products across fintech, AI, and consumer platforms.",
    images: ["/assets/user.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <ThemeProvider>
          <WebLayout>{children}</WebLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
