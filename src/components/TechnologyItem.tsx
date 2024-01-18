import React from "react";
import Technology from "@/data/Technology";

const TechnologyItem: React.FC<{technology: Technology}> = ({technology}) => {
    return (
        <span className="bg-gray-200 rounded-full px-4 py-1">{technology.name}</span>
    )
}
export default TechnologyItem;