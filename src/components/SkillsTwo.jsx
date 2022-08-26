// Importing general skills icons
import { skillsTwo } from "../data"

const SkillsTwo = () => {
    return (
        <section className="bg-gray-900 pt-8 pb-12">
            <div className="container mx-auto">
                <h1 className="text-xl lg:text-3xl text-center mb-6">Other technologies I have worked with...</h1>
                <div className="grid grid-cols-6 md:grid-flow-row">
                    {/* Mapping throuh the array of icons and rendering to the screen */}
                    {skillsTwo.map((skill, index) => {
                        return (
                            <div className="flex items-center justify-center" key={index}>
                                <img className="w-[56px] h-[56px] lg:w-[96px] lg:h-[96px]" src={skill.image} alt="" />
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default SkillsTwo
