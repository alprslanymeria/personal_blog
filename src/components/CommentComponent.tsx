"use client"

// COMPONENTS
import ShowCommentsComponent from "./ShowComments"
import MakeCommentComponent from "./MakeComment"

export default function CommentComponent({blogId} : {blogId: string}) {

    return (

        <>
            <ShowCommentsComponent/>
            <MakeCommentComponent blogId={blogId}/>
        </>
    )
}