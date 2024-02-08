import React from 'react';
import ProjectList from '@/components/projects/ProjectList';
import PageHeader from "@/components/PageHeader";
import {getProjectsData} from "@/utils/getProjectData";

export async function getStaticProps() {
    const projects = getProjectsData();

    return {
        props: {
            projects,
        },
    };
}

const Projects: React.FC<{ projects: any[] }> = ({ projects }) => {
    return (
        <div>
            <PageHeader title="Projects" color="bg-green-50 text-green-950 dark:bg-green-950 dark:!text-green-950"
                        description="Projects that I did while I was in university"/>
            <ProjectList projects={projects} />
        </div>
    );
}

export default Projects;
