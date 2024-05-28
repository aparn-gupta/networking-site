import { Avatar } from '@mui/material'
import React from 'react'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PhotoIcon from '@mui/icons-material/Photo';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { useState } from 'react';

const InputBox = () => {

  let files = <div></div>
  let [showingInput, SetShowingInput] = useState(true)

  const handleSubmit = (e) => {
    e.preventDefault()

  }

  const chooseFile = <div><form onSubmit={handleSubmit}> <input type='file'/>  <button type='Submit'  className='bg-pink-500 w-20' > Post   </button>  </form>  </div>


  showingInput ? files = <div> </div> : files = chooseFile

  const openfiles = () => {

    SetShowingInput(prev => !prev)
   


  }



 


  return (



    
    <div className='m-3 p-4 bg-white rounded-xl'>
       
        <div className='flex '>
        <Avatar />
        <form className='w-full' onSubmit={handleSubmit}> 
        <input className='rounded-xl p-3 w-full' id='post' type= "text" name='post' placeholder="What's on your mind today?" value=""  />
        </form>
      

        </div>
        
        <div className='flex justify-between py-5 '>
        
          <div   >  <PlayCircleIcon className='text-red-500' /> Live Video  </div>
          <div  onClick={openfiles} >  <PhotoIcon className='text-blue-500' /> Photos/Video  </div>
          <div>  <EmojiEmotionsIcon className='text-yellow-500'  /> Feeling  </div>

        </div>
       <div className='flex justify-center'>   {files} </div>
     
    </div>
  )
}

export default InputBox
