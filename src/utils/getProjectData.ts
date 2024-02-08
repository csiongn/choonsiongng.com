import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export function getProjectsData() {
    // Define the directory path for Markdown files
    const projectsDirectory = path.join(process.cwd(), 'projects');
    const projectFilenames = fs.readdirSync(projectsDirectory);

    const projects = projectFilenames.map(filename => {
        const filePath = path.join(projectsDirectory, filename);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data } = matter(fileContents);

        return {
            id: filename.replace(/\.mdx$/, ''), // Remove .mdx suffix from filename
            ...data,
        };
    });

    return projects;
}
