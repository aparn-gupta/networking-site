import React from "react";
import { Avatar } from '@mui/material'
import ReactPlayer from "react-player";
import { Link } from 'react-router-dom';





const Indistory = (props) => {



// const handleClick = (e)  => {
 
//   let myId = e.target.id
//   localStorage.setItem("myId", JSON.stringify(myId)) 

// }

  return (

     <div className='relative mr-2 rounded'   >  <Link to={`/stories/${props.id}`}  >  
    <div  className='absolute top-3 left-3 ' > <Link to={`/users/${props.userId}`} > <Avatar className=' ring-4 ring-pink-600 ' src= {props.src} />  </Link> </div>  <Link to={`/users/${props.userId}`}>  <p className=' absolute bottom-1.5 left-2 text-white font-bold text-sm'> {props.name}  </p> </Link>
<<<<<<< HEAD
    <div  className='absolute top-20 left-3 text-white font-bold italic ' > {props.text} </div>
       {props.imagesrc &&  <img  className='h-64 w-32 rounded-xl'  id = {props.id}   src= {props.imagesrc} /> }   {props.url &&  <ReactPlayer   id = {props.id} width="128px" height="256px" url= {props.url}  /> }
=======
       {props.imagesrc &&  <img  className='h-64 w-36 rounded-xl'  id = {props.id}   src= {props.imagesrc} /> }   {props.url &&  <ReactPlayer   id = {props.id} width="144px" height="256px" url= {props.url}  /> }
>>>>>>> 45c0a4df6042d02cb9eca38228d737cb9f1edca5
       </Link>         
      
       </div>  

  )

}

export default Indistory



