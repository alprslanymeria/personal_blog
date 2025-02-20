import { CapsImage, Project } from "@prisma/client"
import { ProjectWithRelations } from "./projectExt"

export interface GlobalStoreState {

    Projects: ProjectWithRelations[]
    Capses: CapsImage[]
    setProjects: (newProjects: ProjectWithRelations[]) => void
    setCaps: (newCaps: CapsImage[]) => void
  }