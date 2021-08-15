import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar(){

    return(
        <>
          <div className="navbar">
               <Link className="nav-links" to="/about">About</Link>         
               <Link className="nav-links" to="/contacts">Contacts</Link>
          </div>
        </>
    )
}