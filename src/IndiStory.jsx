import React from "react";
import { Avatar } from '@mui/material'
import ReactPlayer from "react-player";
import { Link } from 'react-router-dom';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from "react";

import { userData } from './userComponents/userData';
import { useridContext } from './MainComponent';

import { useNavigate } from "react-router-dom";






const Indistory = (props) => {




  let currentUser = {}
  const [selfId, setSelfId] = React.useContext(useridContext)
  
    for (let each of userData) {
      if (each.userId === parseInt(selfId)) {
        currentUser = each
  
  
      }
    }

    



  let usersNewStory = JSON.parse(localStorage.getItem("newStory"))

  const [showDeleteButton, setShowDeleteButton] = useState(false)

  
  const deleteStory = () => {

      if (usersNewStory)  {
        localStorage.removeItem("newStory")
        window.location.reload()
      
      
       
      }
  }

  const deleteButton = showDeleteButton ? <button onClick = {deleteStory} className="border-2 border-black p-2 bg-white"> Delete Story </button> : <div></div>

  const openMenu = () => {
    setShowDeleteButton(prev => !prev)


  }









  return (

     <div className='relative mr-2 rounded'   >  <Link to={`/stories/${props.userId}`}  >  
    <div  className='absolute top-3 left-3 ' > <Link to={`/users/${props.userId}`} > <Avatar className=' ring-4 ring-pink-600 ' src= {props.src} />  </Link> </div>  <Link to={`/users/${props.userId}`}>  <p className=' absolute bottom-1.5 left-2 text-white font-bold text-sm'> {props.name}  </p> </Link>
       {props.imagesrc &&  <img  className='xl:h-64 w-36 lg:h-48  rounded-xl'  id = {props.id}   src= {props.imagesrc} /> }   {props.url &&  <ReactPlayer   id = {props.id} width="144px" height="256px" url= {props.url}  /> }
       </Link>  
       <div className="absolute top-12 bottom-7 left-2.5 right-2.5 text-white font-bold  italic"> {props.text}  </div>       
     {  usersNewStory &&  props.userId === selfId &&  <div className="absolute top-3 right-2 text-white">  <MoreVertIcon  onClick = {openMenu} />  </div>}
    <div className="absolute top-10 right-3">  {deleteButton} </div>
      
       </div>  

  )

}

export default Indistory



