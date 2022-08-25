import { useState, useEffect } from "react"
import Nav from "./Nav"
import NavMobile from "./NavMobile"
import Socials from "./Socials"

const Header = () => {
    const [bg, setBg] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            return window.scrollY > 50 ? setBg(true) : setBg(false)
        })
    })

    return (
        <header className={`${bg ? 'bg-gray-900 h-20' : 'h-24' } flex items-center fixed top-0 w-full z-10 transition-all duration-300 px-3`}>
            <div className="container mx-auto h-full flex items-center justify-between">
                <a href="#top">
                    <h1>Sohaib's Portfolio</h1>
                </a>
                <div className="hidden lg:block">
                    <Nav />
                </div>
                <div className="hidden lg:block">
                    <Socials />
                </div>
                <div className="lg:hidden">
                    <NavMobile />
                </div>
            </div>
        </header>
    )
}

export default Header