import Image from 'next/image'
import { Inter } from 'next/font/google'
import TechnologiesList from "@/components/TechnologiesList";
import PageHeader from "@/components/PageHeader";
import ProjectList from "@/components/projects/ProjectList";
import ContactFooter from "@/components/ContactFooter";
import React from "react";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <div>
          {/* Introduction */}
          <div className="flex flex-col-reverse md:flex-row pl-6">
              <div className="md:w-1/2 flex items-center justify-center p-6">
                  <div>
                      <h1 className="text-2xl font-bold mb-4">I&apos;m Choon Siong</h1>
                      <p className="mb-4">I&apos;m a final-year Computer Science at the National University of
                          Singapore.</p>
                  </div>
              </div>
              <div className="md:w-1/2 flex items-center justify-center p-6">
                  <Image
                      src="/profile_image.jpg"
                      alt="Profile Image"
                      width={250}
                      height={250}
                      className="rounded-3xl aspect-square object-scale-down"
                  />
              </div>
          </div>
          {/* Technologies */}
          <TechnologiesList/>
          {/* Projects */}
          <div>
              <PageHeader title="Projects" color="bg-green-50 text-green-950"
                          description="Projects that I did (mostly) while I was in university"/>
              <ProjectList/>
          </div>
          {/* Contact */}
          <div>
              <PageHeader title="Contact" color="bg-blue-50 text-blue-950"/>
              <ContactFooter />
          </div>
      </div>
  )
}
