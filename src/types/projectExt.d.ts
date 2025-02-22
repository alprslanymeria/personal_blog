import { BlogPostTag, Category, Comment, Project, ProjectImage, ProjectLink, ProjectTechnology, Tag, Technology , BlogPost} from "@prisma/client"

type CategoryWithRelations = Category & {
    blogPosts: BlogPostWithRelations[]
}

type BlogPostWithRelations = BlogPost & {
    category: String
    comments: CommentWithRelations[]
    blogPostTags: BlogPostTagWithRelations[]
}

type CommentWithRelations = Comment & {
    blogPost: BlogPostWithRelations
}

type TagWithRelations = Tag & {
    blogPostTags: BlogPostTagWithRelations[]
}

type BlogPostTagWithRelations = BlogPostTag & {
    blogPost: BlogPostWithRelations
    tag: TagWithRelations
}


type ProjectWithRelations = Project & {
    ProjectImages: ProjectImageWithRelations[]
    ProjectLinks: ProjectLinkWithRelations[]
    ProjectTechnologies: ProjectTechnologyWithRelations[]
}

type ProjectImageWithRelations = ProjectImage & {
    project: ProjectWithRelations
}

type ProjectLinkWithRelations = ProjectLink & {
    project: ProjectWithRelations
}

type TechnologyWithRelations = Technology & {
    ProjectTechnologies: ProjectTechnologyWithRelations[]
}

type ProjectTechnologyWithRelations = ProjectTechnology & {
    project: ProjectWithRelations
    technology: TechnologyWithRelations
}