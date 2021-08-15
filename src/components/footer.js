import React, {  useContext}  from 'react'
import { ContextImages } from './context'

export default function Footer(){

    const value = useContext(ContextImages)
    const { info } = value
  return(
      <>
      <div className="footer-layout">
          <div className="footer-inner-layout">
              {info.map((el, index) => {
                  console.log(value);
                  
                  return (
                      <div key={el.id} className="img-around" >
                         <img className="footer-img" src={el.image} alt="photooo of mihovi estate" />
                      </div>
                  )
              })}
          </div>
      </div>
      </>
  )
}