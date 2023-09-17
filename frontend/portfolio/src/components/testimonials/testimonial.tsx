import React from 'react'
import {motion} from 'framer-motion'
import { HiChevronLeft,HiChevronRight } from 'react-icons/hi'
import MotionWrap from '../../wrapper/motionWraper'
import Wrap from '../../wrapper/wrap'
import './testimonial.scss'
import { images } from '../../constants/index'

const Testimonial = () =>{
    return(
    <><>
        <div className="app__testimonial-item app__flex">
            <img src={images.graphql} alt="" />
            <div className='app__testimonial-content'>
                <p className="p_text">testing</p>
                <div>
                <h4 className="bold-text">mahender patel</h4>
                <h5 className="p_text">GraphQL</h5>
              </div>
            </div>
            <div className="app__testimonial-btns app__flex">
                <div className="app__flex"><HiChevronLeft /></div>
                <div className="app__flex"><HiChevronRight /></div>
            </div>
        </div>

        <div className="app__testimonial-brands app__flex">
            <motion.div
            whileInView={{opacity:[0,1]}}
            transition={{duration:0.5}}
            >
                <img src={images.asus} alt="" />
            </motion.div>
            <motion.div
            whileInView={{opacity:[0,1]}}
            transition={{duration:0.5}}
            >
                <img src={images.skype} alt="" />
            </motion.div>
            <motion.div
            whileInView={{opacity:[0,1]}}
            transition={{duration:0.5}}
            >
                <img src={images.bolt} alt="" />
            </motion.div>
            <motion.div
            whileInView={{opacity:[0,1]}}
            transition={{duration:0.5}}
            >
                <img src={images.spotify} alt="" />
            </motion.div>

        </div>
        
    </></>
    )
}

export default Wrap(MotionWrap(Testimonial,'app__testimonial'),'testimonials','app__primarybg')
