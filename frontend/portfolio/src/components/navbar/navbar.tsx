import React,{useState} from 'react';
import { HiMenuAlt4,HiX} from 'react-icons/hi';
import {motion} from 'framer-motions';
import './navbar.scss'
import { images }  from '../../constants/index';

const Navbar:React.FC = () =>{
    const [Toggle,setToggle]=useState(false);
    return(
       <nav className="app__navbar">
           <div className="app__navbar-logo">
              
               <img src={images.logo} alt="logo" />
            </div>
            <ul className="app__navbar-links">
            {['Home','About','Contact','Work','skills'].map((item:String|Null)=>(
                <li className="app__flex p-text" key={`link-${item}`} >
                <div />
                <a href={`#${item}`}>{item}</a>
                
                </li>
            
            ))}
            </ul>
            <div className="app__navbar-menu">
                <HiMenuAlt4 onClick={()=> setToggle(true)} />
                {
                Toggle && (
                    <motion.div>
                        WhileInView={{x:[300,0]}}
                        Transition={}
                    </motion.div>
                )}
            </div>
      </nav>
    )
}
export default Navbar;