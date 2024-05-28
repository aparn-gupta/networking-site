import React from 'react'
import { Avatar } from '@mui/material'
import ReactPlayer from "react-player";


const Indistory = (props) => {
  return (

    <div className='relative' >  
    <div  className='absolute top-3 left-3 '> <Avatar className=' ring-4 ring-pink-600 ' src= {props.src} /> </div>   <p className=' absolute bottom-2.5 left-2 text-white font-bold '> {props.name}  </p>
       {props.imagesrc &&  <img  className='h-64 w-32 ' src= {props.imagesrc} /> }   {props.url &&  <ReactPlayer  width="128px" height="256px" url= {props.url} /> }
       </div> 

  )
}

export default Indistory
