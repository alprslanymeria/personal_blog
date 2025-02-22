"use client"

// REACT & NEXT
import Link from "next/link"
// ICONS
import LinkedinIcon from "../../public/icons/linkedinIcon"
import TwitterIcon from "../../public/icons/twitterIcon"
import GithubIcon from "../../public/icons/githubIcon"

export default function LinkComponent() {
    return (

        <div className="flex justify-center md:justify-start space-x-4">
          <Link href="https://www.linkedin.com/in/idrisalparslan/" target="_blank" className="text-blue-600 hover:text-blue-800">
            <LinkedinIcon color="blue"/>
          </Link>
          <Link href="https://twitter.com" target="_blank" className="text-blue-400 hover:text-blue-600">
            <TwitterIcon color="black"/>
          </Link>
          <Link href="https://github.com/alprslanymeria" target="_blank" className="text-pink-500 hover:text-pink-700">
            <GithubIcon color="pink"/>
          </Link>
        </div>
    )
}