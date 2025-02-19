
import './skill.scss'
import { motion } from 'framer-motion'
import Wrap from '../../wrapper/wrap'
import { Tooltip as ReactTooltip } from 'react-tooltip';
import { images } from "../../constants/index";
import MotionWrap from '../../wrapper/motionWraper'


const Skill =()=>{
    // const [experience,Setexperience] = useState([])
    // const [skill,Setskill] = useState([])
    const skills =[{ imgurl:images.node,name:"Node.js"},
        { imgurl:images.react,name:"React"},
        { imgurl:images.git,name:"git"},
        { imgurl:images.api,name:"api"},
        { imgurl:images.python,name:"python"},
        { imgurl:images.typescript,name:"typescript"},
        { imgurl:images.nestjs,name:"nest js"},
        { imgurl:images.go,name:"GO"},
        { imgurl:images.docker,name:"Docker"}

]
const experi =[ 
{name:'Elaysian corptech',year:'2023',role:'Fullstack developer',description:'worked as Full stack developer developed backend with Node and UI with react and worked with google maps api'},
{name:'ebo',year:'2023',role:'Backend developer',description:'worked as a backend developer built REST API was a part of team integrating payment gateways'},
{name:'internship studios',year:'2022',role:'frontend developer',description:'worked as a frontend developer built a cool frontend for a Ecommerce website'},
]
return(
        <>
           <h2 className="head-text">skills & experience</h2>
           <div className="app__skills-container">
           <motion.div className="app__skills-list">
            {skills.map((skil)=>(
            
                <motion.div
                className='app__skills-item app__flex'
                whileInView={{opacity:[0,1]}}
                transition={{duration:0.5}}
                key={skil.name}
                >
                    <div className="app__flex">
                        <img src={skil.imgurl} alt="skill" />
                    </div>
                    <p className="p-text">{skil.name}</p>
    
    
                </motion.div>

            ))}
            </motion.div>
            <motion.div className="app__skills-exp">
            {experi?.map((skil)=>(
                <>
                 <motion.div
                 className="app__skills-exp-item"
                 key={skil.name}
               >
                 <div className="app__skills-exp-year">
                   <p className="bold-text">{skil.year}</p>
                 </div>
            
                
                <motion.div
                className='app__skills-item app__flex'
                whileInView={{opacity:[0,1]}}
                transition={{duration:0.5}}
                data-tooltip
                data-for={skil.name}
                data-tooltip-id={skil.name}
                data-tooltip-content={skil.description}
                key={skil.name}
                >
                    <h4 className="bold-text">{skil.role}</h4>
                    <p className="p-text">{skil.name}</p>
    
    
                </motion.div>
                
                </motion.div>
                <ReactTooltip
                id={skil.name}
                // effect="solid"
                arrowColor="#fff"
                className='skills-tooltip'
                
                />
                   
                </>

            ))}
            </motion.div>

           </div>
        </>
    )
}


export default Wrap(MotionWrap(Skill,'app__skills'),'skills','app__whitebg');