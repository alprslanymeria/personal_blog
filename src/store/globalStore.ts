import { GlobalStoreState } from "@/types/globalStore"
import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"

export const GlobalStore = create<GlobalStoreState>()(
   
    persist((set) => ({

        Projects: [],
        Capses: [],
        AllBlogPosts: [],
        UniqueBlogPosts: [],
        Category: "",
        Comments: [],
        Avatars: [],

        setProjects: (newProjects) => set((state) => ({
            Projects: newProjects
        })),

        setCaps: (newCaps) => set((state) => ({
            Capses: newCaps
        })),

        setAllBlogPosts: (newBlogPosts) => set((state) => ({
            AllBlogPosts: newBlogPosts
        })),

        setUniqueBlogPosts: (newBlogPosts) => set((state) =>  ({
            UniqueBlogPosts: newBlogPosts
        })),

        setCategory: (newCategory) => set((state) => ({
            Category: newCategory
        })),

        setComments: (newComments) => set((state) => ({
            Comments: newComments
        })),

        setAvatars: (newAvatars) => set((state) => ({
            Avatars: newAvatars
        }))

    }), 
    
    {
        name: "blog-global-store",
        storage: createJSONStorage(() => sessionStorage)
    }
))
