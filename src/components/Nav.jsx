// Importing navigation links
import { navigation } from '../data'
// Importing link library for smoother scrolling animations
import { Link } from 'react-scroll'

const Nav = () => {
  return (
    <nav>
      <ul className='flex space-x-8 capitalize text-[20px]'>
        {/* Mapping through each navigation link in the array and rendering to the screen */}
        {navigation.map((item, index) => {
          return (
            <li className='hover:text-gray-500 cursor-pointer' key={index}>
              <Link 
                to={item.href} 
                activeClass='active' 
                spy={true} 
                smooth={true} 
                duration={500} 
                offset={-70} 
                className='transition-all duration-300'
                >
                  {item.name}
                </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Nav