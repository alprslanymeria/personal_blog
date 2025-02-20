"use client"

// REACT & NEXT
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
// TYPES
import { ProjectWithRelations } from "@/types/projectExt"

export default function ProjectCardComponent({project} : {project: ProjectWithRelations}) {
    
    // STATES
    const [showFullContent, setShowFullContent] = useState(false)
    
    return (

        <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6">
            
            {/* PROJECT NAME */}
            <h3 className="text-black text-2xl font-semibold mb-4">{project.name}</h3>

            {/* PROJECT DESCRIPTION */}
            <p className="text-gray-700 mb-4 text-justify">
                {showFullContent ? project.content : `${project.content.substring(0, 250)}...`}
            </p>

            {/* SHOW LESS / SHOW MORE */}
            <div className="flex justify-center">
                <button
                    onClick={() => setShowFullContent(!showFullContent)}
                    className="text-blue-500 hover:text-blue-700 text-sm font-medium underline"
                >
                    {showFullContent ? "Show Less" : "Read More"}
                </button>
            </div>

            {/* IMAGES */}
            <div className="carousel rounded-box flex space-x-4 mt-4">
                {project.ProjectImages.map((image) => (

                    <div key={image.id} className="carousel-item flex-shrink-0 w-72 h-48 relative">
                        <Image
                            src={image.imageUrl}
                            alt={project.name}
                            fill
                            className="object-cover rounded-lg"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                ))}
            </div>

            {/* TECHNOLOGIES */}
            <div className="flex items-center space-x-2 mb-4 mt-4">
                {project.ProjectTechnologies.map((tech) => (
                    <Image
                        key={tech.technology.id}
                        src={tech.technology.icon}
                        alt={tech.technology.name}
                        width={32}
                        height={32}
                        className="rounded-full"
                        title={tech.technology.name}
                    />
                ))}
            </div>

            {/* LINKS */}
            <div className="flex flex-wrap gap-4 mt-4">
                {project.ProjectLinks.map((link) => (
                    <Link
                        key={link.id}
                        href={link.linkUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 text-white bg-blue-500 rounded-lg text-sm font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                    >
                        {link.name}
                    </Link>
                ))}
            </div>
        </div>
    )
}