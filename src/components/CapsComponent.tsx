"use client"

// REACT & NEXT
import { useState } from "react"
import Image from "next/image"
// STORE
import { GlobalStore } from "@/store/globalStore"

export default function CapsComponent() {

    // STORE
    const {Capses} = GlobalStore()

    // STATES
    const [isOpen, setIsOpen] = useState(false)
    const [selectedImage, setSelectedImage] = useState("")

    // FUNCTIONS
    const handleImageClick = (imageUrl : string) => {

        setSelectedImage(imageUrl)
        setIsOpen(true)
    }

    const closeModal = () => {

        setIsOpen(false)
        setSelectedImage("")
    }

    return (

        <div className="container mx-auto max-w-screen-xl">
            <div className="p-8 min-h-screen">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                    {Capses.map((caps) => (

                        <div
                            key={caps.id}
                            className="group relative bg-white rounded-none overflow-hidden shadow-lg transform transition-all hover:scale-105 hover:shadow-xl"
                            onClick={() => handleImageClick(caps.imageUrl)}
                        >
                            <Image
                                src={caps.imageUrl}
                                alt={`Caps Image ${caps.id}`}
                                width={500}
                                height={300}
                                className="w-full h-60 object-cover group-hover:opacity-80 transition-opacity duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black opacity-40 group-hover:opacity-50 transition-opacity duration-300"></div>
                        </div> 
                    ))}
                </div>
            </div>

            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
                    <div className="relative">
                        <button
                            onClick={closeModal}
                            className="absolute top-0 right-0 text-white p-4 text-2xl"
                        >
                            &times;
                        </button>
                        <Image
                            src={selectedImage}
                            alt="Selected Image"
                            width={1200}
                            height={800}
                            className="max-w-full max-h-screen object-contain"
                        />
                    </div>
                </div>
            )}
        </div>
    )
}