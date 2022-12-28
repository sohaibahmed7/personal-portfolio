// Importing banner svg to display and resume to download
import banner from '../assets/hero-banner.svg'
import resume from '../assets/SohaibResume.pdf'

const Hero = () => {
  return (
    <section id='home' className="lg:h-[85vh] flex items-center bg-gray-800 lg:bg-cover lg:bg-center lg-bg-no-repeat py-32 lg:py-0 overflow-hidden">
        <div className="container mx-auto">
            <div className="flex items-center h-full pt-8">
              <div className="flex-1 flex flex-col items-center lg:items-start">
                <p className='text-xl lg:text-2xl mb-[22px] md:pl-5'>Hello, my name is Sohaib Ahmed 👋</p>
                <h1 className=' text-[30px] leading-[44px] md:text-5xl md:leading-tight lg:text-5xl lg:leading-[1.2] font-bold md:tracking-[-2px] md:pl-5'>Aspiring web developer</h1>
                <p className=' pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left md:pl-5'>Studying Computer Science at McMaster University</p>
                {/* Buttons to scroll to projects and download resume */}
                <div className='flex space-x-4 md:pl-5'>
                  <a href="#projects">
                    <button className='btn btn-md rounded-md bg-gray-900 hover:bg-slate-600 md:btn-lg transition-all duration-300 p-2'>View my projects</button>
                  </a>
                  <a href={resume} download="SohaibResume.pdf" target='_blank' rel="noreferrer">
                    <button className='btn btn-md rounded-md bg-gray-900 hover:bg-slate-600 md:btn-lg transition-all duration-300 p-2'>Download my resume</button>
                  </a>
                </div>
              </div>
              <div className="hidden lg:flex flex-1 justify-end items-end h-full">
                <img src={banner} alt="Hero Banner" />
              </div>
            </div>
        </div>
    </section>
  )
}

export default Hero