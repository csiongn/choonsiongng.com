import React from 'react';
import ProjectItem from './ProjectItem';

const ProjectList: React.FC<{ projects?: any[] }> = ({ projects = [] }) => {
    return (
        <div className="container grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full my-4 mx-auto pb-8 gap-x-2 gap-y-8">
            {projects.map(project => (
                <div key={project.id} className="w-full h-full">
                    <ProjectItem key={project.id} project={project} />
                </div>
            ))}
        </div>
    );
}

export default ProjectList;
