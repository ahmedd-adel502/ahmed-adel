import type { Metadata } from "next";
import { Geist, Geist_Mono,Noto_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import DarkModeToggle from "@/components/ThemeToggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faFileCode, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import ScrollToTopButton from "@/components/ScrollBtn";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const notoSans = Noto_Sans({
  weight: ['400','700'],
  subsets: ["latin"],
  variable: "--font-noto-sans",
});

export const metadata: Metadata = {
  title: "Ahmed Adel | Frontend Developer",
  description: "a portfolio website for Ahmed Adel, a frontend developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="bg-gray-800">
      <body
        className={`${notoSans.className} ${notoSans.className} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {/* Navbar */}
          <div className="navbar flex justify-around items-center p-4 border-b-2 border-violet-500 dark:border-blue-400  text-white bg-gray-800 backdrop-blur-[30px] bg-opacity-30 fixed w-full top-0 left-0 z-50 transition-colors duration-300">
              <h1 className="text-2xl font-bold text-violet-500 dark:text-blue-400">Dev. Ahmed Adel</h1>
              <ul className="flex items-center gap-10 *:dark:text-white *:dark:hover:text-blue-400  *:hover:text-violet-600 transition-colors duration-200">
                <li><a href="#home" className="flex items-center gap-x-1 relative before:absolute before:bg-violet-500 dark:before:bg-blue-400 before:w-0 before:h-[4px] before:bottom-[-5] before:left-0 before:rounded-md hover:before:w-full before:transition-all hover:before:duration-200 "> <FontAwesomeIcon className="size-5" icon={faUser} /> <span>Portfolio</span></a></li>
                <li><a href="#about" className="flex items-center gap-x-1 relative before:absolute before:bg-violet-500 dark:before:bg-blue-400 before:w-0 before:h-[4px] before:bottom-[-5] before:left-0 before:rounded-md hover:before:w-full before:transition-all hover:before:duration-200"><FontAwesomeIcon className="size-5" icon={faAddressCard} /> <span>About</span></a></li>
                <li><a href="#skills" className="flex items-center gap-x-1 relative before:absolute before:bg-violet-500 dark:before:bg-blue-400 before:w-0 before:h-[4px] before:bottom-[-5] before:left-0 before:rounded-md hover:before:w-full before:transition-all hover:before:duration-200"><FontAwesomeIcon className="size-5" icon={faAddressCard} /> <span>Skills</span></a></li>
                <li><a href="#contact" className="flex items-center gap-x-1 relative before:absolute before:bg-violet-500 dark:before:bg-blue-400 before:w-0 before:h-[4px] before:bottom-[-5] before:left-0 before:rounded-md hover:before:w-full before:transition-all hover:before:duration-200"><FontAwesomeIcon className="size-5" icon={faPhone} /> <span>Contact</span></a></li>
                <li><a href="#projects" className="flex items-center gap-x-1 relative before:absolute before:bg-violet-500 dark:before:bg-blue-400 before:w-0 before:h-[4px] before:bottom-[-5] before:left-0 before:rounded-md hover:before:w-full before:transition-all hover:before:duration-200"><FontAwesomeIcon className="size-5" icon={faFileCode} /> <span>Projects</span></a></li>
              </ul>
              <DarkModeToggle />
          </div>
          {children}
          <ScrollToTopButton />
        </ThemeProvider>

        {/* Footer */}
        <footer className=" text-center p-4 border-t-2 border-violet-500 dark:border-blue-400 dark:text-white  fixed bottom-0 left-0 w-full transition-colors duration-300 bg-gray-800 backdrop-blur-[30px] bg-opacity-30 z-50"><p>© 2025 <strong className="dark:text-blue-400 font-bold text-violet-500">Ahmed Adel.</strong> All rights reserved.</p></footer>
      </body>
    </html>
  );
}
