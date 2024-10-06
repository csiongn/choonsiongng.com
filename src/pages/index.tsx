import React from "react";
import Image from 'next/image'
import { Inter } from 'next/font/google'
import PageHeader from "@/components/PageHeader";
import TechnologiesList from "@/components/TechnologiesList";
import Project from "@/components/projects/Project";
import ProjectList from "@/components/projects/ProjectList";
import ContactFooter from "@/components/contact/ContactFooter";
import {getProjectsData} from "@/utils/getProjectData";

const inter = Inter({ subsets: ['latin'] })

export async function getStaticProps() {
    const projects = getProjectsData();

    return {
        props: {
            projects,
        },
    };
}

export default function Home({ projects }: { projects: Project[] }) {
  return (
      <div>
          {/* Introduction */}
          <div className="container flex flex-col-reverse md:flex-row px-6 py-6 my-4 mx-auto">
              <div className="md:w-1/2 flex items-center pt-8">
                  <div>
                      <h1 className="text-2xl font-bold mb-4">Choon Siong</h1>
                      <p className="mb-4">Final-year Computer Science at the National University of
                          Singapore</p>
                  </div>
              </div>
              <div className="md:w-1/2 md:justify-end justify-center flex items-center pt-6 pb-2">
                  {/* Insert picture here*/}
              </div>
          </div>
          {/* Technologies */}
          <TechnologiesList/>
          {/* Projects */}
          <div>
              <PageHeader title="Projects" color="bg-green-50 text-green-950 dark:bg-green-950 dark:text-green-50"
                          description="Projects that I did while I was in university"/>
              <ProjectList projects={projects}/>
          </div>
          {/* Contact */}
          <div>
              <PageHeader title="Contact" color="bg-blue-50 text-blue-950 dark:bg-blue-950 dark:text-blue-50"/>
              <ContactFooter />
          </div>
      </div>
  )
}
