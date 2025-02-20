import { GlobalStoreState } from "@/types/globalStore"
import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"

export const GlobalStore = create<GlobalStoreState>()(
   
    persist((set) => ({

        Projects: [],

        setProjects: (newProjects) => set((state) => ({
            Projects: newProjects
        })),

    }), 
    
    {
        name: "blog-global-store",
        storage: createJSONStorage(() => sessionStorage)
    }
))
