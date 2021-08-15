import React from 'react'
import { info, wines } from '../data/mihoviPhotos'

 const ContextImages = React.createContext()

 function ContextImagesFunc({children}){
  const value = { info, wines }
  
return(
    <>
    <ContextImages.Provider value={value}>
       {children}
    </ContextImages.Provider>
    </>
)

}

export {ContextImages, ContextImagesFunc}