import { Project } from "@prisma/client"
import { ProjectWithRelations } from "./projectExt"

export interface GlobalStoreState {

    Projects: ProjectWithRelations[]
    setProjects: (newProjects: ProjectWithRelations[]) => void
  }