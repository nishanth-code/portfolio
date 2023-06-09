import React,{useState,useEffect} from 'react'
import {motion} from 'framer-motion'
import './work.scss'
import {AiFillEye,AiFillGithub} from 'react-icons/ai'
import Wrap from '../../wrapper/wrap'

const Work:React.FC = () =>{
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
            {/* {filterWorks.map((item,index)=>(
                <div className="app__work-item app__flex " key={index}>
                    <div className="app__work-img app__flex">
                        <img src={"ccczzc"}alt={"labsun"} />
                        <motion.div
                         whileHover={{opacity:[0,1]}}
                         transition={{ease:'easeInOut',staggerChildren:0.5,duration:0.25}}
                         className="app__hover app__flex"
                         
                        >
                            <a href={"gdsgs"} >
                                 <motion.div
                                 whileInView={{opacity:[0,1]}}
                                      whileHover={{opacity:[1,0.9]}}
                                      transition={{duration:0.25}}
                                      className="app__flex"
                         
                                  >
                                      <AiFillEye />
                                      </motion.div>
                            </a>
                            <a href={"jiojiji"} >
                                 <motion.div
                                 whileInView={{opacity:[0,1]}}
                                      whileHover={{opacity:[1,0.9]}}
                                      transition={{duration:0.25}}
                                      className="app__flex"
                         
                                  >
                                      <AiFillGithub />
                                      </motion.div>
                            </a>
                        </motion.div>
                        
                    </div>
                    </div>
            ))} */}
            </motion.div>
        </>
    )
    
}

export default Wrap(Work,'Work')