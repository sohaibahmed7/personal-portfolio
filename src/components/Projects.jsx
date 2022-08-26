// Importing project information (image, name, technologies used)
import { projectsData } from '../data'

// Importing component to form the design of each project
import Project from './Project'

const Projects = () => {
  return (
    <section className='grid lg:grid-cols-3 gap-y-2 lg:gap-x-20 lg:gap-y-6'>
      {/* Mapping throuh the array projects and rendering individual project components to the page*/}
      {projectsData.map((item) => {
        return <Project item={item} key={item.id}/>
      })}
    </section>
  )
}

export default Projects