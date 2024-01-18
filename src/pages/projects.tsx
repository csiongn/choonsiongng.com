import React from 'react';
import ProjectList from '@/components/projects/ProjectList';
import PageHeader from "@/components/PageHeader";

const Projects: React.FC = () => {
    return (
        <div>
            <PageHeader title="Projects" color="bg-green-50 text-green-950"
                        description="Projects that I did (mostly) while I was in university"/>
            <ProjectList />
        </div>
    );
}

export default Projects;
