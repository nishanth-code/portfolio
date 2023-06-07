import React,{useState} from 'react'
import {motion} from 'framer-motion'
import './work.scss'
import Wrap from '../../wrapper/wrap'

const Work  :React.FC = () =>{
    const handelWork =(item) =>{
        
    }
    const [activeFilter,SetactiveFilter] = useState('all')
    return(
        <>
            <h2 className="head-text">
            my
            <span> creative </span>
            portfolio
        </h2>
        <div className="app__work-filter">
            {['web Devlopment','IOT','all'].map((item,index)=>(
                <div
                  key={index}
                  onClick={() => handelWork(item)}
                  className={` app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active':''}`}
                >
                    {item}
                </div>
            ))}
            
        </div>
        <motion.div
           animate={animateCard}
           transition={{duration:0.5,delayChildren:0.5}}
           className="app__portfolio  "
        >
            </motion.div>
        </>
    )
    
}

export default Wrap(Work,'Work')