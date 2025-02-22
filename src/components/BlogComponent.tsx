"use client"

// REACT & NEXT
import { useState } from 'react'
// MUI
import { Pagination } from '@mui/material'
import { Stack } from '@mui/material'
// STORE
import { GlobalStore } from '@/store/globalStore'
// COMPONENTS
import BlogContentsComponent from './BlogContentsComponent'

export default function BlogComponent() {

    // STORE
    const {UniqueBlogPosts} = GlobalStore()

    // STATES
    const [currentPage, setCurrentPage] = useState(1)
    const postsPerPage = 3

    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentContents = UniqueBlogPosts.slice(indexOfFirstPost, indexOfLastPost)

    // HANDLE
    const handlePageChange = (event : any, value : number) => setCurrentPage(value)

    return (

        <>
            <BlogContentsComponent currentContents={currentContents}/>

            <Stack spacing={2} mt={2} mb={2} direction={'row'} justifyContent={'center'}>
                <Pagination
                    count={Math.ceil(UniqueBlogPosts.length / postsPerPage)}
                    page={currentPage}
                    onChange={handlePageChange}
                    color="primary"
                />
            </Stack>
        </>
    )
}