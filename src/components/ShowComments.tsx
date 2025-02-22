"use client"

// REACT & NEXT
import Image from "next/image"
// STORE
import { GlobalStore } from "@/store/globalStore"

export default function ShowCommentsComponent() {

    // STORE
    const {Comments} = GlobalStore()

    if (!Comments || Comments.length === 0) return <p></p>;
    

    return (

        <div className="space-y-6 px-6">
            <h2 className="text-2xl font-semibold mb-4">Comments</h2>
            {Comments.map((comment) => (

                <div
                    key={comment.commentId}
                    className="p-4 flex gap-4 items-start"
                >
                    <Image
                        src={comment.avatar}
                        alt="Avatar"
                        width={100}
                        height={100}
                        className="w-20 h-20 rounded-full border object-cover overflow-hidden"
                    />

                    <div className="flex-1">
                        <p className="text-sm text-gray-500 mb-2">
                            {new Date(comment.createdAt).toLocaleString()}
                        </p>
                        <p className="text-md font-medium">{comment.content}</p>
                    </div>

                </div>

            ))}
        </div>
    )
}