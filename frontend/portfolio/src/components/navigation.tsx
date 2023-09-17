
type localparam ={
    active:string
}

const NavigationDots= ({active}:localparam)=>{
    return(
    <div className="app__navigation">
        {['Home','About','Contact','Work','testimonials','skills'].map((item,index)=>(
                
                
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