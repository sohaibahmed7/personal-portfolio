// icons
import {
    BsLinkedin,
    BsGithub
} from 'react-icons/bs'

// Skill pngs
import SkillIMG1 from './assets/html5.png'
import SkillIMG2 from './assets/css3.png'
import SkillIMG3 from './assets/js.png'
import SkillIMG4 from './assets/reactjs.png'
import SkillIMG5 from './assets/bootstrap.png'
import SkillIMG6 from './assets/tailwindcss.png'
import SkillIMG7 from './assets/python.png'
import SkillIMG8 from './assets/cplus.png'
import SkillIMG9 from './assets/java.png'
import SkillIMG10 from './assets/sql.png'
import SkillIMG11 from './assets/haskell.png'
import SkillIMG12 from './assets/cee.png'

// project svgs
import Project1 from './assets/fitness-app.svg'
import Project2 from './assets/mario-game.svg'
import Project3 from './assets/quran-site.svg'
import Project4 from './assets/python-calculator.svg'
import Project5 from './assets/vending-machine-app.svg'

// Navigation bar
export const navigation = [
    {
        name: 'home',
        href: 'home'
    },
    {
        name: 'about',
        href: 'about'
    },
    {
        name: 'projects',
        href: 'projects'
    },
]

export const social = [
    {
        icon: <BsLinkedin />,
        href: 'https://www.linkedin.com/in/sohaibahmed7/'
    },
    {
        icon: <BsGithub />,
        href: 'https://github.com/sohaibahmed7'
    },
]

export const skillsOne = [
    {
        image: SkillIMG1
    },
    {
        image: SkillIMG2
    },
    {
        image: SkillIMG3
    },
    {
        image: SkillIMG4
    },
    {
        image: SkillIMG5
    },
    {
        image: SkillIMG6
    }
]

export const skillsTwo = [
    {
        image: SkillIMG7
    },
    {
        image: SkillIMG8
    },
    {
        image: SkillIMG9
    },
    {
        image: SkillIMG10
    },
    {
        image: SkillIMG11
    },
    {
        image: SkillIMG12
    }
]

export const projectsData = [
    {
        id: 1,
        image: Project1,
        name: "Workout Application",
        tech: "React, HTML/CSS, Bootstrap",
        href: "https://github.com/sohaibahmed7/react-fitness-app"
    },
    {
        id: 2,
        image: Project2,
        name: "Super Mario Slope Bros.",
        tech: "ELM",
        href: "https://cs1xd3.online/ShowModulePublish?modulePublishId=6f16d3f0-86f4-40ba-a898-30cfaeb5afe3"
    },
    {
        id: 3,
        image: Project3,
        name: "Quran Reading Site",
        tech: "React, HTML/CSS, Bootstrap",
        href: "https://github.com/sohaibahmed7/quran-reading-circle"
    },
    {
        id: 4,
        image: Project4,
        name: "Python Calculator with GUI",
        tech: "Python, Pygame library",
        href: "https://github.com/sohaibahmed7/Python-Calculator"
    },
    {
        id: 5,
        image: Project5,
        name: "C++ Vending Machine",
        tech: "C++",
        href: "https://github.com/sohaibahmed7/Food-Machine"
    }
]