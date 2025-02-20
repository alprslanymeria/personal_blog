// REACT & NEXT
import Link from "next/link"
// COMPONENTS
import BioComponent from "@/components/BioComponent"
import NavbarComponent from "@/components/NavbarComponent"
import SubscriberComponent from "@/components/SubscriberComponent"

export default function HomePage() {

  const linkClasses = "text-[#FFC96B] font-bold hover:text-gray-500"

  // NAVBAR LINKS
  const links = [
    <nav className="hidden md:flex space-x-12">
      <Link key="philosophy" href="/philosophy" className={linkClasses}>Philosophy</Link>
      <Link key="film" href="/film" className={linkClasses}>Film</Link>
      <Link key="music" href="/music" className={linkClasses}>Music</Link>
      <Link key="software" href="/software" className={linkClasses}>Software</Link>
      <Link key="book" href="/book" className={linkClasses}>Book</Link>
    </nav>
  ]
  
  return (

    <div className="container mx-auto max-w-screen-xl">
      <NavbarComponent links={links}/>
      <BioComponent/>
      <SubscriberComponent/>
    </div>

  )
}