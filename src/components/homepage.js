import React from 'react'
import Navbar from './navbar'
import Headline from './headline'
import Footer from './footer'
import { ContextImagesFunc } from './context'
import { Link } from 'react-router-dom'


export default function Homepage(){
    return(
        <>
        <ContextImagesFunc>
            <div className="home-page-layout">
            <Headline title={"Mihovi estate"}/>
               <Navbar />
                  <Link className="wines-btn" to="/wines">Our wines</Link>
               <Footer />
             </div>  
            </ContextImagesFunc>
        </>
    )
}