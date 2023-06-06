import React,{useState,useEffect} from 'react';
import { motion } from 'framer-motion';
import './about.scss';
import { images }  from '../../constants/index';
import Wrap from '../../wrapper/wrap'

const About:React.FC = ()=>{
     const abouts = [
            {title:'Web Development',descreption:'iam a fullStack web developer .',imgUrl:images.about01},
             {title:'Iot',descreption:'I build on raspberry pi ,python .',imgUrl:images.about02},
             {title:'Web3',descreption:'I am a web 3 enthusiast making my space into web3 decentralized system.',imgUrl:images.about03},
             {title:'cybersecurity',descreption:'my journey started with the field of cyber security end of the it is the main concern of all application.',imgUrl:images.about04},
             
             
        ]
    return(
       
        <>
        <h2 className="head-text">
            I Know that
            <span> Good Code </span>
            means<span> Good Buisness </span>
        </h2>
        <div className="app__profiles">
            {abouts.map((about,index)=>(
                <motion.div
                whileInView={{opacity:1}}
                whileHover={{scale:1.1}}
                transition={{duration:1,type:'tween'}}
                className="app__profile-item"
                key={about.title + index}
                >
                    <img src={about.imgUrl} alt={about.title} />
                    <h2 className="bold-text" style={{marginTop:20}}>{about.title}</h2>
                    <p className="p-text" style={{marginTop:10}}>{about.descreption}</p>
                    
                      
               </motion.div>
            ))}
        </div>
        </>
    );
};
export default Wrap(About,'about');