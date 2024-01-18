import React from 'react';
import Project from "@/data/Project";

const ProjectItem: React.FC<{ project: Project }> = ({ project }) => {
    return (
        <div className="max-h-sm h-full rounded overflow-hidden border-gray-200 border-2 bg-white m-4">
            {project.image && (
                <img
                    className="w-full"
                    src={project.image}
                    alt={`Image for ${project.title}`}
                />
            )}
            <div className="px-6 py-4 w-full" >
                <div className="font-bold text-xl mb-2">{project.title}</div>
                <p className="text-gray-700 text-base">
                    {project.description}
                </p>
            </div>
        </div>
    );
};

export default ProjectItem;
