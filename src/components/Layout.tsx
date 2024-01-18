import React from "react";
import Link from "next/link";

type LayoutProps = {
    children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="bg-white shadow">
                <nav className="container mx-auto px-6 py-3">
                    <div className="flex justify-between items-center">
                        <Link href="/" passHref>
                            <div className="text-black text-lg font-semibold hover:text-blue-500 transition-colors">Choon Siong Ng</div>
                        </Link>
                        <div className="flex space-x-4">
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
                            {/* Add more navigation items here */}
                        </div>
                    </div>
                </nav>
            </header>
            <main className="flex-grow px-0">
                {children}
            </main>
        </div>
    );
};


export default Layout;
