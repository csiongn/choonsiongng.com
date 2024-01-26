import React from "react";
import Technology from "@/data/Technology";

const TechnologyItem: React.FC<{technology: Technology}> = ({technology}) => {
    return (
        <span className="bg-gray-300 dark:bg-gray-500 text-gray-500 dark:text-gray-300 rounded-full px-4 py-1">{technology.name}</span>
    )
}
export default TechnologyItem;