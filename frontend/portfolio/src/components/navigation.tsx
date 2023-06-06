import React from 'react'


const NavigationDots:React.FC = ({active})=>{
    return(
    <div className="app__navigation">
        {['Home','About','Contact','Work','testimonials','skills'].map((item:String|Null,index)=>(
                
                
                <a 
                href={`#${item}`}
                key={item+index}
                className='app__navigation-dot'
                style={ active === item ? {backgroundColor: '#313BAC'}:{}}
                
                 />
                
             
            
            ))}
    </div>
        
        
        )
}

export default NavigationDots