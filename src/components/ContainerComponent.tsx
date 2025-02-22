"use client"

// REACT & NEXT
import { useRef, useState , useEffect} from "react"
// COMPONENTS
import ArticleComponent from "./ArticleComponent"
import SidebarComponent from "./SidebarComponent"
// TYPES
import { BlogPostWithRelations } from "@/types/projectExt"

export default function ContainerComponent({blogPost} : {blogPost: BlogPostWithRelations | undefined}) {

    // REFERENCES
    const articleRef = useRef<HTMLDivElement>(null)

    // STATES
    const [articleHeight, setArticleHeight] = useState(0)

    // USEEFFECT
    useEffect(() => {

        if(articleRef.current) 
        setArticleHeight(articleRef.current.offsetHeight)

    }, [blogPost])

    return (

        <div className="flex flex-col md:flex-row gap-6 my-8">
            <div className="md:flex-[3]" ref={articleRef}>
                <ArticleComponent blogPost={blogPost}/>
            </div>
            <div className="md:flex-[1]">
                <SidebarComponent articleHeight={articleHeight}/>
            </div>
        </div>
    )
}