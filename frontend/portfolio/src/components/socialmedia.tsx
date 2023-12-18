import React from 'react'
import {BsTwitter ,BsLinkedin,BsGithub} from 'react-icons/bs'

const SocialMedia:React.FC = ()=>{
    return(
    <div className='app__social'>
<a href='https://x.com/RexNishanth?t=YsxOkLLaEVb12MkMgriAiA&s=09' target='blank' >
        <div>
            <BsTwitter/>
        </div>
        </a>

<a href='https://www.linkedin.com/in/nishanth-v-4897351b9' target='blank' >
          <div>
            <BsLinkedin />
        </div>
        </a>

        <a href='https://github.com/nishanth-code/' target='blank' >
        <div>
            <BsGithub />
        </div>
        </a>
       </div>
        
        
        )
}

export default SocialMedia