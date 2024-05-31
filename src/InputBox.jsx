import { Avatar } from '@mui/material'
import React from 'react'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PhotoIcon from '@mui/icons-material/Photo';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { useState } from 'react';
import Postform from './postform';

const InputBox = () => {
  
 const [unblurring, setUnblurring] = useState({})
 const [isShowing, setIsShowing] =  useState(false)

  const filterblur = {
    opacity: 1   
   
  }



const handleClick = () => {      
   
    document.body.classList.add("stopscrolling") 
    document.getElementById("myform").style.display = "block"     
    document.getElementById("myform").classList.add("unblur")     
  
  } 

  // const formStyle = isShowing ? {display: "block"} :  {display: "none"}

  return (    
    <div className='m-3 p-4 bg-white rounded-xl' > 
     <div className='flex justify-center h-screen w-screen' id='myform' style={{display: "none"}} >  <Postform  />      </div>  
     <div  >  <div className='flex' >
        <Avatar />        
        <input className='rounded-xl p-3 w-full' id='post' type= "text" name='post' placeholder="What's on your mind today?" onClick={handleClick}  />
        </div>
        
        <div className='flex justify-between py-5 '>
        
          <div   >  <PlayCircleIcon className='text-red-500' /> Live Video  </div>
          <div  onClick={handleClick} >  <PhotoIcon className='text-blue-500' /> Photos/Video  </div>
          <div>  <EmojiEmotionsIcon className='text-yellow-500'  /> Feeling  </div>

        </div>
       <div className='flex justify-center'>   </div>  </div> 
       
     
    </div>
  )
}

export default InputBox


