import React, { useState } from "react";
import './skill.scss'
import { motion } from 'framer-motion'
import Wrap from '../../wrapper/wrap'
import { wrap } from "module";

const Skill =()=>{
    const [experience,Setexperience] = useState()
    const [skill,Setskill] = useState()
    return(
        <>
           <h2 className="head-text">skills & experience</h2>
           <div className="app__skills-container">
            <motion.div
            className='app__skills-list'
            >


            </motion.div>

           </div>
        </>
    )
}

export default Wrap(Skill,'skills')