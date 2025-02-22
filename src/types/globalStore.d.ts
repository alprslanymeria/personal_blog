import { BlogPost, CapsImage, Category, Project, Avatar } from "@prisma/client"
import { BlogPostWithRelations, CategoryWithRelations, CommentWithRelations, ProjectWithRelations } from "./projectExt"

export interface GlobalStoreState {

    Projects: ProjectWithRelations[] 
    Capses: CapsImage[]
    AllBlogPosts: BlogPostWithRelations[]
    UniqueBlogPosts: BlogPostWithRelations[]
    Category : string
    Comments : CommentWithRelations[]
    Avatars: Avatar[]
    setProjects: (newProjects: ProjectWithRelations[]) => void
    setCaps: (newCaps: CapsImage[]) => void
    setAllBlogPosts: (newBlogPosts: BlogPostWithRelations[]) => void
    setUniqueBlogPosts: (newBlogPosts: BlogPostWithRelations[]) => void
    setCategory: (newCategory: string) => void
    setComments: (newComments: CommentWithRelations[]) => void
    setAvatars: (newAvatars: Avatar[]) => void
  }