import React from 'react';
import { images }  from '../../constants/index';
import {motion} from 'framer-motion';
import './header.scss'


const Header:React.FC = ()=>{
    const scaleVarients ={
        whileInView:{
            scale:[0,1],
            opacity:[0,1],
            transition:{
                duration:1,
                ease:'easeInOut'
            }
        }
    }
    return(
  
        <div id="home" className="app__header app_flex">
            <motion.div
            whileInView={{x:[-100,0],opacity:[0,1]}}
            transition={{duration:0.5}}
            className="app__header-info"
            >
                <div className="app__header-badge">
                    <div className="app__flex badge-cmp">
                        <span>🤟</span>
                        <div style={{marginLeft:20}}>
                            <p className="p-text">Hello ,I am </p>
                            <h1>Nishanth</h1>
                        </div>
                    </div>
                    <div className="tag-cmp">
                         <p className="p-text">web developer </p>
                          <p className="p-text">IOT </p>
                    </div>
                </div>
            </motion.div>
             <motion.div
            whileInView={{opacity:[0,1]}}
            transition={{duration:0.5,delayChildren:0.5}}
            className="app__header-img"
            >
                <img src={images.profile} alt="profile_pic" />
                <motion.img 
                  whileInView={{scale:[0,1]}}
                  transition={{duration:1,ease:'easeInOut'}}
                  src={images.circle}
                  className="overlay_circle"
                />
                    
                
                
                
            </motion.div>
            <motion.div
            varient={scaleVarients}
            whileInView={scaleVarients.whileInView}
            className="app__header-circles"
            >
                {[images.node,images.typescript,images.sass,images.vite].map((circle,key)=>(
                    <div className="circle-cmp app__flex" key={`circle-${key}`}>
                        <img src={circle} alt="circle" />
                    </div>
                ))}
                
            </motion.div>
        </div>
        
    );
};
export default Header;