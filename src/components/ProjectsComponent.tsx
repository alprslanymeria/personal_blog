"use client"

// STORE
import { GlobalStore } from "@/store/globalStore"
// COMPONENTS
import ProjectCardComponent from "./ProjectCardComponent"
// TYPES
import { ProjectWithRelations } from "@/types/projectExt"

export default function ProjectsComponent() {

    // STORE
    const {Projects} = GlobalStore()

    return (

        <section className="py-12">
            <h2 className="text-4xl font-bold text-center mb-8">Projelerim</h2>
            <div className="space-y-8">

                {Projects.map((project : ProjectWithRelations) => (
                    <ProjectCardComponent key={project.id} project={project}/>
                ))}
            </div>
        </section>
    )
}


// PROJECTS ÖRNEK VERİ