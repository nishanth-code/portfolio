import React,{useState,useEffect} from 'react'
import {motion} from 'framer-motion'
import './work.scss'
import {AiFillEye,AiFillGithub} from 'react-icons/ai'
import Wrap from '../../wrapper/wrap'

const Work  :React.FC = () =>{
    const handelWork =(item) =>{
        
    }
    const [activeFilter,SetactiveFilter] = useState('all')
    const [animateCard,SetAnimateCard] = useState({y:0,opacity:1})
    const [works,setWorks] = useState([])
    const [filterWorks,setFilterWorks] = useState()
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
           className="app__portfolio "
        >
            {filterWorks.map((item,index)=>(
                <div className="app__work-item app__flex " key={index}>
                    <div>
                    </div>
            ))}
            </motion.div>
        </>
    )
    
}

export default Wrap(Work,'Work')