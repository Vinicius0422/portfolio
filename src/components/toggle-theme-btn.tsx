import { memo } from "react";

import { useThemeLanguage } from "@/contexts/theme-language-context";
import { Sun, Moon } from "lucide-react";

export const ToggleThemeBtn = memo(() => {

    const { theme, toggleTheme } = useThemeLanguage();

    return (
        <button
            onClick={toggleTheme}
            className="relative w-20 h-10 flex items-center px-2 rounded-full bg-gradient-to-r from-sky-400 to-sky-600 shadow-xl hover:cursor-pointer transition-all duration-300"
        >
            <div
            className="absolute left-2 top-1/2 transform -translate-y-1/2 w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-md transition-all duration-500 dark:left-[calc(100%-2.2rem)]"
            >
                {theme === 'dark' ? (
                    <Moon size={16} className="text-sky-600" />
                ) : (
                    <Sun size={16} className="text-yellow-500" />
                )}
            </div>
    
            <div className="flex w-full justify-between items-center text-gray-100 font-semibold text-sm">
                <Sun size={16} className="text-gray-100"/>
                <Moon size={16} className="text-gray-100"/>
            </div>
        </button>
    )
})
