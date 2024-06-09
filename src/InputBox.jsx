import { Avatar } from '@mui/material'
import React from 'react'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PhotoIcon from '@mui/icons-material/Photo';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import Postform from './postform';



export const formContext =  React.createContext()

const InputBox = () => {

  const [isShowing, setIsShowing] = React.useState(false)

  const displayform = isShowing ? {display : "block"} : {display : "none"}
  isShowing ? document.body.classList.add("stopscrolling") : document.body.classList.remove("stopscrolling")


  const handleClick  = () => {
    setIsShowing(prev => !prev)
    
 }



  return (    
    <div className='m-3 p-4 bg-white rounded-xl shadow-lg border-2 border-slate-200' > 
    <formContext.Provider value={ [isShowing, setIsShowing] }>
    <div style={displayform}> <div className='screenbox'> <Postform />  </div>  </div>

    </formContext.Provider>
  

     
     <div  >  <div className='flex' >
        <Avatar src = 'https://i.pinimg.com/originals/a4/60/14/a46014e6b16f2b2b2d3c4cec127711ec.jpg' />        
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


