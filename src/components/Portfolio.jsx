// Importing component to render all projects to the page
import Projects from '../components/Projects'

const Portfolio = () => {
  return (
    <section id="projects" className='py-12 lg:py-24 bg-gray-800 min-h-[1400px]'>
        <div className="container mx-auto">
            <div className="flex-flex-col items-center text-center">
                <h2 className='text-3xl lg:text-5xl font-medium lg:font-extrabold mb-3'>Some of my projects 👨‍💻</h2>
                <p className='md:text-xl md:mx-auto mb-4 lg:mb-8 max-w-[520px]'>Click on any of these projects to view their code!</p>
            </div>
            {/* Renders the projects to the screen */}
            <Projects />
        </div>
    </section>
  )
}

export default Portfolio