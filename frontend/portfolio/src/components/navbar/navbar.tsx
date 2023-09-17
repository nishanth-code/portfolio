import React,{useState} from 'react';
import { HiMenuAlt4,HiX} from 'react-icons/hi';
import {motion} from 'framer-motion';
import './navbar.scss'
import { images }  from '../../constants/index';

const Navbar:React.FC = () =>{
    const [toggle,setToggle]=useState<boolean>(false);
    return(
       <nav className="app__navbar">
           <div className="app__navbar-logo">
              
               <img src={images.logo} alt="logo" />
            </div>
            <ul className="app__navbar-links">
            {['Home','About','Contact','Work','skills'].map((item:String|null)=>(
                <li className="app__flex p-text" key={`link-${item}`} >
                <div />
                <a href={`#${item}`}>{item}</a>
                
                </li>
            
            ))}
            </ul>
            <div className="app__navbar-menu">
                <HiMenuAlt4 onClick={()=> setToggle(true)} />
                {toggle && (
                    <motion.div
                        WhileInView={{x:[300,0]}}
                        Transition={{duration:0.95,ease:'easeout'}}
                        >
                            <HiX onClick={()=> setToggle(false)} />
                            <ul className="app__navbar-links">
                            {['Home','About','Contact','Work','skills'].map((item:String)=>(
                                   <li className="app__flex p-text" key={item.toString()} >
                                  <a href={`#${item}`} onClick={()=> setToggle(false)}>{item}</a>
                                     </li>
                           
            
                            ))}
                             </ul>
                    </motion.div>
                )}
            </div>
      </nav>
    )
}
export default Navbar;