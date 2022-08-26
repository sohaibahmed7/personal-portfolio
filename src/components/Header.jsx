// Importinf useState and useEffect to set background color of header
import { useState, useEffect } from "react"
// Importing components
import Nav from "./Nav"
import NavMobile from "./NavMobile"
import Socials from "./Socials"

const Header = () => {
    // Setting background color
    const [bg, setBg] = useState(false)

    // Changing background color based on the how much the user scrolls
    useEffect(() => {
        window.addEventListener('scroll', () => {
            return window.scrollY > 50 ? setBg(true) : setBg(false)
        })
    })

    return (
        // Updating the background color of the header based on scroll
        <header className={`${bg ? 'bg-gray-900 h-20' : 'h-24' } flex items-center fixed top-0 w-full z-10 transition-all duration-300 px-3`}>
            <div className="container mx-auto h-full flex items-center justify-between">
                <a href="#top">
                    <h1>Sohaib's Portfolio</h1>
                </a>
                {/* Only displaying on large screen sizes */}
                <div className="hidden lg:block">
                    <Nav />
                </div>
                {/* Only displaying on large screen sizes */}
                <div className="hidden lg:block">
                    <Socials />
                </div>
                {/* Only displaying on medium of small screen sizes */}
                <div className="lg:hidden">
                    <NavMobile />
                </div>
            </div>
        </header>
    )
}

export default Header