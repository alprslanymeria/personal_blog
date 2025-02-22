"use client"

// REACT & NEXT
import { useState, useEffect, useActionState } from "react"
import Image from "next/image"
// ACTIONS
import { GetAvatarImages } from "@/actions/Avatar"
import { CreateComment, GetCommentsById } from "@/actions/Comment"
// STORE
import { GlobalStore } from "@/store/globalStore"
// COMPONENTS
import ShowErrorComponent from "./ShowErrorComponent"

export default function MakeCommentComponent({blogId} : {blogId: string}) {

    // STORE
    const {Avatars, setAvatars, setComments} = GlobalStore()

    // STATES
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string>("")
    const [errorDetails, setErrorDetails] = useState<string>("")
    const [selectedAvatar, setSelectedAvatar] = useState<any>("")

    // ACTIONS
    const [state, formAction, isPending] = useActionState(CreateComment, undefined)

    // USEEFFECT
    useEffect(() => {

        const GET = async () => {

            const response = await GetAvatarImages()

            if(response?.status == 500) {
                setError(response?.message || "")
                setErrorDetails(response?.details || "")
                setIsLoading(false)
                return
            }

            setAvatars(response?.data)
            setIsLoading(false)
        }

        GET()

    }, [])

    // UPDATE COMMENTS
    useEffect(() => {

        const GET = async () => {
        
            const response = await GetCommentsById(blogId)

            if(response?.status == 500) {
                setError(response?.message || "")
                setErrorDetails(response?.details || "")
                setIsLoading(false)
                return
            }

            setComments(response?.data)
            setIsLoading(false)
        }

        GET()

    }, [blogId, isPending])

    if(isLoading) return <></>
        
    if(error && error !== "") return <ShowErrorComponent error={error} errorDetails={errorDetails}/>

    return (

        <div className="p-4 max-w-2xl mx-auto text-center">

            <form action={formAction}>

                {/* CHOOSE AVATAR */}
                <div className="mb-4">
                    <div className="flex justify-center gap-4 flex-wrap">
                        {Avatars.map((avatar) => (

                            <div
                                key={avatar.id}
                                className={`cursor-pointer ${selectedAvatar === avatar.imageUrl ? 'border-4 border-blue-500' : ''}`}
                                onClick={() => setSelectedAvatar(avatar.imageUrl)}
                            >
                                <Image
                                    src={avatar.imageUrl}
                                    alt = {`Avatar ${avatar.id + 1}`}
                                    width={100}
                                    height={100}
                                    className="w-20 h-20 rounded-full"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* COMMENT */}
                <div className="mb-4">
                    <textarea
                        name="content" 
                        id="content"
                        rows={4}
                        placeholder="Comment here"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>

                {/* HIDDEN INPUTS */}
                <input type="hidden" name="selectedAvatar" value={selectedAvatar} />
                <input type="hidden" name="blogId" value={blogId} />


                {/* SUBMIT */}
                <button
                    type="submit"
                    className="py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                    Comment
                </button>
                
                {/* FORM STATUS */}
                <div
                    className={`mt-4 p-2 rounded-md text-center text-sm ${
                        isPending ? 'bg-yellow-100 text-yellow-800' : ''
                    }`}
                >
                    {isPending ? (
                        <div className="flex justify-center items-center text-black">
                            <div className="w-4 h-4 border-4 border-t-transparent border-blue-500 rounded-full animate-spin mr-2"/>
                        Loading...
                        </div>
                    ) : state != null ? (
                        state.status == 200 ? 'Comment başarılı!' : state.details
                    ) : ''}
                </div>

            </form>
        </div>
    )
}