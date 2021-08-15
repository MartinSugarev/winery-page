import React, { useContext, useState } from 'react'
import { ContextImages } from '../components/context'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import { useHistory } from 'react-router-dom'

export default function Wines(){
    const [ wineCount, SetWineCount ] = useState(0)
    const  value  = useContext(ContextImages)
    const { wines } = value
    const moveRight = (e) => {
         e.preventDefault()
         if(wineCount >= wines.length - 1){
             SetWineCount(0)
         }else{
            SetWineCount(wineCount + 1)
         }
    }

    const moveLeft = (e) => {
        e.preventDefault()
        if(wineCount <= 0){
            SetWineCount(0)
        }else{
           SetWineCount(wineCount - 1)
        }
   }

   const history = useHistory()

    const back = (e) => {
        e.preventDefault()
     history.push('/')
    }

    return (
    <div className="wines-layout"> 
    
       <div className="wine-descrp">
       <button className="back-btn-wines" onClick={(e) => back(e)}>go back</button>
           {wineCount === 0 ? "" : <BsArrowLeft className="btn-left" onClick={(e) => {
               moveLeft(e)
           }} />
        } 
           <div style={{height: "50%", width: "60%" , overflowY: "auto" }}>         
                <p>{wines[wineCount].description} </p>
           </div>
       </div>
       <div className="wine-photo">
           <img style={{ maxHeight: "100%", maxWidth:"100%"}} src={wines[wineCount].image} alt="wine-ph"/>
          {wineCount < wines.length - 1 ? <BsArrowRight className="btn-right" onClick={(e) => {
                moveRight(e)
           }}/> : ""
        }
       </div>
       
    </div>
    )
}