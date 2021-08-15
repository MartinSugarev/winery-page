import React from 'react'
import { useHistory } from 'react-router-dom'
import image8 from '../images-footer/8.jpg'
import image9 from '../images-footer/9.jpg'
import { GiGrapes } from 'react-icons/gi'

export default function About(){

    const history = useHistory()

   

    const back = (e) => {
        e.preventDefault()
     history.push('/')
    }

    
    return(
        <div className="about-page">
             <button className="back-btn" onClick={(e) => back(e)}>go back</button>
             <div className="about-page-left">
                 <img src={image8} alt="black-white-grapes" /> 
             </div>
             <div className="about-page-right">
             <img src={image9} alt="black-white-grapes" /> 
             </div>
             <GiGrapes className="grapes"/>
            
        </div>
    ) 
}