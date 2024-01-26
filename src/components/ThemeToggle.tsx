import React from 'react';
import Sun from '../../public/icons/sun';
import Moon from '../../public/icons/moon';
import { useDarkMode } from "@/contexts/DarkModeContext";
const ThemeToggle: React.FC = () => {
    // https://tailwindcss.com/docs/dark-mode

    const {darkMode, toggleDarkMode} = useDarkMode();

    return (
        <label htmlFor="theme-toggle" className="relative inline-block w-6 h-6 rounded-full cursor-pointer">
            <input
                id="theme-toggle"
                type="checkbox"
                className="sr-only"
                checked={darkMode}
                onChange={toggleDarkMode}
            />
            {darkMode ? <Sun fill={'#FBBF24'} /> : <Moon fill={'#6B7280'} />}
        </label>
    );
};

export default ThemeToggle;
