import React from 'react'
import { useHistory } from 'react-router-dom'

export default function Contacts(){

    const history = useHistory()

   

    const back = (e) => {
        e.preventDefault()
     history.push('/')
    }

    
    return (
    <div className="form">
        <button className="back-btn" onClick={(e) => back(e)}>go back</button>
        <form style={{ display: "flex", flexDirection: "column", height: "90%", justifyContent: "center", alignItems:"center"}}>
           <h1>Name</h1>
           <input type="text" placeholder="name" />

           <h1>Email</h1>
           <input type="email" placeholder="email"/>

           <h1>Message</h1>
           <textarea  placeholder="Message" rows={5} />
        </form>  
    </div>
    )
}