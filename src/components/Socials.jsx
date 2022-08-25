import { social } from "../data"

const Socials = () => {
  return (
    <ul className="flex space-x-6">
      {social.map((item, index) => {
        return <li className='flex justify-center items-center hover:text-gray-500 transition-all duration-300' key={index}>
          <a className='text-[20px]' href={item.href} target="_blank" rel="noreferrer">
            {item.icon}
          </a>
        </li>
      })}
    </ul>
  )
}

export default Socials