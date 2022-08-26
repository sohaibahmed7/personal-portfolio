// Importing navigation icons
import {
  HiOutlineX,
  HiMenuAlt3
} from 'react-icons/hi'


import { useState } from "react"
// Importing the navigation links
import { navigation } from "../data"

// Importing component to display social media icons to the navigation menu
import Socials from "./Socials"

// Importing installed packages to deal with navigation menu animations
import { motion } from "framer-motion"
import { Link } from "react-scroll"

const NavMobile = () => {
  // useState which determines whether or not the menu has been opened
  const [isOpen, setIsOpen] = useState(false) 

  // Creating animations for opening and closing the navigation menu
  const circleVariants = {
    hidden: {
      scale: 0
    },
    visible: {
      scale: 180,
      transition: {
        type: 'spring',
        stiffness: 160,
        damping: 60
      }
    }
  }

  const ulVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1
      }
    }
  }

  return (
    <nav className="relative">
      <div onClick={() => setIsOpen(true)} className="cursor-pointer">
        <HiMenuAlt3 className='w-10 h-10' />
      </div>

      {/* Animation is run and menu is visible when navigation icon is pressed */}
      <motion.div variants={circleVariants} initial='hidden' animate={isOpen ? 'visible' : 'hidden'} className='w-4 h-4 rounded-full bg-gray-700 fixed top-0 right-0'></motion.div>

      <motion.ul variants={ulVariants} initial='hidden' animate={isOpen ? 'visible' : 'hidden'} className={`${isOpen ? 'right-0' : 'right-full'} fixed top-0 bottom-0 w-full flex flex-col justify-center items-center transition-all duration-300 overflow-hidden`}>

        {/* When the menu is opened, an X icon is rendered to the screen which can close the menu */}
        <div onClick={() => setIsOpen(false)} className="cursor-pointer absolute top-8 right-8">
          <HiOutlineX className='w-10 h-10'/>
        </div>
        {/* Mapping throuh the array of nav items and rendering to the screen */}
        {
          navigation.map((item, index) => {
            return <li key={index} className='mb-8'>
              <Link to={item.href} smooth={true} duration={500} offset={-70} className='text-2xl cursor-pointer capitalize'>{item.name}</Link>
            </li>
          })
        }
        {/* Renders social icons to the screen */}
        <Socials />
      </motion.ul>
    </nav>
  )
}

export default NavMobile