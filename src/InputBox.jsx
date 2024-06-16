import { Avatar } from '@mui/material'
import React from 'react'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PhotoIcon from '@mui/icons-material/Photo';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import Postform from './postform';
import Button from '@mui/material/Button';
import Feelingform from './Feelingform';

import { useridContext } from './MainComponent';
import { userData } from './userComponents/userData';



export const formContext =  React.createContext()
export const feelingformContext = React.createContext()

const InputBox = () => {

  const [isShowing, setIsShowing] = React.useState(false)
  const [isShowingfFeelingForm, setIsShowingFeelingForm] = React.useState(false)

  const displayCreatePostForm = isShowing ? {display : "block"} : {display : "none"}
  isShowing ? document.body.classList.add("stopscrolling") : document.body.classList.remove("stopscrolling")


  const displayFeelingForm = isShowingfFeelingForm ? {display : "block"} : {display : "none"}
  isShowingfFeelingForm ? document.body.classList.add("stopscrolling") : document.body.classList.remove("stopscrolling")


  const handleClickforCreatePost  = () => {
    setIsShowing(prev => !prev)
    
 }

 const handleClickforFeelingForm = () => {
  setIsShowingFeelingForm(prev => !prev)

 }

 let currentUser = {}
const [selfId, setSelfId] = React.useContext(useridContext)

  for (let each of userData) {
    if (each.userId === parseInt(selfId)) {
      currentUser = each


    }
  }



  return (    
    <div className='m-3 p-4 bg-white rounded-xl shadow-lg border-2 border-slate-200' > 
    <formContext.Provider value={ [isShowing, setIsShowing] }>
    <div style={displayCreatePostForm}> <div className='screenbox'> <Postform />  </div>  </div>
    </formContext.Provider>
    <feelingformContext.Provider value={ [isShowingfFeelingForm, setIsShowingFeelingForm]}> 
    <div style={displayFeelingForm}> <div className='screenbox'> <Feelingform />  </div>  </div>
    </feelingformContext.Provider>

   
  

     
     <div  >  <div className='flex' >
        <Avatar src = {currentUser.pfpSrc} />        
        <input className='rounded-xl p-3 w-full' id='post' type= "text" name='post' placeholder="What's on your mind today? " onClick={handleClickforCreatePost}  />
        </div>
        
        <div className='flex justify-between py-5 '>
        
          <Button  sx= {{color: 'black', textTransform: 'capitalize'}}>  <PlayCircleIcon className='text-red-500 mr-2' /> Live Video  </Button>
         <Button sx= {{color: 'black', textTransform: 'capitalize'}}  onClick={handleClickforCreatePost} >   <PhotoIcon className='text-blue-500 mr-2' /> Photos/Video  </Button>
         <Button  sx= {{color: 'black', textTransform: 'capitalize'}} onClick = {handleClickforFeelingForm} >  <EmojiEmotionsIcon className='text-yellow-500 mr-2'  /> Feeling  </Button>

        </div>
      </div> 
       
     
    </div>
  )
}

export default InputBox


