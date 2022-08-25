import {
  HiOutlineX,
  HiMenuAlt3
} from 'react-icons/hi'

import { useState } from "react"
import { navigation } from "../data"

import Socials from "./Socials"

import { motion } from "framer-motion"

import { Link } from "react-scroll"

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false)

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

      <motion.div variants={circleVariants} initial='hidden' animate={isOpen ? 'visible' : 'hidden'} className='w-4 h-4 rounded-full bg-gray-700 fixed top-0 right-0'></motion.div>

      <motion.ul variants={ulVariants} initial='hidden' animate={isOpen ? 'visible' : 'hidden'} className={`${isOpen ? 'right-0' : 'right-full'} fixed top-0 bottom-0 w-full flex flex-col justify-center items-center transition-all duration-300 overflow-hidden`}>

        <div onClick={() => setIsOpen(false)} className="cursor-pointer absolute top-8 right-8">
          <HiOutlineX className='w-10 h-10'/>
        </div>
        {
          navigation.map((item, index) => {
            return <li key={index} className='mb-8'>
              <Link to={item.href} smooth={true} duration={500} offset={-70} className='text-2xl cursor-pointer capitalize'>{item.name}</Link>
            </li>
          })
        }
        <Socials color='text-white'/>
      </motion.ul>
    </nav>
  )
}

export default NavMobile