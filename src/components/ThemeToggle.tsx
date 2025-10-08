"use client"
import * as React from "react"
import { useTheme } from "next-themes"
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DarkModeToggle() {

    const {theme,setTheme} = useTheme();
     const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
        localStorage.setItem("theme", theme === "dark" ? "dark" : "light");
      };
    return <>
            <span className="pl-2 border-l-2 border-violet-500 dark:border-blue-400">
                <button onClick={toggleTheme} className="p-2 rounded cursor-pointer text-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                    {theme === "dark" ? (
                        <FontAwesomeIcon className="size-5 text-yellow-500" icon={faSun} />
                    ) : (
                        <FontAwesomeIcon className="size-5 text-violet-600" icon={faMoon} />
                    )}
                </button>
            </span>
        </>


}