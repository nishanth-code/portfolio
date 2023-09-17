import React,{useState} from 'react'
import {motion} from 'framer-motion'
import { images }  from '../../constants/index';
import './work.scss'
import {AiFillEye,AiFillGithub} from 'react-icons/ai'
import Wrap from '../../wrapper/wrap'
import MotionWrap from '../../wrapper/motionWraper'

const Work:React.FC = () =>{
    // const handleWork = (item) => {
    //     setActiveFilter(item);
    //     setAnimateCard([{ y: 100, opacity: 0 }]);
    
    //     setTimeout(() => {
    //       setAnimateCard([{ y: 0, opacity: 1 }]);
    
    //       if (item === 'All') {
    //         setFilterWork(works);
    //       } else {
    //         setFilterWork(works.filter((work) => work.tags.includes(item)));
    //       }
    //     }, 500);
    //   };
    
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
            {['web Devlopment','Web3','IOT','all'].map((item,index)=>(
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
           className="app__work-portfolio "
        >
             {/* {filterWork.map((work, index) => ( */}
                 <div className="app__work-item app__flex " >
                    <div className="app__work-img app__flex">
                        <img src={images.about03}alt={"labsun"} />{/* back*/}
                        <motion.div
                         whileHover={{opacity:[0,1]}}
                         transition={{ease:'easeInOut',staggerChildren:0.5,duration:0.25}}
                         className="app__work-hover app__flex"
                         
                        >
                            <a href={"gdsgs"} >{/* back*/}
                                 <motion.div
                                 whileInView={{opacity:[0,1]}}
                                      whileHover={{opacity:[1,0.9]}}
                                      transition={{duration:0.25}}
                                      className="app__flex"
                         
                                  >
                                      <AiFillEye />
                                      </motion.div>
                            </a>
                            <a href={"jiojiji"} >{/* back*/}
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
                    <div className='app__work-content app__flex'>
                        {/* back*/}<h4 className='bold-text'>sample text</h4> 
                        {/* back*/}<p className='p-text' style={{marginTop:10}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo commodi voluptas nam ab animi reiciendis expedita eum earum nulla alias porro odio, cum ratione consequatur dolorum numquam. Esse, impedit sapiente.</p>
                         <div className="app__work-tag app__flex">

                           {/* back*/} <p className="p_text">testing</p>
                         </div>


                    </div>

                </div>
                
                    
           
            
        {/* ))} */}
        </motion.div> 
        </>
    )
    
}

export default Wrap(MotionWrap(Work,'app__works'),'Work','app__primarybg');