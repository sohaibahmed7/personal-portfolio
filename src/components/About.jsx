// Importing about-me image
import Image from '../assets/about-me.svg'

const About = () => {
  return (
    <section className="py-12 lg:py-24 bg-gray-800" id='about'>
        <div className="container mx-auto">
            <div className="flex flex-col xl:flex-row gap-24">
                <img className="object-cover h-full w-[300px] lg:w-[566px] mx-auto md:rounded-xl" src={Image} alt="" />
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left mx-auto">
                    <div className="flex flex-col">
                        <h2 className='text-3xl lg:text-5xl font-medium lg:font-extrabold mb-3'>About me 👀</h2>
                        <div className='mb-4'>
                            <p  className='lg:text-2xl mb-2'>Some more information about myself and my goals:</p>
                            <ul className='lg:text-lg list-disc list-inside mb-4'>
                                <li>I am seeking a coop opportunity for Summer 2023</li>
                                <li>Most interested in frontend development</li>
                                <li>I am the current Director of Marketing for McMaster's Computer Science Society</li>
                                <li>Some of my hobbies include working out & playing sports!</li>
                            </ul>
                            {/* link to email */}
                            <p className='lg:text-2xl'>Questions? Contact me at <a className='font-bold underline decoration-gray-500 underline-offset-[7px] hover:text-gray-500 transition-all duration-300' href="mailto:dev.sohaibahmed@gmail.com" target="_blank" rel="noreferrer">dev.sohaibahmed@gmail.com</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About