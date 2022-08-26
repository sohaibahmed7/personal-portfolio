// Import technical skills icons 
import { skillsOne } from "../data"

const Skills = () => {
  return (
    <section className="bg-gray-900 py-12">
        <div className="container mx-auto">
            <div className="grid grid-cols-6 md:grid-flow-row">
                {/* Mapping throuh the array of icons and rendering to the screen */}
                {skillsOne.map((skill, index) => {
                    return (
                        <div className="flex items-center justify-center" key={index}>
                            <img src={skill.image} alt="" />
                        </div>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default Skills