import { Project, ProjectImage, ProjectLink, ProjectTechnology, Technology } from "@prisma/client"


type ProjectTech = ProjectTechnology & {
    technology: Technology
}

type ProjectWithRelations = Project & {
    ProjectImages: ProjectImage[]
    ProjectLinks: ProjectLink[]
    ProjectTechnologies: ProjectTech[]
}