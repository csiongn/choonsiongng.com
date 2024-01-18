import React from 'react';
import {technologies} from "@/data/technologies";
import TechnologyItem from "@/components/TechnologyItem";

const TechnologiesList: React.FC = () => {
    return (
        <div className="px-12 py-6 my-4">
            <h2 className="text-xl font-semibold mb-4">Technologies I'm Familiar With</h2>
            <div className="flex flex-wrap gap-4">
                {technologies.map(technology => (
                    <TechnologyItem key={technology.name} technology={technology}/>
                ))}
            </div>
        </div>
    );
};
export default TechnologiesList;