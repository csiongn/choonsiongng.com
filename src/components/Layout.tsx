import React, {useState, useRef, useEffect} from "react";
import Link from "next/link";

type LayoutProps = {
    children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {

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
        <div ref={drawerRef} className="flex flex-col min-h-screen">
            <header className="bg-white shadow z-50 sticky top-0">
                <nav className="container mx-auto px-6 py-3">
                    <div className="flex justify-between items-center">
                        <div className="flex-shrink-0">
                            <Link href="/" passHref>
                                <div className="text-black text-lg font-semibold hover:text-blue-500 transition-colors">
                                    Choon Siong Ng
                                </div>
                            </Link>
                        </div>

                        {/* Drawer Button on small screens */}
                        <button
                            className="rounded hover:bg-gray-200 p-2 md:hidden ml-auto flex items-center justify-center"
                            onClick={toggleDrawer}
                        >
                            {/* Hamburger menu icon */}
                            <svg viewBox="0 0 20 15" width="25" height="25">
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                            </svg>
                        </button>

                        {/* Full-sized links - hidden on small screens */}
                        <div className="hidden md:flex space-x-4">
                        <Link href="/" passHref>
                            <span className="text-gray-500 hover:text-blue-500 transition-colors">Home</span>
                        </Link>
                        <Link href="/projects" passHref>
                            <span className="text-gray-500 hover:text-blue-500 transition-colors">Projects</span>
                        </Link>
                            <Link href="/contact" passHref>
                                <span className="text-gray-500 hover:text-blue-500 transition-colors">Contact</span>
                            </Link>
                            <Link href="/Choon_Siong_Ng_Resume.pdf" passHref>
                                <span className="text-gray-500 hover:text-blue-500 transition-colors">Resume</span>
                            </Link>
                        </div>
                    </div>
                </nav>
                {/* Drawer Menu */}
                <div
                     className={`absolute bg-white w-full z-40 md:hidden ${isDrawerOpen ? "block" : "hidden"} rounded-lg shadow-lg`}>
                    <div className="px-6 py-4 space-y-4">
                        {/* Drawer Links */}
                        <Link href="/" passHref>
                            <span className="block text-gray-500 hover:text-blue-500 transition-colors p-2"
                                  onClick={closeDrawer}>Home</span>
                        </Link>
                        <Link href="/projects" passHref>
                            <span className=" block text-gray-500 hover:text-blue-500 transition-colors p-2">Projects</span>
                        </Link>
                        <Link href="/contact" passHref>
                            <span className="block text-gray-500 hover:text-blue-500 transition-colors p-2">Contact</span>
                        </Link>
                        <Link href="/Choon_Siong_Ng_Resume.pdf" passHref>
                            <span className="block text-gray-500 hover:text-blue-500 transition-colors p-2">Resume</span>
                        </Link>
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
