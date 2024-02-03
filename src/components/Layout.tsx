import React, {useState, useRef, useEffect} from "react";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import Hamburger from "../../public/icons/hamburger";
import {useDarkMode} from "@/contexts/DarkModeContext";

type LayoutProps = {
    children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {

    // Dark mode
    const {darkMode} = useDarkMode();

    // Drawer
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const drawerRef = useRef<HTMLDivElement | null>(null);

    const closeDrawer = () => setIsDrawerOpen(false);
    const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

    // Close drawer on mobile if clicked outside
    const handleClickOutside = (event: MouseEvent) => {
        if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
            closeDrawer();
        }
    };

    useEffect(() => {
        // Attach the event listener to handle mouse clicks
        document.addEventListener("mousedown", handleClickOutside);

        // Cleanup the event listener
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="flex flex-col min-h-screen">
            <header className="bg-white shadow z-50 sticky top-0 dark:bg-gray-800">
                <nav className="container mx-auto px-6 py-3">
                    <div className="flex justify-between items-center">
                        <div className="flex-shrink-0">
                            <Link href="/" passHref>
                                <div className="text-lg text-black dark:text-gray-100 font-semibold hover:text-blue-500 dark:hover:text-blue-200 transition-colors">
                                    Choon Siong Ng
                                </div>
                            </Link>
                        </div>

                        {/* Container for small screens only */}
                        <div className="flex items-center md:hidden ml-auto justify-center">
                            {/* Drawer Button on small screens */}
                            <button className="rounded hover:bg-gray-200 dark:hover:bg-gray-500 p-2"
                                    onClick={toggleDrawer} >
                                {/* Hamburger menu icon */}
                                {/* TailwindCSS text-gray-500 = rgb(107 114 128) = #6B7280 ; text-gray-300 = rgb(209 213 219) = #D1D5DB */}
                                <Hamburger fill={darkMode ? '#D1D5DB' : '#6B7280'}/>
                            </button>

                            {/* Theme toggle button */}
                            <ThemeToggle />
                        </div>


                        {/* Full-sized links - hidden on small screens */}
                        <div className="hidden md:flex space-x-4">
                            <Link href="/" passHref>
                                <span className="text-gray-500 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-200 transition-colors">Home</span>
                            </Link>
                            <Link href="/projects" passHref>
                               <span className="text-gray-500 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-200 transition-colors">Projects</span>
                            </Link>
                            <Link href="/contact" passHref>
                                <span className="text-gray-500 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-200 transition-colors">Contact</span>
                            </Link>
                            <Link href="/Choon_Siong_Ng_Resume_web.pdf" passHref>
                                <span className="text-gray-500 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-200 transition-colors">Resume</span>
                            </Link>
                            <ThemeToggle />
                        </div>
                    </div>
                </nav>

                {/* Drawer Menu */}
                <div>
                    <div className={`absolute w-full md:hidden ${isDrawerOpen ? "block" : "hidden"} bg-white dark:bg-gray-800 rounded-lg shadow-lg`}>
                        <div className="px-6 py-4 space-y-4">
                            {/* Drawer Links */}
                            <Link href="/" passHref>
                                <span className="block text-gray-500 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-200 transition-colors p-2"
                                      onClick={closeDrawer}>
                                    Home
                                </span>
                            </Link>
                            <Link href="/projects" passHref>
                                <span className=" block text-gray-500 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-200 transition-colors p-2"
                                      onClick={closeDrawer}>
                                    Projects
                                </span>
                            </Link>
                            <Link href="/contact" passHref>
                                <span className="block text-gray-500 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-200 transition-colors p-2"
                                      onClick={closeDrawer}>
                                    Contact
                                </span>
                            </Link>
                            <Link href="/Choon_Siong_Ng_Resume_web.pdf" passHref>
                                <span className="block text-gray-500 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-200 transition-colors p-2"
                                      onClick={closeDrawer}>
                                    Resume
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
            <main className="flex-grow px-0 relative">
                {children}
            </main>
        </div>
    );
};


export default Layout;
