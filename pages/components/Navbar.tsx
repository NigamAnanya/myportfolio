import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar: React.FC = () => {
  // State to track the theme
  const [theme, setTheme] = useState("dark");

  // Toggles between dark and light mode
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  // Set the initial theme based on the user's system preference
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <div>
      <nav className="w-full bg-gray-900 dark:bg-gray-100 p-4 flex justify-center items-center space-x-6 text-gray-400 dark:text-black text-lg">
      <Link href="/" className="hover:underline">about</Link>
      <Link href="/Education" className="hover:underline">Education</Link>
      <Link href="/projects" className="hover:underline">projects</Link>
      <Link href="/repositories" className="hover:underline">repositories</Link>
      <Link href="/cv" className="hover:underline">cv</Link>
      <Link href="/teaching" className="hover:underline">teaching</Link>
      <Link href="/Experience" className="hover:underline">Experience</Link>
      <Link href="/submenu" className="hover:underline">submenu</Link>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="ml-4 p-2 bg-gray-700 dark:bg-gray-300 text-white dark:text-black rounded-md hover:bg-gray-600 dark:hover:bg-gray-400"
        >
          {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </button>
      </nav>
      {/* Horizontal line below the navigation */}
      <hr className="border-t border-gray-700 dark:border-gray-300 mt-2" />
    </div>
  );
};

export default Navbar;
