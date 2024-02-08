import React from 'react';
import Project from "./Project";
import Link from "next/link";

const ProjectItem: React.FC<{ project: Project }> = ({ project }) => {
    const projectUrl = `/projects/${project.id}`;

    return (
        <Link href={projectUrl}>
            <div className="hover:bg-gray-100 dark:bg-gray-600 dark:hover:bg-gray-500 max-h-sm h-full rounded overflow-hidden border-2 dark:border-gray-700 dark:drop-shadow-sm m-4">
                {project.image && (
                    <img
                        className="w-full"
                        src={project.image}
                        alt={`Image for ${project.title}`}
                    />
                )}
                <div className="px-6 py-4 w-full" >
                    <p className="font-bold text-xl mb-2">{project.title}</p>
                    <p className="text-base">
                        {project.description}
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default ProjectItem;
