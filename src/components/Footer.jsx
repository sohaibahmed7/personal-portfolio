// Importing social icons
import { social } from '../data'

const Footer = () => {
  return (
    <footer className='bg-gray-900 py-6'>
        <div className="container mx-auto md:px-5">
            <div className="flex flex-col md:flex-row space-y-6 md-space-y-0 items-center justify-between">
                <div className="text-3xl flex space-x-6 items-center justify-center">
                    {/* Mapping through the social icons and rendering to the page */}
                    {social.map((item, index) => {
                        return (
                            <a className='hover:text-gray-500 transition-all duration-300' href={item.href} key={index}>
                                {item.icon}
                            </a>
                        )
                    })}
                </div>
                <p>&copy; 2022 Sohaib Ahmed. All rights reserved.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer