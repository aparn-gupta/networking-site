import React from 'react'
import { Avatar } from '@mui/material'
import ReactPlayer from "react-player";
import { Link } from 'react-router-dom';
import Storydata from './StoryData';
import Storypage from './storypage';
import { useState } from 'react';


const Indistory = (props) => {
  

//  const [myIid, setmyIid] = useState(null)



  // const storyId = props.match.params.id

  const handleClick  = (e) => {
   
    console.log(e.target.id)


  
  }



  


  return (

    <div className='relative'   >  <Link to="/stories/:id"  onClick={handleClick}  >  
    <div  className='absolute top-3 left-3 '  > <Avatar className=' ring-4 ring-pink-600 ' src= {props.src} /> </div>   <p className=' absolute bottom-2.5 left-2 text-white font-bold '> {props.name}  </p>
       {props.imagesrc &&  <img  className='h-64 w-32 '  id = {props.id}   src= {props.imagesrc} /> }   {props.url &&  <ReactPlayer   id = {props.id} width="128px" height="256px" url= {props.url}  /> }
       </Link>
      
      
      
       </div>  )


}

export default Indistory
