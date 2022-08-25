// import { useState } from 'react'

import { projectsData } from '../data'

import Project from './Project'

const Projects = () => {
  return (
    <section className='grid lg:grid-cols-3 gap-y-2 lg:gap-x-20 lg:gap-y-6'>
      {projectsData.map((item) => {
        return <Project item={item} key={item.id}/>
      })}
    </section>
  )
}

export default Projects