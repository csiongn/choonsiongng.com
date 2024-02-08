import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

import { useRouter } from 'next/router';

const BackButton = () => {
    const router = useRouter();
    const goBack = () => router.back();

    return (
        <button onClick={goBack} className='rounded hover:bg-gray-100 dark:hover:bg-gray-500 text-sm font-medium text-gray dark:text-white p-2 mb-2 '>
            ← Back
        </button>
    );
};

export async function getStaticPaths() {
    // Read Markdown files from a directory
    // Return paths for static generation
    const projectsDirectory = path.join(process.cwd(), 'projects');
    const projectFileNames = fs.readdirSync(projectsDirectory);

    // Generate an array of params for each project file
    const paths = projectFileNames.map((fileName) => ({
        params: { project: fileName.replace(/\.mdx$/, '') },
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({params}: {params: {project: string}}) {
    // Read and process the Markdown file
    const fullPath = path.join(process.cwd(), 'projects', `${params.project}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Read the markdown and ignore the front matter while extracting the contents
    const { content} = matter(fileContents);

    // Parse the markdown contents into html
    const processedContent = await remark()
        .use(html)
        .process(content);
    const contentHtml = processedContent.toString();

    return { props: { source: contentHtml } };
}

function Project({ source }: {source: string}) {
    // Render markdown as html
    // https://tailwindcss.com/docs/typography-plugin
    // https://react.dev/reference/react-dom/components/common#dangerously-setting-the-inner-html
    return (
        <article className="container mx-auto p-4">
            <BackButton />
            <div className="prose max-w-none dark:prose-invert" dangerouslySetInnerHTML={{ __html: source }} />
        </article>
    );
}

export default Project;
