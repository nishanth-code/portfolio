import './footer.scss'
import MotionWrap from '../../wrapper/motionWraper'
import Wrap from '../../wrapper/wrap'
import { images } from '../../constants/index'
import React,{ useState } from 'react'
import { AiOutlineLoading } from 'react-icons/ai'
interface formData{
    name:string,
    email:string,
    message:String
}
type submited={
    submit:boolean
}

const Footer = () =>{
    const [formdata,setformdata]=useState<formData>({name:'',email:'',message:''})
    const [formsubmit,setFormsubmit]=useState<submited['submit']>(false)
    const [loading,setloading]=useState<submited['submit']>(false)
    
    const handleSubmit = ():void=>{
        
        setloading(!loading)

    }
    const handleChange = (e):void =>{
        console.log(e.target.value)
           
    }
    return(
        <>
        <h2 className='head-text'>Grab a Cup of Coffee and Let's Chat</h2>
        <div className="app__footer-cards">
            <div className="app__footer-card">
                <img src={images.email} alt="email" />
                <a href="mailto:nishanthnavneeth517@gmail.com" className='p-text'>nishanthnavneeth517@gmail.com</a>
            </div>
            <div className="app__footer-card">
                <img src={images.mobile} alt="mobile" />
                <a href="tel:+918431880148">+918431880148</a>
            </div>
        </div>
        <div className="app__footer-form app__flex">
            <div className="app__flex">
                <input type="text" name="form['name']" placeholder='your name'className='p-text' onChange={handleChange} />
            </div>
            <div className="app__flex">
                <input type="email" name="form['email']" placeholder='your email 'className='p-text' />
            </div>
            <div className="">
                <textarea 
                className='p-text'
                placeholder='your message'
                name="form['message']"/>


                
            </div>
            <button type="button" className='p-text' onClick={handleSubmit}>{loading?'sending':'send'}</button>
        </div>
        </>
    )
}

export default Wrap(MotionWrap(Footer,'app__footer'),'Contact','app__whitebg');